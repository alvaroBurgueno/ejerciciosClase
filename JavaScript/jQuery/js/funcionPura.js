/*
$( SELECTOR ).JFUNCION( PARAMETROS );

PARÁMETROS:
	- Nada
	- Strings
	- Funciones anónimas, que actúan como respuesta al evento capturado (también llamadas "callbacks")
*/

// Cuando la pagina este lista (cuando el arbol este construido)
$( document ).ready( function() {

	$( "#myButton" ).click( function() {

		if( $( this ).hasClass( "enabledButton" ) == false ) // Si estoy en OFF
		//if( mySwitchJquery == false ) // Si estoy en OFF
		{
			// 1) El propio boton se cambie el color y el contenido
			/*
			$( this ).css( "background-color" , "darkgreen" );
			$( this ).css( "border" , "1px solid grey" );
			*/
			$( this ).addClass( "enabledButton" );
			$( this ).html( "ON" );

			// 2) La imagen cambia su src
			$( "#myImage" ).attr( "src", "img/gatoOscuro.png" );
		}
		else
		{
			// 1) El propio boton se cambie el color y el contenido
			/*
			$( this ).css( "background-color" , "darkred" );
			$( this ).css( "border" , "none" );
			*/
			$( this ).removeClass( "enabledButton" );
			$( this ).html( "OFF" );

			// 2) La imagen cambia su src
			$( "#myImage" ).attr( "src", "img/gatito.png" );
		}
	});


	/* ------------------ INITIALIZE ------------------ */

	var mySwitch = true;

	function toggle() {

		var myTarget = document.getElementById("myButton");

		// Si el INTERRUPTOR está apagado...
		if( mySwitch == true )
		{
			mySwitch = false; // ... encienda el INTERRUPTOR

			myTarget.style.backgroundColor = "darkgreen";
			//myTarget.style.opacity = "0.8";
			myTarget.innerHTML = "ON";
		}

		// Si no...
		else
		{
			mySwitch = true; // ... apague el INTERRUPTOR

			myTarget.style.backgroundColor = "darkred";
			myTarget.innerHTML = "OFF";
		}
	}

});