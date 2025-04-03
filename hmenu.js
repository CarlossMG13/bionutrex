const hamburger = document.querySelector('.hamburger');
const menuMobile = document.querySelector('.menu-mobile');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    menuMobile.classList.toggle('open');
    menu.classList.toggle('hidden');
});