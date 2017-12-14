

/*----------------INITIALIZE-------------*/

var mySwitch = 0;


function toggle(){

	var myTarget = document.getElementById("myButton"); // solo va a existir dentro de la función.
	var myPhoto = document.getElementById("")
	// si el INTERRUPTOR está apagado...
	if (mySwitch == 0){
		//...enciende el INTERRUPTOR
		mySwitch = 1;
		myTarget.style.backgroundColor = "darkgreen";
		/*myTarget.style.opacity ="0.8"*/
		myTarget.innerHTML = "ON";

	}
	// si no...
	 else{
	 	mySwitch = 0;	// apaga el INTERRUPTOR
	 	myTarget.style.backgroundColor = "darkred";
	 	myTarget.innerHTML = "OFF";	
	}
	
	
		
}