document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
      //la lista de plagins que le podemoa añadir
      plugins: [ 'dayGrid', 'interaction' ],
      defaultView: 'dayGridMonth',
      //idioma del calendario, tiene muchos para elegir
      locale: 'es',
      //boton personalizado que agregare al header
      customButtons: {
        addNote: {
          text: 'Agregar nota',
          //aqui va la accion del click
          click: function() {
            //window.open("nota.html","ventana1","scrollbars=NO")
            document.getElementById("iframe").click();
            
            
          }
        }
      },
      //botones y texto va a tener la cabecera del calendario
      header: {
          left: 'prev,next today',
          center: 'title',
          right:  'addNote'
      },
      //events agrega etiquetas a los dias
      events: [

          { 
            //tutolo de la etiqueta
            title: 'Prueba POO!!',
            //de que dia es la etiqueta, puede tener un end, y asi alargarla los dias que queramos
            start: '2020-06-01', 
            //color de fondo, tambien con color le cambiamos el color de letra
            backgroundColor: '#667EAF',
            //poner la url del archivo que muestre la nota completa
            url: 'nota.html'

          }
      ],

      eventClick: function(event) {
        condole.log(event.url);
        if (event.url) {
          $.fancybox({
            "type": "iframe",
            "href": "event.url"
          })
          return false;
          
        }
      }
      
    });

    calendar.render();
  });



