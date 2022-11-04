import Slider from './slider.js';
import Storage from './storage.js';
import Select from './select.js';

export default class App {
  #slider;
  #select;
  init() {
    // Initialized all components.
    this.#slider = new Slider('#slider');
    this.#select = new Select('#select', this.onAlbumChange.bind(this));
    const storage = new Storage();

    this.onAlbumChange(1);

    // Forms logic.
    const form = document.getElementById('form');
    const nameInput = document.getElementById('name-input');
    const phoneInput = document.getElementById('phone-input');
    const emailInput = document.getElementById('email-input');

    nameInput.addEventListener('change', (event) => {
      storage.setSurname(event.target.value);
    });

    phoneInput.addEventListener('change', (event) => {
      storage.setPhoneNumber(event.target.value);
    });

    emailInput.addEventListener('change', (event) => {
      storage.setEmail(event.target.value);
    });

    nameInput.value = storage.getSurname();
    phoneInput.value = storage.getPhoneNumber();
    emailInput.value = storage.getEmail();

    form.addEventListener('submit', () => {
      storage.clearSurname();
      storage.clearPhoneNumber();
      storage.clearEmail();
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

  onAlbumChange(albumId) {
    fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.#slider.setData(data.slice(0, 8));

        this.#slider.render();
        this.onButtonsClick();
      });
  }

  // Slider logic.
  onButtonsClick() {
    const btnLeft = document.querySelector('.circle.left');
    const btnRight = document.querySelector('.circle.right');

    btnLeft.addEventListener('click', () => {
      this.#slider.handleLeftClick();
    });

    btnRight.addEventListener('click', () => {
      this.#slider.handleRightClick();
    });
  }
}
