/*
EJEMPLO JSON.
METER Y SACAR SON MÉTODOS.


*/

var papelera = {
	color: "#fff";
	basura: []; // Se crea 
	meter: function(cosa){ // Recibir y Guardar
		this.basura.push(cosa);
	},
	sacar: function(){ // Devolver el Último
		return this.basura.pop();
	}
	sacarElDeLaPosicion: function (x){
		if(basura[x] !== undefined){ // !==
			return basura[x];
		} else {
			return false; 
			// Para poner la salida en otro sitio distinto que el del proceso
			// Tendríamos que crear otra función jugando con el valor del return.
		}
	}
};

/*diferencia entre doble igual y triple igual*/


if(3==3) // true
if("3"=="3") // true
if(3=="3") // true en JavaScript
/*Con el triple igual tendría que ser igual además el tipo de dato	*/
if(3==="3") // false
if(3!=="3") // true








