
/*-------   EJERCICIO 1 ---------------*/

var video = document.getElementById("myVideo");

function playVideo (){
	video.play();
}

function pauseVideo (){
	video.pause();
}

/*function myFunction() { 
    alert("Start: " + vid.played.start(0) + " End: "  + vid.played.end(0));
} */

function change() {

	if (video.controls== true) {
		video.controls = false;
	} else {
		video.controls = true;
	}
	
}

video.onplaying = function(){
	document.getElementById("ultimoCambio").innerHTML = "Cambio: ¿play?"+(video.controls);
}

/*if (video.controls == true) {
	document.getElementById("ultimoCambio").innerHTML += "Play: "+(video.controls);
} else {
	document.getElementById("ultimoCambio").innerHTML += "Pause: "+(video.controls);
}*/



/*function checkPlay
video.onplaying() = function(){
	alert("El vídeo se está reproduciendo");
}
video.onpause() = function(){
	alert("El vídeo  NO se está reproduciendo");
}*/