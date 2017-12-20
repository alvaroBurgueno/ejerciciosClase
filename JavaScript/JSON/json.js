var persona {
	nombre: "David",
	apellidos: "Pérez Pérez",
	edad: 35,
	habilidades: ["HTML", "CSS", "JS"],
	formacion: {
		carrera: "Informática",
		master: "del universo"
	},
	hablar: function (){
		console.log("hola ke ase");
	}
};

persona.hablar();

var person = "{ "Nombre1": "David" , "Nombre2": "Aragorn" }";
var personEnJSON = JSON.
// es indiferente poner comillas o no a nombre o nombre2, pero es preferible ponerlas porque hay casos
// en los que es el propio servidor el que nos da un String, y se evitan problemas de caracteres.


console.log(persona.habilidades[1]); // muestra CSS
console.log(persona.formacion.master); // muestra del universo