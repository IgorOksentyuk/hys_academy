export default class Select {
  #el;
  constructor(selector) {
    this.#el = document.querySelector(selector);
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

  onSelectChange(albumId) {
    return albumId;
  }
}
