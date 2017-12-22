/*
PASO 1: Encontrar elemento Canvas
var canvas = document.getElementById("myCanvas");

PASO 2: Crea un objeto de dibujo
var ctx = canvas.getContext("2d");

PASO 3: Dibujar en el Canvas
ctx.fillStyle = "#FF0000";
ctx.fillRect(0,0,150,75);
*/
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

/*--------RECTÁNGULO ------------------------*/
ctx.fillStyle = "#FF0000";
ctx.fillRect(5,5,200,100);

/*--------LÍNEA ------------------------*/
ctx.moveTo(50,200); // posicionamiento línea
ctx.lineTo(200,300);
ctx.stroke(); //PARA QUE PINTE EL GRÁFICO

/*--------CÍRCULO ------------------------*/
ctx.beginPath();
ctx.arc(250,250,40,0,2*Math.PI); // Los 2 primeros parámetros son X e Y
ctx.stroke(); 
/*------CÍRCULOS DENTRO DE OTRO*/
ctx.beginPath();
ctx.arc(235,240,10,0,2*Math.PI); 
ctx.stroke(); 

ctx.beginPath();
ctx.arc(265,240,10,0,2*Math.PI); 
ctx.stroke(); 


/*--------DEGRADADO-----------------------*/
// Create gradient
var grd = ctx.createLinearGradient(220,220,200,0);
grd.addColorStop(0,"red");
grd.addColorStop(1,"white");

// Fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(10,10,150,80); 

/*-----------TEXTO DENTRO DEL CANVAS--------------*/
ctx.font = "30px Arial";
ctx.fillText("CHU CHU BLA BLA",250,50); 

/* -------TEXTO ESPECIAL DENTRO DE CANVAS----------*/
ctx.font = "30px Arial";
ctx.strokeText("RATATATAA",250,100); 
