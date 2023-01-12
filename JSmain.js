//Constantes globales
const navE = document.querySelector('.navbar-email');
const menu = document.querySelector('.desktop-menu');
const bicon = document.querySelector('.menu');
const carticon = document.querySelector('.navbar-shopping-cart');
const cart = document.querySelector('.product-detail');
const mobmenu = document.querySelector('.mobile-menu');
const cardsContainer = document.querySelector('.cards-container');

//Eventos & Variables útiles
navE.addEventListener('click', toggleMenu);
bicon.addEventListener('click', toggleMobMenu);
carticon.addEventListener('click', shcrt);

const mobMenuOpen = mobmenu.classList.contains('inactive');
const menuOpen = menu.classList.contains('inactive');
const cartOpen = cart.classList.contains('inactive');

// Open/Close Functions
function toggleMenu() { /* Menu pequeño */
    menu.classList.toggle('inactive');
    if(cartOpen){
        cart.classList.add('inactive');
    }

    if(productDetailOpen){
        productDetail.classList.add('inactive');
    }
}
function toggleMobMenu() { /*Menu largo*/ 
    mobmenu.classList.toggle('inactive');
    if(cartOpen){
        cart.classList.add('inactive');
    }

    if(productDetailOpen){
        productDetail.classList.add('inactive');
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
    if(productDetailOpen){
        productDetail.classList.add('inactive');
    }
}

//Array & Products ///////////////////////////////////////////////////////////////////

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
plist.push({
    name: 'Dummy',
    price: 500,
    image: 'https://images.pexels.com/photos/6296027/pexels-photo-6296027.jpeg?auto=compress&cs=tinysrgb&w=1600',
});
plist.push({
    name: 'Pads',
    price: 40,
    image: 'https://images.pexels.com/photos/6296119/pexels-photo-6296119.jpeg?auto=compress&cs=tinysrgb&w=1600',
});
plist.push({
    name: 'Bandages',
    price: 10,
    image: 'https://images.pexels.com/photos/9943942/pexels-photo-9943942.jpeg?auto=compress&cs=tinysrgb&w=1600',
});

//Constantes Aside lado B/////////////////////////////////////////////////////////////////////////////////////

const productDetail = document.querySelector('.product-detail-B');
const productDetailOpen = productDetail.classList.contains('inactive');

const close = document.querySelector('.product-detail-B-close');
close.addEventListener('click',fb)

function fb(){
    productDetail.classList.add('inactive');
}

function f(){
    productDetail.classList.remove('inactive');

    if (mobMenuOpen){
        mobmenu.classList.add('inactive');
    } 
    
    if(cartOpen){ 
        cart.classList.add('inactive');
    }

    if(menuOpen){
        menu.classList.add('inactive');
    }
}


//Función creadora///////////////////////////////////////////////////////////////

function renderObjects(arr){
    for (product of arr){ //Para cada variable del arreglo:

        const productCard = document.createElement('div'); //Se crea sección Div
        productCard.classList.add('product-card'); //Clase de sección Div
        productCard.addEventListener('click',f);
        

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


