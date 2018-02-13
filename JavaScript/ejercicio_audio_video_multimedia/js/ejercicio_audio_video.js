var video = document.getElementById("myVideo");
var audio = document.getElementById("myAudio"); 
var change_video = document.getElementById("change_video"); 
var change_time = document.getElementById("change_time"); 
//Función para ejecutar audio
function playAudio() { 
    audio.play(); 
	document.getElementById("ultimo_cambio_audio").innerHTML = "¿Se ha pulsado play?: "+(!audio.paused);
} 
//Función para pausar vídeo
function pauseAudio() { 
    audio.pause();
	document.getElementById("ultimo_cambio_audio").innerHTML = "¿Se ha pausado el vídeo?: "+audio.paused;	
} 
//Función para ejecutar vídeo
function playVideo() { 
    video.play(); 
	document.getElementById("ultimo_cambio").innerHTML = "¿Se ha pulsado play?: "+(!video.paused);
} 

//Función para pausar vídeo
function pauseVideo() { 
    video.pause(); 
	document.getElementById("ultimo_cambio").innerHTML = "¿Se ha pausado el vídeo?: "+video.paused;
} 

//Función para activar los controles de vídeo
function enableControls() { 
    video.controls = true;
    video.load();
	document.getElementById("ultimo_cambio").innerHTML = "¿Se han habilitado los controles?: "+video.controls;
} 
//Función para desactivar los controles de vídeo
function disableControls() { 
    video.controls = false;
    video.load();
	document.getElementById("ultimo_cambio").innerHTML = "¿Se han deshabilitado los controles?: "+video.controls;
} 
//Función para comprobar el estado de los controles de video
function checkControls() { 
    //alert("¿Están puestos los controles?: "+video.controls);
	document.getElementById("ultimo_cambio").innerHTML = "¿Están puestos los controles?: "+video.controls;
} 

// Cambiar video
change_video.onclick = function(){
    if(video.getAttribute("src") == "media/mov_bbb.mp4"){

        video.setAttribute("src", "media/small.mp4");
    }else{
        video.setAttribute("src", "media/mov_bbb.mp4");
    }
    video.load();
}

// Modificar duracion de video
change_time.onclick = function(){
video.currentTime+=2;
}




/** Manejo de eventos **/

//La función se ejecuta cuando ocurre el evento "play". Se ha pulsado "play"
video.onplay = function() {
    //alert("¿Han pulsado play?: "+(!vid.paused));
	document.getElementById("ultimo_cambio").innerHTML = "CAMBIO: ¿Han pulsado play?: "+(!video.paused);
};
//La función se ejecuta cuando ocurre el evento "pause". Se ha pulsado "pause"
video.onpause = function() {
    //alert("¿Han pulsado pause?: "+vid.paused);
	document.getElementById("ultimo_cambio").innerHTML = "CAMBIO: ¿Han pulsado pause?: "+video.paused;
};
//La función se ejecuta cuando ocurre el evento "volumechange". Se ha cambiado de volumen
video.onvolumechange = function() {
    //alert("Se ha cambiado el volúmen");
	document.getElementById("ultimo_cambio").innerHTML = "CAMBIO: Se ha cambiado el volúmen";
};



