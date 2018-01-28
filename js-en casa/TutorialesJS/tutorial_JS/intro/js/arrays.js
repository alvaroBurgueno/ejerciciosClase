

var amigos = ["Marta", "Lucía"];
//document.write(amigos[0]);

// modificar una posición
amigos[0] = "Sofía";
//document.write(amigos[0]);

// mostrar total elementos que hay en el array.
//document.write(amigos.length); 
//Sin PUSH
amigos[amigos.length]="Javier";
//agregar nuevo elemento a la siguiente posición libre.
//amigos.push("Miguel");
// se pueden agregar tantos como se quieran
amigos.push("Miguel", "Roberto");
/*amigos.push("Roberto");*/
//document.write(amigos);

/*document.write(amigos);
amigos.pop();
document.write(amigos);*/

/*document.write(amigos.length);*/
amigos.pop(); // elimina la última posición del array.
document.write(amigos.length);
for (var i = 0; i < amigos.length; i++) {
	document.write(amigos[i]);
}
var amigos2=["Saturnino", "Carolina", "Rosa"];

var amigos3 = amigos.concat(amigos2);
document.write(amigos3);
// Ordenados Alfabéticamente y además separados con un palo.
document.write(amigos3.sort().join(" | "));


/*-------DÍAS DE LA SEMANA----RECORRIENDO EL FOR.*/
var dias =["Lunes", "Martes", "Miércoles","Jueves","Viernes","Sábado","Domingo"];

// mostrar los elementos del array recorriendo un for.
for (var i = 0; i < dias.length; i++) {
	document.write(dias[i]+"<br>");
}