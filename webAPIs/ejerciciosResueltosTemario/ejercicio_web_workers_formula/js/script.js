// Declarar variable para guardar el objeto Worker
var w;
// Función para inicar el Web Worker
function iniciarWorker() {
    // Si el browser soporta usar Web Workers
	if(Worker) {

	// Crear el Worker
    w = new Worker("js/script_worker.js");
    w.addEventListener("message",function(event) {
		
		var y = event.data[0];
		var z = event.data[1];
		var w = event.data[2];
		var x = (y+z)*w;
         document.getElementById("resultado").innerHTML ="Resultado de formula x =(y+z)*w: "+x;
    });
    } else {
        document.getElementById("resultado").innerHTML = "Tu navegador no soporta Web Workers...";
    }
}
// Función para parar el worker
function pararWorker() { 
    w.terminate();
    w = undefined;
}

// Listeners para los botones
document.getElementById("iniciar_worker").addEventListener("click", iniciarWorker);
document.getElementById("parar_worker").addEventListener("click", pararWorker);
