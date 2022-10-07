// depois de rever a resolução, melhorias:

const buttonOpenModal = document.querySelector('#openModal')
buttonOpenModal.addEventListener('click', remove)

const modalWrapper = document.querySelector('.modal-wrapper')

function remove() {
    modalWrapper.classList.remove('invisible')
}

/* resulução foi a seguinte: 

const buttonOpenModal = document.getElementById('openModal')
const modalWrapper = document.querySelector('.modal-wrapper')

buttonOpenModal.onclick = function() {
    modalWrapper
    .classList
    .remove('invisible')
}

*/

document.addEventListener("keydown", function(event) {
    const isEscKey = event.key === 'Escape'

    if(isEscKey) { 
        modalWrapper.classList.add('invisible') 
    } else {
        console.log("tente de novo!")
    }

})


/*

buttonOpenModal.addEventListener("keydown", adicionar)

function adicionar() {
 modalWrapper.classList.add('invisible') 

}

*/