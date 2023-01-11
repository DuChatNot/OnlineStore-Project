const navE = document.querySelector('.navbar-email');
const menu = document.querySelector('.desktop-menu');
const bicon = document.querySelector('.menu');
const mobmenu = document.querySelector('.mobile-menu');

navE.addEventListener('click', toggleMenu);
bicon.addEventListener('click', toggleMobMenu);

function toggleMenu() {
    menu.classList.toggle('inactive');
}

function toggleMobMenu() {
    mobmenu.classList.toggle('inactive');
}