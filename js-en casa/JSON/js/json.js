

var persona = {nombre : "alvaro", apellido : "burgueno", nickname : "alvarito" };
console.log("Hola "+persona.nombre);

var personas = [
	{nombre: "pepe", apellido: "perez", edad: 19},
	{nombre: "maria", apellido: "suarez", edad: 19},
	{nombre: "eva", apellido: "garcia", edad: 19},
	{nombre: "esther", apellido: "martin", edad: 19}
];


var salida = "";

for (var i = 0; i < personas.length; i++) {
	salida = "<li>"+personas[i].nombre +"</li>";
	//console.log(personas[i].nombre);
	document.write(salida);
}

