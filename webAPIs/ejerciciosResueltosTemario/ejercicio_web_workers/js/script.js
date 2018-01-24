// Declarar variable para guardar el objeto Worker
var w;
// Función para inicar el Web Worker
function iniciarWorker() {
    // Si el browser soporta usar Web Workers
	if(Worker) {

	// Crear el Worker
    w = new Worker("js/script_worker.js");
    w.addEventListener("message",function(event) {
         document.getElementById("resultado").innerHTML = event.data;
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
