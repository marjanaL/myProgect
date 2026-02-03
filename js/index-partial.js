document.body.addEventListener('click', (e) => {
  const burger = e.target.closest('.burger');
  if (!burger) return;

  const menu = document.querySelector('.header__menu');
  const socials = document.querySelector('.header__socials');
  if (!menu || !socials) return;

  burger.classList.toggle('active');
  menu.classList.toggle('active');
  socials.classList.toggle('active');

  console.log(
    'BURGER CLICK →',
    'menu:', menu.classList.contains('active'),
    'socials:', socials.classList.contains('active')
  );
});

document.body.addEventListener('click', (e) => {
  const link = e.target.closest('.header__menu-link');
  if (!link) return;

  const menu = document.querySelector('.header__menu');
  const burger = document.querySelector('.burger');
  const socials = document.querySelector('.header__socials');

  menu?.classList.remove('active');
  burger?.classList.remove('active');
  socials?.classList.remove('active');
});

document.body.addEventListener('click', (e) => {
  const orderBtn = e.target.closest('.pricing .button');
  if (!orderBtn) return;

  const card = orderBtn.closest('.pricing__card');
  const plan = card.querySelector('.pricing__card-title')?.textContent;

  const overlay = document.querySelector('.cart-overlay');
  overlay.querySelector('.cart__plan').textContent = plan;

  overlay.classList.add('active');
});

document.body.addEventListener('click', (e) => {
  if (
    e.target.closest('.cart__close') ||
    e.target.closest('.cart__ok')
  ) {
    document.querySelector('.cart-overlay').classList.remove('active');
  }
});