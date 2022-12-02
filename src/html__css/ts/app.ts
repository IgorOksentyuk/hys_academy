import Slider from './slider';
import Storage from './storage';
import Select from './select';

import { BaseApp } from './models/baseApp.model';
import { ReadOnly } from './decorators/readOnly.decorator';

import $ from 'jquery';
import 'slick-carousel';

export default class App extends BaseApp {
  public slider?: Slider;
  public select?: Select;

  @ReadOnly
  init() {
    // Initialized all components.
    this.slider = new Slider('#slider');
    this.select = new Select('#select', this.getSliderData.bind(this));
    const storage = new Storage();

    this.getSliderData(1);

    // Forms logic.
    const form = document.getElementById('form') as HTMLInputElement;
    const nameInput = document.getElementById('name-input') as HTMLInputElement;
    const phoneInput = document.getElementById('phone-input') as HTMLInputElement;
    const emailInput = document.getElementById('email-input') as HTMLInputElement;

    nameInput.addEventListener('input', (event: Event) => {
      const nameInputTarget = event.target as HTMLInputElement;
      storage.setInputValue('inputName', nameInputTarget.value);
    });

    phoneInput.addEventListener('input', (event: Event) => {
      const phoneInputTarget = event.target as HTMLInputElement;
      storage.setInputValue('phone-number', phoneInputTarget.value);
    });

    emailInput.addEventListener('input', (event: Event) => {
      const emailInputTarget = event.target as HTMLInputElement;
      storage.setInputValue('email', emailInputTarget.value);
    });

    nameInput.value = storage.getInputValue<string>('inputName');
    phoneInput.value = storage.getInputValue<string>('phone-number');
    emailInput.value = storage.getInputValue<string>('email');

    form.addEventListener('submit', () => {
      storage.clearInputValue('inputName');
      storage.clearInputValue('phone-number');
      storage.clearInputValue('email');
    });

    // --> Slick slider logic.

    $(document).ready(function () {
      $('.courses__box').slick({
        mobileFirst: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        variableWidth: true,

        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            },
          },
        ],
      });
    });
  }

  getSliderData(albumId: number) {
    fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.slider?.setData(data.slice(0, 8));

        this.slider?.render();
        this.onButtonsClick();
      })
      .catch((error) => {
        console.log('Error: ', error);
      });
  }

  // Slider logic.
  onButtonsClick(): void {
    const btnLeft = document.querySelector('.circle.left');
    const btnRight = document.querySelector('.circle.right');

    btnLeft?.addEventListener('click', () => {
      this.slider?.handleLeftClick();
    });

    btnRight?.addEventListener('click', () => {
      this.slider?.handleRightClick();
    });
  }
}
