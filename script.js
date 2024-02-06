const filterElement = document.getElementById('filter')
const cardsElements = document.querySelectorAll('.cards li')

filterElement.addEventListener('input', filterCards)

function filterCards() {
    //se o input NAO estiver vazio, filtrar o card
    if (filterElement.value != '') {
        for (let cont = 0; cont < cardsElements.length; cont++) {
            let liTitle = cardsElements[cont].querySelector('h2').innerText.toLocaleLowerCase()
            let liText = cardsElements[cont].querySelector('p').innerText.toLocaleLowerCase()

            //se o input nao incluir no heading e no texto, esconder o card
            if (!liTitle.includes(filterElement.value.toLocaleLowerCase()) && !liText.includes(filterElement.value.toLocaleLowerCase())) {
                cardsElements[cont].style.display = "none"

            //se o input incluir, mostrar o card
            } else {
                cardsElements[cont].style.display = "list-item"
            }
        }
    //se o input estiver vazio, mostrar todos
    } else {       
        for (index in cardsElements) {
            cardsElements[index].style.display = 'list-item'
        }  
    }
}

// function filterCards() {
//     if (filterElement.value != '') {
//         console.log(cardsElements)
//         for (let card of cardsElements) {
//             console.log(card)
//             let title = card.querySelector('h2').textContent.toLocaleLowerCase()
//             let text = card.querySelector('p').textContent.toLocaleLowerCase()
//             let filterText = filterElement.value.toLocaleLowerCase()

//             if (!title.includes(filterText)) {
//                 card.style.display = 'none'

//             } else {
//                 card.style.display = 'block'
//             }
//         }
//     } else {
//         for (let card of cardsElements) {
//             card.style.display = 'block'
//         }
//     }
// }
