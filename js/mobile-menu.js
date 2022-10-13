const hamburgerBtn = document.querySelector('.burger-icon');
const hamburgerOpened = document.getElementById('burger-opened');
const crossBtn = document.querySelector('.cross');
const navItems = document.querySelectorAll('.navigation__item');
const navMenu = document.querySelector('.navigation');

matchMedia('only screen and (min-width:768px)').addEventListener('change', () =>
  navMenu.classList.remove('open'),
);

hamburgerBtn.addEventListener('click', () => {
  navMenu.classList.add('open');
});

hamburgerOpened.addEventListener('click', () => {
  navMenu.classList.remove('open');
});

crossBtn.addEventListener('click', () => {
  navMenu.classList.remove('open');
});

navItems.forEach((item) =>
  item.addEventListener('click', () => {
    navMenu.classList.remove('open');
  }),
);
