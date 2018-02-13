function Producto (idProducto, idUsuario, nombreProducto) {
	this.idProducto = idProducto;
	this.idUsuario = idUsuario;
	this.nombreProducto = nombreProducto;

    function getProdId() {
    	return idProducto;
    }

    function setProdId(idProducto) {
    	this.idProducto = idProducto;
    }

    function getIdUsuario() {
    	return idUsuario;
    }

    function setIdUsuario(idUsuario) {
    	this.idUsuario = idUsuario;
    }

    function getNombreUsuario() {
    	return nombreProducto;
    }

    function setNombreUsuario(nombreProducto) {
    	this.nombreProducto = nombreProducto;
    }



	Producto.prototype.getUsuNombre(idUsuario) = function() {
		Usuario.getNombre(idUsuario);
	};
/*	Usuario.prototype.circular = function() {
		alert("Circulo con el coche");
	};
*/

}

producto1 = new Producto(1, 1, "Bicicleta");
console.log(Usuario.getNombre(1));
console.log(getUsuNombre(1));
