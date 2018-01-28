
/*
El índice de una base de datos es una estructura de datos que mejora la velocidad 
de las operaciones, por medio de identificador único de cada fila de una tabla, 
permitiendo un rápido acceso a los registros de una tabla en una base de datos.
*/


/*Diseñar un programa que devuelva en un array, el cuadrado de los 200 primeros números enteros.*/


for (var i = 1; i < 201; i++) {
	
	console.log(i*i);
}


/*Escribe la función para calcular el factorial de un número entero (4).*/

function factorial (num){
	
	if (num < 0) {
		return -1;
	} else if (num == 0) {
		return 1;
	}

	var mult = num;

	while (num-- > 2) {
		mult *= num;
	}
	return mult;

}

var resultado = factorial(1);
console.log(resultado;
/*
----------------------RECURSIVO -----------------------------
function factorial(num)
{
    // If the number is less than 0, reject it.
    if (num < 0) {
        return -1;
    }
    // If the number is 0, its factorial is 1.
    else if (num == 0) {
        return 1;
    }
    // Otherwise, call this recursive procedure again.
    else {
        return (num * factorial(num - 1));
    }
}
*/

