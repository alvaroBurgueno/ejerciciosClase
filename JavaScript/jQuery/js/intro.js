
/*
$ (selector).jfuncion(parámetros);

Parámtros:
	- Nada
	- Strings.
	- Funciones anónimas, que actúan como respuesta a al evento capturado
		(también llamadas cabllbacks)



*/

/*		Cuando la página esté lista....(cuando el árbol DOM esté construido)		*/

$( document ).ready( function() {

	var mySwitchJquery = false;// para hacer la función pura habría que omitir este paso.

	$ ( "#myButton" ).click( function () {

		if(!mySwitchJquery) {

			// 1) el propio boton se cambie color y contenido

//			$( this ).css("background-color" , "darkgrey"	);
//			$( this ).css( "border", "1px solid grey");
//			ASÍ SE LLAMA A UNA CLASE DE CSS.
			$( this ).addClass("enabledButton")
//			/*html reemplaza el contenido de lo que hay dentro de las etiquetas*/
//			$ ( this ).html("ON"); 


			$( this ).css("background-color" , "darkgrey"	).css("border", "5px solid grey").html("ON");
//			2) La imagen cambia su src
			$( "#myImage").attr("src", "img/gatito.png");

			mySwitchJquery = true;

		} else{
//			$( this ).css("background-color" , "darkgrey"	);
//			$( this ).css( "border", "1px solid grey");
//					/*html reemplaza el contenido de lo que hay dentro de las etiquetas*/
//			$ ( this ).html("ON"); 
			$( "#myImage").attr("src", "img/gatoOscuro.png");
			mySwitchJquery = false;
		}
		
	});



});




