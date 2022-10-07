const allPosts = [
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
];

const paginator = (selector, data) => {
  let postsTemplate = ``;

  data.forEach((post) => {
    postsTemplate += getPostMarkup(post);
  });

  const template = ` <div class="blog__box">
  ${postsTemplate}
  
</div>`;

  const element = document.querySelector(selector);

  element.innerHTML = template;
};

const getPostMarkup = (post) => {
  const item = `
  <div class="blog__box-item">
    <div class="blog__box-item-background"></div>
      <p>DESIGN</p>
      <img
        class="blog__box-item-img"
        width="328"
        src="${post.url}"
        alt="card-img"
      />
      <img
        class="blog__box-item-man"
        src="/html__css/images/blog-block/man_first.png"
        alt="man_1"
      />
      <h3 class="block-subtitle">${post.title}</h3>
      <p>Read Now</p>
  </div>`;

  return item;
};

const selectPosts = (pageNumber) => {
  const start = (pageNumber - 1) * 2;
  const end = start + 2;
  const sliced = allPosts.slice(start, end);
  const containerCenter = document.querySelector('.blog__container');
  containerCenter.style.cssText = `align-self: start`;

  if (sliced.length < 2) {
    containerCenter.style.cssText = `align-self: center`;
  }

  return sliced;
};

const onPageClick = (pageNumber) => {
  const slicedPages = selectPosts(pageNumber);
  paginator('#paginator', slicedPages);
};

const pages = document.querySelectorAll('.blog__box-numbers .block-subtitle');

const setActive = () => {
  for (let index = 0; index < pages.length; index++) {
    pages[index].classList.remove('active-page');
  }
};

for (let index = 0; index < pages.length; index++) {
  pages[index].addEventListener('click', (elem) => {
    const pageNumber = Number(elem.target.getAttribute('data-page-number'));
    onPageClick(pageNumber);

    setActive();
    pages[index].classList.add('active-page');
  });
}

paginator('#paginator', selectPosts(1));
