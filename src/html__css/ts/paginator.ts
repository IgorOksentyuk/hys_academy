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

const paginator = (selector: any, data: any) => {
  let postsTemplate = ``;

  data.forEach((post: any) => {
    postsTemplate += getPostMarkup(post);
  });

  const template = `<h2 class="block-title">Latest Blog</h2>
  <div class="blog__box">
    ${postsTemplate}
  </div>`;

  const element = document.querySelector(selector);

  element.innerHTML = template;
};

const getPostMarkup = (post: any) => {
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

const selectPosts = (pageNumber: any) => {
  const start = (pageNumber - 1) * 2;
  const end = start + 2;
  const sliced = allPosts.slice(start, end);

  return sliced;
};

const onPageClick = (pageNumber: any) => {
  const slicedPages = selectPosts(pageNumber);
  paginator('#paginator', slicedPages);
};

const pages: any = document.getElementById('pages-container');

let currentPageEl: any;

const setPages = (data: any) => {
  for (let i = 0; i < data.length / 2; i++) {
    const page: any = document.createElement('div');
    page.classList.add('page-number');
    page.setAttribute('data-page-number', `${i + 1}`);
    page.innerText = i + 1;
    pages.appendChild(page);
    if (i === 0) {
      currentPageEl = page;
      page.classList.add('active-page');
    }
  }
};

pages.onclick = (e: any) => {
  const page = e.target;
  const pageNumber = Number(page.getAttribute('data-page-number'));
  if (currentPageEl) {
    currentPageEl.classList.remove('active-page');
  }
  if (pageNumber > 0) {
    onPageClick(pageNumber);
    currentPageEl = page;
    page.classList.add('active-page');
  }
};

paginator('#paginator', selectPosts(1));
setPages(allPosts);
