const hamburgerBtn: any = document.querySelector('.burger-icon');
const hamburgerOpened: any = document.getElementById('burger-opened');
const crossBtn: any = document.querySelector('.cross');
const navItems: any = document.querySelectorAll('.navigation__item');
const navMenu: any = document.querySelector('.navigation');

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

navItems.forEach((item: any) =>
  item.addEventListener('click', () => {
    navMenu.classList.remove('open');
  }),
);
