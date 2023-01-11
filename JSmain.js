const navE = document.querySelector('.navbar-email');
const menu = document.querySelector('.desktop-menu');
const bicon = document.querySelector('.menu');
const carticon = document.querySelector('.navbar-shopping-cart');
const cart = document.querySelector('.product-detail');
const mobmenu = document.querySelector('.mobile-menu');

navE.addEventListener('click', toggleMenu);
bicon.addEventListener('click', toggleMobMenu);
carticon.addEventListener('click', shcrt);

const mobMenuOpen = mobmenu.classList.contains('inactive');
const menuOpen = menu.classList.contains('inactive');
const cartOpen = cart.classList.contains('inactive');

function toggleMenu() { /* Menu pequeño */
    menu.classList.toggle('inactive');
    if(cartOpen){
        cart.classList.add('inactive');
    }
}

function toggleMobMenu() { /*Menu largo*/ 
    mobmenu.classList.toggle('inactive');
    if(cartOpen){
        cart.classList.add('inactive');
    }
}

function shcrt(){ /*Menu lateral*/ 
    cart.classList.toggle('inactive');
    if (mobMenuOpen){
        mobmenu.classList.add('inactive');
    }

    if(menuOpen){
        menu.classList.add('inactive');
    }
}