var formulario = document.getElementById("miFormulario");
		window.onload = iniciar;

		function iniciar() {
			document.getElementById("enviar").addEventListener('click', validar, false);
		}

		function validaNombre() {
			var elemento = document.getElementById("name");
			if (elemento.value == "") {
				alert("El campo Nombre no puede estar vacío.");
				error(elemento);
				return false;
			}
			limpiarError(elemento);
			return true;
		}

		function validaTelefono() {
			var elemento = document.getElementById("telephone");
			if (elemento.value == "") {
				alert("El campo Teléfono no puede estar vacío.");
				error(elemento);
				return false;
			}
			if (isNaN(elemento.value)) {
				alert("El campo teléfono tiene que ser de tipo numérico.");
				error(elemento);
				return false;
			}
			limpiarError(elemento);
			return true;
		}

/*		function validaCheck() {
			var campoCheck = document.getElementById("edad");

			if (!campoCheck.checked) {
				alert("Debes de ser mayor de edad para poder entrar.");
				return false;
			}
			return true;
		}*/

		function validar(e) {
			if (validaNombre() == true && validaTelefono() == true && confirm("Pulse aceptar si está seguro de enviar el Formulario.")) {
				return true;
			} else {
				e.preventDefault();
				return false;
			}
		}

		function error(elemento) {
			elemento.className = "error";
			elemento.focus();
		}

		function limpiarError(elemento) {
			elemento.className = "";
		}

		