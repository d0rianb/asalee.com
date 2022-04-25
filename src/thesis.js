let arrows = Array.from(document.querySelectorAll('.arrow-container'))

arrows.forEach(el => {
    ['click', 'touchstart'].forEach(event => {
        el.addEventListener(event, e => {
            el
                .parentElement
                .parentElement
                .classList
                .toggle('open')
        })
    })
})