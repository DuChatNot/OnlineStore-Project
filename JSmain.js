const navE = document.querySelector('.navbar-email');
const menu = document.querySelector('.desktop-menu');
const bicon = document.querySelector('.menu');
const carticon = document.querySelector('.navbar-shopping-cart');
const cart = document.querySelector('.product-detail');
const mobmenu = document.querySelector('.mobile-menu');
const cardsContainer = document.querySelector('.cards-container');

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

const plist = []; //El arrays sera tan largo como se le agregen elementos (.push)

plist.push({
    name: 'Boxing Gloves',
    price: 60,
    image: 'https://images.pexels.com/photos/6296124/pexels-photo-6296124.jpeg?auto=compress&cs=tinysrgb&w=1600',
});
plist.push({
    name: 'Trainning Pads',
    price: 45,
    image: 'https://images.pexels.com/photos/6296115/pexels-photo-6296115.jpeg?auto=compress&cs=tinysrgb&w=1600',
});
plist.push({
    name: 'Mouthguard',
    price: 20,
    image: 'https://images.pexels.com/photos/8744822/pexels-photo-8744822.jpeg?auto=compress&cs=tinysrgb&w=1600',
});

/*Función creadora*/ function renderObjects(arr){
    for (product of arr){ //Para cada variable del arreglo:

        const productCard = document.createElement('div'); //Se crea sección Div
        productCard.classList.add('product-card'); //Clase de sección Div
    
        const img = document.createElement('img'); //Se crea imagen
        img.setAttribute('src', product.image); //Se obtiene y otorga la fuente de la imagen
    
    ////////////////////////////
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
    ////////////////////////////
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.append(productPrice,productName); //Al elemento "productInfoDiv" se le adjuntan los elementos "productPrice & productName"
    
    ////////////////////////////
    
        const productInfoFigure = document.createElement('figure');
        const cart = document.createElement('img');
        cart.setAttribute('src','./icons/bt_add_to_cart.svg');
    
        productInfoFigure.append(cart); //Al elemento "productInfoFigure" se le adjunta el elemento "Cart"
    
        productInfo.append(productInfoDiv,productInfoFigure);
    
        productCard.append(img,productInfo);
    
        cardsContainer.appendChild(productCard);
    
    
        //Codigo HTML utilizado de plantilla:
    
        /*<div class="product-card">
            <img src="https://images.pexels.com/photos/6296124/pexels-photo-6296124.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="">
            <div class="product-info">
              <div>
                <p>$60.00</p>
                <p>Boxing Gloves</p>
              </div>
              <figure>
                <img src="./icons/bt_add_to_cart.svg" alt="">
              </figure>
            </div>
          </div> -->
        */
    }
}

renderObjects(plist);

