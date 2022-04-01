// Side menu
const menu = document.querySelector('header .menu')
const openButton = document.querySelector('header .hamburger-icon')
const closeButton = document.querySelector('header .close-icon')
let menuState = menu.classList.contains('open') ? 'open' : 'close' // open | close

let closeMenu = () => {
    menu.classList.remove('open');
    menu.classList.add('close')
}

let openMenu = () => {
    menu.classList.remove('close');
    menu.classList.add('open')
}

['click', 'touchstart'].forEach(event => openButton.addEventListener(event, e => openMenu()));
['click', 'touchstart'].forEach(event => closeButton.addEventListener(event, e => closeMenu()))