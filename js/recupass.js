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
var mailTxt = document.getElementById("mail").value;

 if (mailTxt.length == 0 )
    {
     alert('Para restablecer tu contraseña, debes ingresar tu mail.');
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
 (function() {
    var updateButton = document.getElementById('restablecerPass');
    var OKButton = document.getElementById('OK');

    updateButton.addEventListener('click', function() {
      favDialog.showModal();
    });

    OKButton.addEventListener('click', function() {
      favDialog.close();
    });


  })();

});

