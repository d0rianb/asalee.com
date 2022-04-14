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

// Sticky header
const header = document.querySelector('header')
let lastScrollTop = 0

document.addEventListener('scroll', () => {
    let st = window.pageYOffset || document.documentElement.scrollTop
    if (st > lastScrollTop) {
        header.classList.add('hide')
    } else {
        header.classList.remove('hide')
    }
    lastScrollTop = st <= 0 ? 0 : st;
})

function deferIframeLoad() {
    const iframes = document.getElementsByTagName('iframe')
    Array.from(iframes).forEach(iframe => {
        const dataSrc = iframe.getAttribute('data-src')
        if (dataSrc) {
            iframe.setAttribute('src', dataSrc)
        } else {
            console.error('Unable to load iframe url')
        }
    })
}

window.onload = () => {
    deferIframeLoad()
}