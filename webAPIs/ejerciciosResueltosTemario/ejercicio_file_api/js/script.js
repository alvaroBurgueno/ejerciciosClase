//Input para ficheros
var filesUpload = document.getElementById("files-upload");
//Representa el elemento HTML en el que pondremos la lista de resultados sobre info de ficheros
var fileList = document.getElementById("file-list");

// Listener para ver si se han añadido ficheros  al input
filesUpload.addEventListener("change", function(){    
	traverseFiles(this.files); 
});

// Función para dar formato HTML a la info de los ficheros y poder añadirlo a la vista HTML
function traverseFiles(files){    
	// Declarar variables auxiliares
	var li;
	var file;
	var fileInfo;
	// valor inicial para la lista HTML
	fileList.innerHTML = "";
	var i;
    for (i = 0;i < files.length; i++) {       
   		li = document.createElement("li");        
		file = files[i];        
		fileInfo = "<div><strong>Fichero:</strong> " + file.name + "</div>";        
		fileInfo += "<div><strong>Tamaño:</strong> " + file.size + " bytes</div>";        
		fileInfo += "<div><strong>Last modified:</strong> " + file.lastModifiedDate + "</div>";
		fileInfo += "<div><strong>Tipo:</strong> " + file.type + "</div>";        
		li.innerHTML = fileInfo;        
		fileList.appendChild(li); 
	} 
}
