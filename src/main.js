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

document.addEventListener('scroll', e => {
    let st = window.pageYOffset || document.documentElement.scrollTop
    if (st > lastScrollTop) {
        header.classList.add('hide')
    } else {
        header.classList.remove('hide')
    }
    lastScrollTop = st <= 0 ? 0 : st;
})

// Header scrollTo
let buttons = document.querySelectorAll('header .menu-item')

Array.from(buttons).forEach(button => {
    let targetName = button.dataset.scroll
    let target = document.querySelector(`#${targetName}`) || header; // by default scroll to header
    ['click', 'touchstart'].forEach(event => {
        button.addEventListener(event, e => {
            e.preventDefault()
            if (window.location.pathname !== '/') {
                window.location.href = `./#${targetName}`
                return
            }
            closeMenu()
            scrollToY(target.offsetTop, () => target.offsetTop ? header.classList.add('hide') : null) // To show the header
        })
    })
})

function scrollToY(offset, callback) {
    const onScroll = () => {
        if (Math.round(window.pageYOffset) === Math.round(offset)) {
            window.removeEventListener('scroll', onScroll)
            callback()
        }
    }

    window.addEventListener('scroll', onScroll)
    onScroll()
    window.scrollTo({
        top: offset,
        behavior: 'smooth'
    })
}

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