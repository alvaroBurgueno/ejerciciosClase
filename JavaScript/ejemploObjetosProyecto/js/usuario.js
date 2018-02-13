function Usuario (idUsuario,nombreUsuario, imagen) {
	this.idUsuario = idUsuario
	this.nombreUsuario = nombreUsuario;
	this.imagen = imagen;


/*console.log(new Usuario(1,"Pepe").nombreUsuario);*/
usuario1 = new Usuario(1, "Alvaro", "../img/img1.jpg");
usuario2 = new Usuario(2, "Juanete", "../img/img2.jpg");
document.write(usuario1.imagen);
//console.log(usuario2.nombreUsuario);