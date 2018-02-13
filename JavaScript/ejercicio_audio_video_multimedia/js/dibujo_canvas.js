

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

// Línea

ctx.moveTo(0,0);
ctx.lineTo(700,400);
ctx.stroke();




// Círculo

ctx.beginPath();
ctx.arc(200,200,40,0,2*Math.PI);
ctx.stroke();

// Texto
ctx.font = "30px Arial";
ctx.strokeText("Mi dibujo en Canvas",10,50);


//Rectangulo

ctx.fillRect(325, 325, 100, 100);
ctx.clearRect(345, 345, 60, 60);
ctx.strokeRect(350, 350, 50, 50);

// Cara sonriente
ctx.beginPath();
    ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
    ctx.moveTo(110, 75);
    ctx.arc(75, 75, 35, 0, Math.PI, false);  // Mouth (clockwise)
    ctx.moveTo(65, 65);
    ctx.arc(60, 65, 5, 0, Math.PI * 2, true);  // Left eye
    ctx.moveTo(95, 65);
    ctx.arc(90, 65, 5, 0, Math.PI * 2, true);  // Right eye
    ctx.stroke();

// Cuadrado con sombra
ctx.shadowBlur = 20;
ctx.fillStyle = "red";


ctx.shadowColor = "blue";
ctx.fillRect(500, 300, 100, 80);


// Cuadrado 

ctx.beginPath();
ctx.lineWidth = "10";
ctx.strokeStyle = "blue";
ctx.rect(200, 350, 150, 80);
ctx.stroke();



ctx.fillStyle = "red";
ctx.fillRect(20, 320, 75, 50);

//Turn transparency on
ctx.globalAlpha = 0.2;
ctx.fillStyle = "blue"; 
ctx.fillRect(50, 350, 75, 50); 
ctx.fillStyle = "green"; 
ctx.fillRect(80, 380, 75, 50);