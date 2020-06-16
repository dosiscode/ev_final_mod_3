$(document).ready(function(){
    $("#btnSend").click(function () {
        if(isEmpty($("#txtNombre").val())){
            alert("Debe ingresar su nombre y apellido");
            
        }
        if(isEmpty($("#txtCorreo").val())){
            alert("Debe ingresar su correo para poder contactarlo");
        }else{
            if(!isEmail($("#txtCorreo").val())){
                alert("Debe ser un correo valido");
            }
        }
        if(isEmpty($("#txtMensaje").val())){
            alert("Debe ingresar el mensaje");
        }
    });
});

function isEmpty(texto) {
    if(texto==="" || texto===undefined){
        return true;
    }
    return false;
}
function isEmail(email) {
    var regex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    return regex.test(email);
    
}