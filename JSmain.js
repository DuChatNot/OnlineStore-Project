const navE = document.querySelector('.navbar-email');
const menu = document.querySelector('.desktop-menu');

navE.addEventListener('click', toggleMenu);

function toggleMenu() {
    menu.classList.toggle('inactive');
}