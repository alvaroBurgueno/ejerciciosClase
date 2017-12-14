
var opcion;
function color() {

	var color1 = document.getElementById("rojo");
	var color2 = document.getElementById("ambar");
	var color3 = document.getElementById("verde");
	
	switch (opcion) {
		case 0:
		color1.style.backgroundColor = "purple";
		color2.style.backgroundColor = "#FFFD71";
		color3.style.backgroundColor = "#B9FF8C";
		break;

		case 1:
		color1.style.backgroundColor = "#FE6E6E";
		color2.style.backgroundColor = "purple";
		color3.style.backgroundColor = "#B9FF8C";
		break;

		case 2:
		color1.style.backgroundColor = "#FE6E6E";
		color2.style.backgroundColor = "#FFFD71";
		color3.style.backgroundColor = "purple";
		break;
	}



/*	if(opcion=0){
		opcion=
		
	}
	if(opcion=1){
		
	}
	if(opcion=2){
		
	}*/

}