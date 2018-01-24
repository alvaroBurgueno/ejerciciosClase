// Drag
  document.addEventListener('dragstart',function(event){

  // Establecer tipo de dato y valor del dato a ser transferido
	event.dataTransfer.setData("text", event.target.id);
  });
  
//Drop 
  document.addEventListener('drop', function(event) {
    event.preventDefault();

    var id_imagen = event.dataTransfer.getData("text");
	// Añadir nodo hijo(que será la imágen) al div sobre el que soltamos el elemento arrastrado
    event.target.appendChild(document.getElementById(id_imagen));
  });
  
//Habilitar drop

  document.getElementById("div1").addEventListener('dragover',function(event) {
	// Habilita que se pueda realizar un drop en el elemento en el que ocurre el evento
    event.preventDefault();
  });

  document.getElementById("div2").addEventListener('dragover',function(event) {
    event.preventDefault();
  });

