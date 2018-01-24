var num_aleatorio = 0;

// Genera numero aleatorio cada segundo
function generaAleatorio() {
    aleatorio = Math.random();
    postMessage(aleatorio);
    setTimeout("generaAleatorio()",1000);
}
// Llamada a la función
generaAleatorio();