
//comprobar con consola navegador.
function numeroMayor (numero1, numero2){
	if (numero1 > numero2) {
		return numero1
	} else {
		return numero2;
	}
}
document.write("El número mayor es el "+numeroMayor(1,2));


// Al provenir los datos de un formulario son String.
var suma = function (num1, num2) {
	// con parsefloat se parsea de String a float para poder 
	// operar con ellos
	var num1 = parseFloat(document.getElementById("num1").value);
	var num2 = parseFloat(document.getElementById("num2").value);
	var res = num1+num2;
	return res;
}	
