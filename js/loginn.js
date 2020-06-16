
$(document).ready(function(){
  const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})


function openModal(modal) {
var nombreTxt = document.getElementById("nombre").value;
var apellidoTxt = document.getElementById("apellido").value;
var mailTxt = document.getElementById("mail").value;
var passTxt = document.getElementById("pass").value;
var conTxt = document.getElementById("con").value;

 if (nombreTxt.length == 0 || apellidoTxt.length == 0 || mailTxt.length == 0 || passTxt.length == 0  ||conTxt.length == 0 )
    {
     alert('Hay uno o más campos vacios.');
     return false;
}

  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
    
}
    function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')

 }

 //validacion ingreso
 const openModalButtons2 = document.querySelectorAll('[data-modal-target2]')
const closeModalButtons2 = document.querySelectorAll('[data-close-button2]')

openModalButtons2.forEach(button => {
  button.addEventListener('click', () => {
    const modal2 = document.querySelector(button.dataset.modalTarget)
    openModal2(modal2)
  })
})

function openModal2(modal2) {
var userTxt = document.getElementById("user").value;
var contraseniaTxt = document.getElementById("contrasenia").value;

 if (contraseniaTxt.length == 0 || userTxt.length == 0 )
    {
     alert('Debes autenticarte para poder ingresar.');
     return false;
}

  if (modal2 == null) return
  modal2.classList.add('active')
  overlay2.classList.add('active')
    
}
});

