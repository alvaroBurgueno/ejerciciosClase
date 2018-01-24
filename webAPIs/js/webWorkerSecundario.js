/*
		JS Secundario
			Generar los 3 caracteres y,z,w
			Enviar dichos caracteres al JS
			 principal utilizando el método
			  postmessage (mensaje)
*/
function generarNumeros() {
	var numeros = [2, 3, 6];
	postmessage(numeros);
}