
var Ejemplo = {
	// properties
	//"nombre" : "Babe", esta forma de crearlo no aplica bien el concepto de abstracción
	//methods
};


var Cochino = {

	// properties --> "" (para String) ; 0 (para Integer) ; false (para Boolean)
	// [] (para arrays)

	nombre : "", // para indicar a JS que es de tipo String
	color : "",  // para indicar a JS que es de tipo String
	peso : 0,    // para indicar que es de tipo Integer, 0.0 si quisiéramos tipo Float.

	// Methods
	Cochino : function() {
		this.nombre = "Babe";
	}
};

var myCochino = new Cochino();
console.log(myCochino.nombre);
