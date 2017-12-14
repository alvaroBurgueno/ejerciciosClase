
/*dificultad 1: variable global y 2 imgs*/
var cambia = true;
function toggle(){

	var myTarget = document.getElementById("myButton");
	var photoA = document.getElementById("photo1");
	
	if (cambia){
		//...enciende el INTERRUPTOR
		cambia = false;
		photoA.innerHTML = "<img src='img/em3.png'>";
		myTarget.style.backgroundColor = "darkgreen";
		myTarget.innerHTML = "Explotaaaaa";

	}
	// si no...
	 else{
	 	cambia = true;
		photoA.innerHTML = "<img src='img/em2.png'>";
		myTarget.style.backgroundColor = "darkred";
		myTarget.innerHTML = "";
	}
}

/*dificultad 2: variable global y una img*/

function toggleDos(){
		if (cambia){
		//...enciende el INTERRUPTOR
		cambia = false;
		photoA.innerHTML = "<img src='img/em3.png'>";
		myTarget.style.backgroundColor = "darkgreen";


		}
		// si no...
		 else{
		 	cambia = true;
			photoA.innerHTML = "<img src='img/em2.png'>";
			myTarget.style.backgroundColor = "darkred";
		}
}