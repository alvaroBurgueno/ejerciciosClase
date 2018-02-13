		window.onload = iniciar;

		function iniciar(){
			document.getElementById("enviar").addEventListener('click', validar, false);
		}

		function validaNombre(){
			var elemento = document.getElementById("name");
			if (!elemento.checkValidity()) {
				if (elemento.validity.valueMissing) {
					error2(elemento, "Debes introducir un nombre.");
				} 
				if (elemento.validity.patternMismatch) {
					console.log("pasa");
					error2(elemento, "Nombre debe tener entre 2 y 15 caracteres.");
					
				}
				//error(elemento);
				return false;
			}
			borrarError();
			return true;
		}

		function validaEdad(){
			var elemento = document.getElementById("age");
			if (!elemento.checkValidity()) {
				if (elemento.validity.valueMissing) {
					error2(elemento, "Debes introducir una edad.");
				}
				if (elemento.validity.patternMisMatch) {
					error2(elemento, "Nombre debe tener entre 2 y 15 caracteres.");
				}
				if (elemento.validity.rangeOverflow) {
					error2(elemento, "No puedes tener más de 100 años.");
				}
				if (elemento.validity.rangeUnderflow) {
					error2(elemento, "Tienes que ser mayor de 18 años.");
				}
				//error(elemento);
				return false;
			}
			borrarError();
			return true;
		}


		function validaTelefono(){
			var elemento = document.getElementById("phone");
			if (!elemento.checkValidity()) {
				//error(elemento);
				if (elemento.validity.valueMissing) {
					error2(elemento, "Debes introducir un teléfono.");
				}
				if (elemento.validity.patternMismatch) {
					error2(elemento, "El teléfono debe de tener 9 cifras.");
				}
				return false;
			}
			borrarError();
			return true;
		}

		function validar(e){
			if (validaNombre() && validaEdad() && validaTelefono() && confirm("¿Enviar formulario?")) {
				borrarError();
				return true;
			} else {
				e.preventDefault();
				return false;
			}
		}

		function error(elemento){
			document.getElementById("mensajeError").innerHTML = elemento.validationMessage;
			elemento.className = "error";
			elemento.focus();
		}

		function error2(elemento, mensaje){
			document.getElementById("mensajeError").innerHTML = mensaje;
			elemento.className = "error";
			elemento.focus();
		}

		function borrarError(){
			var formulario = document.forms[0];
			for (var i = 0; i < formulario.length; i++) {
				formulario.elements[i].className = "";
			}
		}