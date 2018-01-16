/*
dragstart: Este evento es disparado en el momento en el que
el arrastre comienza. Los datos asociados con el elemento
origen son definidos en este momento en el sistema.
El objeto dataTransfer contiene la información sobre el objeto
arrastrado.
se establece en el evento dragstart y se lee/procesa en el evento drop.
e.dataTransfer.setData(format, data)

El evento drag es similar al evento mousemove, excepto que
será disparado durante una operación de arrastre por el
elemento origen.
dragend se dispara cuando la operación de arrastrar y soltar
termina (con éxito o no)

dragover Este evento es similar al evento mousemove, excepto
que es disparado durante una operación de arrastre por
posibles elementos destino.
drop Cuando el elemento origen es soltado durante una
operación de arrastrar y soltar, este evento es disparado por el
elemento destino.

*/

// DRAG
document.addEventListener('dragstart', function(event){
	alert(event.target.id);
	event.dataTransfer.setData("text", event.target.id);
});

// DROP
document.addEventListener('drop', function(event){
	alert(event.target.id);
	event.preventDefault();
	var img = event.dataTransfer.getData("text");
	event.target.appendChild(document.getElementById(img));
});

// ALLOW DROP

document.getElementById("div1.addEventListener('dragover"
	event.preventDefault());

document.getElementById("div1").addEventListener('dragover'
	event.preventDefault();
});

document.getElementById("div2").addEventListener('dragover'
	event.preventDefault();
});