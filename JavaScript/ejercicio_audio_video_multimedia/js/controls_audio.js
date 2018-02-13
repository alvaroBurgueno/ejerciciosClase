// Gestionando eventos y llamadas a funciones cuando se pulsa un botón desde el JavaScript
var audio = document.getElementById("myAudio"); 
var play_audio = document.getElementById("play_audio"); 
var pause_audio = document.getElementById("pause_audio"); 


//object.onclick = function(){myScript};
play_audio.onclick = function(){
	audio.play();
}
// object.addEventListener("click", myScript);
pause_audio.addEventListener('click', function(){ 
	audio.pause();
});


