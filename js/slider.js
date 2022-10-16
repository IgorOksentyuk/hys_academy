const allSlides = [
  {
    albumId: 1,
    id: 1,
    title: 'accusamus beatae ad facilis cum similique qui sunt',
    url: 'https://via.placeholder.com/600/92c952',
    thumbnailUrl: 'https://via.placeholder.com/150/92c952',
  },
  {
    albumId: 1,
    id: 2,
    title: 'reprehenderit est deserunt velit ipsam',
    url: 'https://via.placeholder.com/600/771796',
    thumbnailUrl: 'https://via.placeholder.com/150/771796',
  },
  {
    albumId: 1,
    id: 3,
    title: 'officia porro iure quia iusto qui ipsa ut modi',
    url: 'https://via.placeholder.com/600/24f355',
    thumbnailUrl: 'https://via.placeholder.com/150/24f355',
  },
  {
    albumId: 1,
    id: 4,
    title: 'culpa odio esse rerum omnis laboriosam voluptate repudiandae',
    url: 'https://via.placeholder.com/600/d32776',
    thumbnailUrl: 'https://via.placeholder.com/150/d32776',
  },
  {
    albumId: 1,
    id: 5,
    title: 'natus nisi omnis corporis facere molestiae rerum in',
    url: 'https://via.placeholder.com/600/f66b97',
    thumbnailUrl: 'https://via.placeholder.com/150/f66b97',
  },
  {
    albumId: 1,
    id: 6,
    title: 'accusamus ea aliquid et amet sequi nemo',
    url: 'https://via.placeholder.com/600/56a8c2',
    thumbnailUrl: 'https://via.placeholder.com/150/56a8c2',
  },
  {
    albumId: 1,
    id: 7,
    title: 'officia delectus consequatur vero aut veniam explicabo molestias',
    url: 'https://via.placeholder.com/600/b0f7cc',
    thumbnailUrl: 'https://via.placeholder.com/150/b0f7cc',
  },
  {
    albumId: 1,
    id: 8,
    title: 'aut porro officiis laborum odit ea laudantium corporis',
    url: 'https://via.placeholder.com/600/54176f',
    thumbnailUrl: 'https://via.placeholder.com/150/54176f',
  },
  {
    albumId: 1,
    id: 9,
    title: 'qui eius qui autem sed',
    url: 'https://via.placeholder.com/600/51aa97',
    thumbnailUrl: 'https://via.placeholder.com/150/51aa97',
  },
  {
    albumId: 1,
    id: 10,
    title: 'beatae et provident et ut vel',
    url: 'https://via.placeholder.com/600/810b14',
    thumbnailUrl: 'https://via.placeholder.com/150/810b14',
  },
];

class Slider {
  #el;
  #data;
  #offset = 0;
  constructor(selector) {
    this.#el = document.querySelector(selector);
  }

  setData(data) {
    this.#data = data;
  }

  createSliderItemMarkup(obj) {
    const itemMarkup = `
      <div class="prefer__box-line-item" style="background-image: url('${obj.url}');">
          <h3 class="block-subtitle">${obj.title}</h3>
      </div>`;

    return itemMarkup;
  }

  createMarkup() {
    let itemsMarkup = ``;
    this.#data.forEach((item) => {
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
      <use xlink:href="/html__css/images/sprite.svg#arrow-left"></use>
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
      <use xlink:href="/html__css/images/sprite.svg#arrow-right"></use>
    </svg>
  </div>`;

    return allMarkup;
  }

  render() {
    const allMarkup = this.createMarkup();

    this.#el.innerHTML = allMarkup;
  }

  handleLeftClick() {
    this.#offset += 207;
    if (this.#offset > 0) {
      this.#offset = 0;
    }
    document.querySelector('#slider-line').style.transform = `translateX(${this.#offset}px)`;
  }

  handleRightClick() {
    let maxLimit;
    if (window.innerWidth < 768) {
      maxLimit = this.#data.length * 207 - 207;
    } else if (window.innerWidth > 768 && window.innerWidth < 1440) {
      maxLimit = this.#data.length * 207 - 2 * 207;
    } else {
      maxLimit = this.#data.length * 207 - 4 * 207;
    }

    if (this.#offset - 207 >= -maxLimit) {
      this.#offset -= 207;
    }

    document.querySelector('#slider-line').style.transform = `translateX(${this.#offset}px)`;
  }
}

const slider = new Slider('#slider');

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

//Slick slider for Courses section//

$(document).ready(function () {
  $('.courses__box').slick({});
});
