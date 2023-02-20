const modal = document.querySelector('.modal')
const openmodal = document.querySelector('.open-button')
const closemodal = document.querySelector('.close-button')


openmodal.addEventListener('click',()=>{
    modal.showModal();
})
closemodal.addEventListener('click',()=>{
    modal.close();
})