const navbarNav = document.querySelector ('.navbar-nav');
document.querySelector('#menu').onclick = () =>{

    navbarNav.classList.toggle('active');
}

const menu = document.querySelector ('#menu');

document.addEventListener('click', function(e){
    if(!menu.contains(e.target) && ! navbarNav.contains (e.target)) {
        navbarNav.classList.remove('active');
    }
});

const sc = document.querySelector('#shopping-cart-button');

const shoppingcart = document.querySelector('.shopping-cart');
document.querySelector('#shopping-cart-button').onclick = (e) => {
    shoppingcart.classList.toggle('activee');
    e.preventDefault()
}

if (!sc.contains(e.target) && !shoppingcart.contains(e.target)){
    shoppingcart.classList.remove('activee')
}
