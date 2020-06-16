//dialog boton eliminar
$( function() {

    $( "#dialog-confirm" ).dialog({
        autoOpen: false,
        resizable: false,
        show: {
            effect: "bounce",
            duration: 1000
        },
        height: "auto",
        width: 400,
        modal: true,
        buttons: {
        "Eliminar": function() {
            $( this ).dialog( "close" );
         }
      }
    });

    $( "#dialog-message" ).dialog({
        autoOpen: false,
        resizable: false,
        show: {
            effect: "bounce",
            duration: 1000
        },
        modal: true,
        buttons: {
          Ok: function() {
            $( this ).dialog( "close" );
          }
        }
      });
    //desactiva disable para poder editar
    $("#editar").on("click", function () {
        $("#txtTitulo").prop("disabled", false);
        $("#txtFecha").prop("disabled", false);
        $("#txtNota").prop("disabled", false);
        $("#btnAddNote").prop("disabled", false);
    });

    //boton addNote activa el disable nuevamente
    $("#btnAddNote").on("click", function () {
        $("#txtTitulo").prop("disabled", true);
        $("#txtFecha").prop("disabled", true);
        $("#txtNota").prop("disabled", true);
        $("#btnAddNote").prop("disabled", true);
    });
    //activa dialog ¿esta seguro de eliminar?
    $( "#eliminar" ).on( "click", function() {
        $( "#dialog-confirm" ).dialog( "open" );
      });
    //activa dialog "Tarea finalizada con exito"
      $( "#listo" ).on( "click", function() {
        $( "#dialog-message" ).dialog( "open" );
      });
      
  } );

  