document.body.addEventListener('click', (e) => {
  const burger = e.target.closest('.burger');
  if (!burger) return;

  const menu = document.querySelector('.header__menu');
  if (!menu) return;

  burger.classList.toggle('active');
  menu.classList.toggle('active');

  console.log('BURGER CLICK → active:', menu.classList.contains('active'));
});

document.body.addEventListener('click', (e) => {
  const link = e.target.closest('.header__menu-link');
  if (!link) return;

  const menu = document.querySelector('.header__menu');
  const burger = document.querySelector('.burger');

  menu?.classList.remove('active');
  burger?.classList.remove('active');
});