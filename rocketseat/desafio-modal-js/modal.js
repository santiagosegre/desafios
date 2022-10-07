const element = document.querySelector('#openModal')
element.addEventListener('click', remove)

const esc = document.querySelector('.modal-wrapper')

function remove() {
    esc.classList.remove('invisible')
    console.log(esc)
}

element.addEventListener("keypress", adicionar)

function adicionar() {
    esc.classList.add('invisible')
    console.log(esc)
}