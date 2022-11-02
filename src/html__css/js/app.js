import Slider from './slider.js';
import Storage from './storage.js';
import Select from './select.js';

export default class App {
  init() {
    // Initialized all components.
    const slider = new Slider('#slider');
    const select = new Select('#select');
    const storage = new Storage();

    fetch(`https://jsonplaceholder.typicode.com/albums/1/photos`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        slider.setData(data.slice(0, 8));

        slider.render();
        onButtonsClick();
      });

    select.render();

    // Slider logic.
    const onButtonsClick = () => {
      const btnLeft = document.querySelector('.circle.left');
      const btnRight = document.querySelector('.circle.right');

      btnLeft.addEventListener('click', () => {
        slider.handleLeftClick();
      });

      btnRight.addEventListener('click', () => {
        slider.handleRightClick();
      });
    };

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

    // --> Select logic.
    const dropdownBtn = document.querySelector('.prefer__select-btn');
    const dropdownList = document.querySelector('.prefer__select-list');

    // Click on button; Open/close dropdown list.
    dropdownBtn.addEventListener('click', () => {
      dropdownList.classList.toggle('prefer__select-list-visible');
      dropdownBtn.classList.add('prefer__select-btn--active');
    });

    // Click on item, choose text of item, save focus os item.
    dropdownList.onclick = (e) => {
      e.stopPropagation();
      const currentItem = e.target;
      const currentItemNumber = currentItem.getAttribute('data-value');
      dropdownBtn.innerText = currentItem.innerText;
      dropdownList.classList.remove('prefer__select-list-visible');
      dropdownBtn.focus();
      const selectedAlbum = select.onSelectChange(currentItemNumber);

      fetch(`https://jsonplaceholder.typicode.com/albums/${selectedAlbum}/photos`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          slider.setData(data.slice(0, 8));

          slider.render();
          onButtonsClick();
        });
    };

    //Click outside button -> closed dropdown, remove focus from button.
    document.addEventListener('click', (e) => {
      if (e.target !== dropdownBtn) {
        dropdownList.classList.remove('prefer__select-list-visible');
        dropdownBtn.classList.remove('prefer__select-btn--active');
      }
    });

    //Press on Esc or Tab closed dropdown.
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' || e.key === 'Tab') {
        dropdownList.classList.remove('prefer__select-list-visible');
      }
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
}
