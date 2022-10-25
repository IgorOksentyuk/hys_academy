const allPosts = [
  {
    id: 1,
    title: 'accusamus beatae ad facilis cum similique qui sunt',
    url: 'https://via.placeholder.com/600/92c952',
    userImage: 'https://via.placeholder.com/150/92c952',
    redirectLink: 'https://jsonplaceholder.typicode.com',
    category: 'Design',
  },
  {
    id: 2,
    title: 'reprehenderit est deserunt velit ipsam',
    url: 'https://via.placeholder.com/600/771796',
    userImage: 'https://via.placeholder.com/150/771796',
    redirectLink: 'https://jsonplaceholder.typicode.com',
    category: 'Design',
  },
  {
    id: 3,
    title: 'officia porro iure quia iusto qui ipsa ut modi',
    url: 'https://via.placeholder.com/600/24f355',
    userImage: 'https://via.placeholder.com/150/24f355',
    redirectLink: 'https://jsonplaceholder.typicode.com',
    category: 'Design',
  },
  {
    id: 4,
    title: 'culpa odio esse rerum omnis laboriosam voluptate repudiandae',
    url: 'https://via.placeholder.com/600/d32776',
    userImage: 'https://via.placeholder.com/150/d32776',
    redirectLink: 'https://jsonplaceholder.typicode.com',
    category: 'Design',
  },
  {
    id: 5,
    title: 'natus nisi omnis corporis facere molestiae rerum in',
    url: 'https://via.placeholder.com/600/f66b97',
    userImage: 'https://via.placeholder.com/150/f66b97',
    redirectLink: 'https://jsonplaceholder.typicode.com',
    category: 'Design',
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
      <p>${post.category}</p>
      <img
        class="blog__box-item-img"
        width="328"
        src="${post.url}"
        alt="card-img"
      />
      <img
        class="blog__box-item-man"
        src="${post.userImage}"
        alt="man_1"
      />
      <h3 class="block-subtitle">${post.title}</h3>
      <p><a href="${'https://jsonplaceholder.typicode.com'}"> Read Now</a></p>
  </div>`;

  return item;
};

const selectPosts = (pageNumber) => {
  const start = (pageNumber - 1) * 2;
  const end = start + 2;
  const sliced = allPosts.slice(start, end);

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
