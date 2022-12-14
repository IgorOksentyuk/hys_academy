import { SliderItem } from './models/@types/sliderItem';

export default class Slider {
  private readonly el: HTMLDivElement | null = null;
  private data: SliderItem[] | null = null;
  private offset: number = 0;
  constructor(selector: string) {
    this.el = document.querySelector(selector);
  }

  setData(data: SliderItem[] | null) {
    this.data = data;
  }

  createSliderItemMarkup(obj: SliderItem) {
    const itemMarkup = `
      <div class="prefer__box-line-item" style="background-image: url('${obj.url}');">
          <h3 class="block-subtitle">${obj.title}</h3>
      </div>`;

    return itemMarkup;
  }

  createMarkup() {
    let itemsMarkup = ``;
    this.data?.forEach((item: SliderItem) => {
      itemsMarkup += this.createSliderItemMarkup(item);
    });
    const allMarkup = `<div class="circle left">
    <svg
      class="arrow-icon --arrow-hover"
      width="9"
      height="14"
      fill="none"
      stroke="#64BE97"
    >
      <use xlink:href="sprite.svg#arrow-left"></use>
    </svg>
  </div>
  <div class="prefer__box">
    <div class="prefer__box-line" id="slider-line">
     ${itemsMarkup}
    </div>
  </div>
  <div class="circle right">
    <svg
      class="arrow-icon --arrow-hover"
      width="9"
      height="14"
      fill="none"
      stroke="#64BE97"
    >
      <use xlink:href="sprite.svg#arrow-right"></use>
    </svg>
  </div>`;

    return allMarkup;
  }

  render() {
    const allMarkup = this.createMarkup();

    this.el!.innerHTML = allMarkup;
    this.setOffset(0);
  }

  setOffset(offset: number) {
    this.offset = offset;
    const sliderLine: HTMLDivElement | null = document.querySelector('#slider-line');
    return (sliderLine!.style.transform = `translateX(${this.offset}px)`);
  }

  handleLeftClick() {
    if (this.offset + 207 <= 0) {
      this.setOffset(this.offset + 207);
    }
  }

  handleRightClick() {
    let maxLimit;
    if (window.innerWidth < 768) {
      maxLimit = this.data!.length * 207 - 207;
    } else if (window.innerWidth > 768 && window.innerWidth < 1440) {
      maxLimit = this.data!.length * 207 - 2 * 207;
    } else {
      maxLimit = this.data!.length * 207 - 4 * 207;
    }

    if (this.offset - 207 >= -maxLimit) {
      this.setOffset(this.offset - 207);
    }
  }
}
