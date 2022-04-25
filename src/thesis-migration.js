let ol = document.querySelector('ol')
let newOl = document.createElement('ol')

function createDivtWithClassName(name) {
    let el = document.createElement('div')
    el.classList.add(name)
    return el
}

let arr = Array.from(ol.children).map(el => {
    if (el.tagName.toLowerCase() === 'li') {
        let div = el.firstChild.nextSibling
        let span = div.childNodes[0]

        let newLi = document.createElement('li')
        let newTitle = createDivtWithClassName('title')
        let arrowDown = document.createElement('span')
        let newSubtitle = createDivtWithClassName('subtitle')
        let newTitleLink = document.createElement('a')
        let newContent = createDivtWithClassName('content')

        arrowDown.innerText = '>'

        newTitleLink.innerText = span.childNodes[1].childNodes[0].innerText
        newTitleLink.href = span.childNodes[1].childNodes[0].href
        newTitle.appendChild(newTitleLink)
        newTitle.appendChild(arrowDown)

        newSubtitle.innerText = span.childNodes[3].innerText.replace(/(\d{4})/, '- $1 - ')
        newContent.innerText = span.childNodes[7].innerText
        newContent.innerText += div.childNodes[1].textContent

        newLi.appendChild(newTitle)
        newLi.appendChild(newSubtitle)
        newLi.appendChild(newContent)
        return newLi
    }
})

console.log(arr.map(el => el && el.outerHTML).join(' '))