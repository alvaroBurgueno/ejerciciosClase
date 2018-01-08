
var elementosP = document.getElementsByTagName("p");

// entrando en la consola dice que es una colección HTML.
// En un array aparecen todos los p que hay en la web.
// Por tanto habría que acceder al p en cuestión seleccionándolo por 
// su posición en dicho array.

elementosP[0].innerHTML = "Ouhh Yeah"; 	

var elemento2 = document.getElementById("segundo");
elemento2.innerHTML = "Fucking Shit";

// 1) Crear el elemento
var elemento = document.createElement("h2");
// 2) Crear un nodo de texto
var contenido = document.createTextNode("Este es nuestro titular.");
// 3) Áñadir el nodo de texto al elemento
elemento.appendChild(contenido);
// 4) Agregar atributos al elemento
elemento.setAttribute("align", "center");
// 5) Agregar el elemento al documento
document.body.appendChild(elemento);

/*-------------------MODIFICAR ESTILOS CON JS---------------------------*/

var estiloParrafo = document.getElementById("parrafada");

estiloParrafo.className = "negrita"; // añade una clase al elemento seleccionado
estiloParrafo.style.background = "#B8D0E0"; // añade una propiedad.