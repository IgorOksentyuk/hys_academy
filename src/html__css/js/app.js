import Slider from './slider.js';
import Storage from './storage.js';

export default class App {
  init() {
    const slider = new Slider('#slider');
    const storage = new Storage();
    const allSlides = storage.getSliderData();

    slider.setData(allSlides);

    slider.render();

    const btnLeft = document.querySelector('.circle.left');
    const btnRight = document.querySelector('.circle.right');

    btnLeft.addEventListener('click', () => {
      slider.handleLeftClick();
    });
    btnRight.addEventListener('click', () => {
      slider.handleRightClick();
    });

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

    //Slick slider for Courses section//

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
}
