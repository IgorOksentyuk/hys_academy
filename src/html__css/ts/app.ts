import Slider from './slider';
import Storage from './storage';
import Select from './select';
import $ from 'jquery';
import 'slick-carousel';

export default class App {
  #slider: any;
  #select: any;
  init() {
    // Initialized all components.
    this.#slider = new Slider('#slider');
    this.#select = new Select('#select', this.onAlbumChange.bind(this));
    const storage = new Storage();

    this.onAlbumChange(1);

    // Forms logic.
    const form: any = document.getElementById('form');
    const nameInput: any = document.getElementById('name-input');
    const phoneInput: any = document.getElementById('phone-input');
    const emailInput: any = document.getElementById('email-input');

    nameInput.addEventListener('input', (event: any) => {
      storage.setInputValue('inputName', event.target.value);
    });

    phoneInput.addEventListener('input', (event: any) => {
      storage.setInputValue('phone-number', event.target.value);
    });

    emailInput.addEventListener('input', (event: any) => {
      storage.setInputValue('email', event.target.value);
    });

    nameInput.value = storage.getInputValue('inputName');
    phoneInput.value = storage.getInputValue('phone-number');
    emailInput.value = storage.getInputValue('email');

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

  onAlbumChange(albumId: number) {
    fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.#slider.setData(data.slice(0, 8));

        this.#slider.render();
        this.onButtonsClick();
      })
      .catch((error) => {
        console.log('Error: ', error);
      });
  }

  // Slider logic.
  onButtonsClick() {
    const btnLeft: any = document.querySelector('.circle.left');
    const btnRight: any = document.querySelector('.circle.right');

    btnLeft.addEventListener('click', () => {
      this.#slider.handleLeftClick();
    });

    btnRight.addEventListener('click', () => {
      this.#slider.handleRightClick();
    });
  }
}
