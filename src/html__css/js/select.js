export default class Select {
  #el;
  #dropdownList;
  #dropdownBtn;
  constructor(selector, onSelectChange) {
    this.#el = document.querySelector(selector);
    this.render();
    this.init(onSelectChange);
  }

  init(onSelectChange) {
    // --> Select logic.
    this.#dropdownBtn = document.querySelector('.prefer__select-btn');
    this.#dropdownList = document.querySelector('.prefer__select-list');

    // Click on button; Open/close dropdown list.
    this.#dropdownBtn.addEventListener('click', () => {
      this.#dropdownList.classList.toggle('prefer__select-list-visible');
      this.#dropdownBtn.classList.add('prefer__select-btn--active');
    });

    // Click on item, choose text of item, save focus os item.
    this.#dropdownList.onclick = (e) => {
      e.stopPropagation();
      const currentItem = e.target;
      const currentItemNumber = currentItem.getAttribute('data-value');
      this.#dropdownBtn.innerText = currentItem.innerText;
      this.#dropdownList.classList.remove('prefer__select-list-visible');
      this.#dropdownBtn.focus();
      onSelectChange(currentItemNumber);
    };

    //Click outside button -> closed dropdown, remove focus from button.
    document.addEventListener('click', (e) => {
      if (e.target !== this.#dropdownBtn) {
        this.#dropdownList.classList.remove('prefer__select-list-visible');
        this.#dropdownBtn.classList.remove('prefer__select-btn--active');
      }
    });

    //Press on Esc or Tab closed dropdown.
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' || e.key === 'Tab') {
        this.#dropdownList.classList.remove('prefer__select-list-visible');
      }
    });
  }

  createMarkup() {
    const allMarkup = `<button class="prefer__select-btn">Item 1</button>

    <ul class="prefer__select-list">
      <li class="prefer__select-list-item" data-value="1">Item 1</li>
      <li class="prefer__select-list-item" data-value="2">Item 2</li>
      <li class="prefer__select-list-item" data-value="3">Item 3</li>
    </ul>`;

    return allMarkup;
  }

  render() {
    const allMarkup = this.createMarkup();

    this.#el.innerHTML = allMarkup;
  }
}
