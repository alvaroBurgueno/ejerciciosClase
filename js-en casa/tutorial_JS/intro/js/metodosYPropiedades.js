
var texto = "Álvaro Burgueño";
var nuevoTexto = texto.substring(0,3);
var nuevoTexto2 = texto.indexOf("v");
//reemplaza una palabra por otra.
var nuevoTexto3 = texto.replace("Burgueño", "Guijarro");
var nuevoTexto4 = texto.toLowerCase();
var nuevoTexto5 = nuevoTexto3.toUpperCase();


document.write(nuevoTexto+"<br>");
document.write(nuevoTexto2+"<br>");
document.write(nuevoTexto3+"<br>");
document.write(nuevoTexto4+"<br>");
document.write(nuevoTexto5+"<br>");
