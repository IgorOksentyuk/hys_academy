import { SelectOptionsEnum } from './models/@types/selectOptionsEnum';
import { ISelect } from './models/select.model';

export default class Select implements ISelect {
  public readonly el: HTMLDivElement | null = null;
  public dropdownList: HTMLDivElement | null = null;
  public dropdownBtn: HTMLButtonElement | null = null;
  public currentItem: HTMLDivElement | null = null;

  constructor(selector: string, onSelectChange: (albumId: number) => void) {
    this.el = document.querySelector(selector);
    this.render();
    this.init(onSelectChange);
  }

  public init(onSelectChange: (albumId: number) => void) {
    // --> Select logic.
    this.dropdownBtn = document.querySelector('.prefer__select-btn');
    this.dropdownList = document.querySelector('.prefer__select-list');

    // Click on button; Open/close dropdown list.
    this.dropdownBtn?.addEventListener('click', () => {
      this.dropdownList?.classList.toggle('prefer__select-list-visible');
      this.dropdownBtn?.classList.add('prefer__select-btn--active');
    });

    // Click on item, choose text of item, save focus os item.
    this.dropdownList?.addEventListener('click', (e) => {
      e.stopPropagation();
      const currentItem = e.target as HTMLDivElement;
      const currentItemNumber = currentItem.getAttribute('data-value');
      this.dropdownBtn!.innerText = currentItem.innerText;
      this.dropdownBtn!.style.color = '#000';
      this.dropdownList?.classList.remove('prefer__select-list-visible');
      this.dropdownBtn?.focus();
      onSelectChange(Number(currentItemNumber));
    });

    //Click outside button -> closed dropdown, remove focus from button.
    document.addEventListener('click', (e) => {
      if (e.target !== this.dropdownBtn) {
        this.dropdownList?.classList.remove('prefer__select-list-visible');
        this.dropdownBtn?.classList.remove('prefer__select-btn--active');
      }
    });

    //Press on Esc or Tab closed dropdown.
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' || e.key === 'Tab') {
        this.dropdownList?.classList.remove('prefer__select-list-visible');
      }
    });
  }

  public createListItems() {
    const itemsLength = Object.values(SelectOptionsEnum).length / 2;
    let allTemplate = ``;

    for (let index = 0; index < itemsLength; index++) {
      allTemplate += `<li class="prefer__select-list-item" data-value="${index + 1}">${
        SelectOptionsEnum[index]
      }</li>`;
    }

    return allTemplate;
  }

  public createMarkup() {
    const allMarkup = `<button class="prefer__select-btn">${SelectOptionsEnum[0]}</button>

    <ul class="prefer__select-list">
      ${this.createListItems()}
    </ul>`;

    return allMarkup;
  }

  public render() {
    const allMarkup = this.createMarkup();

    this.el!.innerHTML = allMarkup;
  }
}
