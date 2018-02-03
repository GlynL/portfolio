const hamburger = document.querySelector('.navbar__list--hamburger');
const sideNavClose = document.querySelector('#navbar__sidenav__close');
const sideNav = document.querySelector('#navbar__sidenav');
const sideNavItems = document.querySelectorAll('.navbar__list__item');

hamburger.addEventListener('click', () => {
  sideNavItems.forEach(item => {
    item.classList.remove('hide');
  });
  sideNav.style.width = '100%';
});

sideNavClose.addEventListener('click', () => {
  sideNav.style.width = 0;
});

sideNavItems.forEach(item => {
  item.addEventListener('click', () => {
    sideNav.style.width = 0;
    event.preventDefault();
    let section = document.querySelector(item.childNodes[1].getAttribute('href'));
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
    setTimeout(() => section.focus(), 500);
  });
});
