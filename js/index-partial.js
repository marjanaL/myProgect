document.addEventListener('htmx:afterSwap', (e) => {
  if (!e.target.classList.contains('header')) return;

  const burger = document.querySelector('.burger');
  const menu = document.querySelector('.header__menu');

  if (!burger || !menu) return;

  burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
  });

  document.querySelectorAll('.header__menu-link').forEach(link => {
    link.addEventListener('click', () => {
      burger.classList.remove('active');
      menu.classList.remove('active');
    });
  });
});