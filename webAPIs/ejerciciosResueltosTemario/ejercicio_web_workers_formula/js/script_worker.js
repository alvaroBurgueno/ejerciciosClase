var aleatorios = 0;

// Genera numero aleatorio cada segundo
function generaAleatorios() {
	aleatorios = [Math.random(), Math.random(), Math.random()]; 
    postMessage(aleatorios);
    setTimeout("generaAleatorios()",1000);
}
// Llamada a la función
generaAleatorios();