
/*
Mi nombre es ________.
Nací el DD de MM de YYYY.
Por tanto tengo _____ años.
Así que he vivido _____ días.
*/
var myName = "Álvaro";

var birthday;
var today;

var today = new Date();  
var birthday = new Date(1988,06,30); 

var diaNac = birthday.getDate(); 
var mesNac = birthday.getMonth();
var anioNac = birthday.getFullYear();

var myAge = today.getFullYear() - birthday.getFullYear(); 

var myTime = (today - birthday)/86400000;


console.log("Mi nombre es "+myName+".");
console.log("Nací el "+diaNac+" de "+mesNac+" de "+anioNac+".");
console.log("Por tanto tengo "+myAge);
console.log("Así que he vivido "+myTime+" días.");

			











