
//Elemento (parrafo) en el que almacenaremos las coordenadas 
var coordenadas = document.getElementById("coordenadas");


// Función para obtener localización
	function obtenerLocalizacion() {
		// Comprobar que el objeto geolocalización está disponible
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(mostrarPosicion);
		} else { 
			coordenadas.innerHTML = "Tu navegador no soporta geolocalizacion.";
		}
	}

function mostrarPosicion(position) {
    coordenadas.innerHTML = "Latitud: " + position.coords.latitude + 
    "º<br>Longitud: " + position.coords.longitude+"º<br>Precisión: " + position.coords.accuracy;
}

// Añadir listener para el evento "click"
document.getElementById("boton").addEventListener("click", obtenerLocalizacion);