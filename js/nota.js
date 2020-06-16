$(document).ready(function(){
    $("#btnAddNote").click(function () {
        if(isEmpty($("#txtTitulo").val())){
            //alert("Debe ingresar un titulo");
            $("<div>Debe ingresar un titulo</div>").dialog();
            $("#txtTitulo").focus();
        }else{
            if(isEmpty($("#txtFecha").val())){
                alert("Debe ingresar la fecha donde se guardara la nota");
                $("#txtFecha").focus();
            }else{
                if(isEmpty($("#txtNota").val())){
                    alert("Debe ingresar el contenido de la nota");
                    $("#txtNota").focus();
                }else{                    

                }
            }
            
        }
        
    });
});

function isEmpty(texto) {
    if(texto==="" || texto===undefined){
        return true;
    }
    return false;
}
