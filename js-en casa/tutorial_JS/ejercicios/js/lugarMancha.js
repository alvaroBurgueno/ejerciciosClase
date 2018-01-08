

var cadena = "En un lugar de la Mancha";
var letras = cadena.split("");
var resultado = "";

for (i in letras) {
/*	resultado = letras[i];
*/
	if (letras == "a") {
		break;
	} else {
		resultado += letras [i];
	}
}
alert(resultado);