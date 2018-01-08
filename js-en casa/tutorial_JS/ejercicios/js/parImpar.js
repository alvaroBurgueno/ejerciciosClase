/*
Escribir el código de una función a la que se pasa como parámetro un número entero y
 devuelve como resultado una cadena de texto que indica si el número es par o impar. 
Mostrar por pantalla el resultado devuelto por la función.
*/



function parImpar(num) {
	
	if (num%2==0) {
		console.log("El número es Par");
	} else {
		console.log("El número es Impar");

	}
}

parImpar(13);