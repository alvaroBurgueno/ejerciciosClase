
$(document).ready(function(){
	//cuando el usuario haga click en el botón...
	$("#myButton").click(function(){
		
		//... pedir por AJAX a la URL xxx el número

		/*$.ajax().done();*/
		$.ajax({
			method: "GET",
			url: "http://192.168.201.102/loteria/"
		})
		//... y recogerlo
		.done(function(response){ 
			// Traducir  el JSON Stringficado
			var respuesta = JSON.parse(response);
		});

		// Pintar por Pantalla el nombre y el número
		$("#premio").html("Enhorabuena "+respuesta.nombre+
			", has ganado con el número "+respuesta.numero+
		 	".");

	});
});
	


	

		

/*		$.ajax({
			method:"POST",
			url: "some.php",
			data: {	name: "John", 
					location: "Boston"}
		});*/




/*var loteria = {
	nombre: "",
	numero: "",
	
};


function dameLoteria () {
	$.get("192.168.201.102/loteria.php", function (numero)){
		$("#campo").html(numero);
		setTimeout( 'dameLoteria()', 2000 );
	}
}
*/