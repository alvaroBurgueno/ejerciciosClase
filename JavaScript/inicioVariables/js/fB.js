
function modulo(){
	
}

var salida="";
for (var i=1;i<106;i++) {
	
	
	if(i%3==0){
		salida+="Fizz";
	}
	if(i%5==0){
		salida+="Buzz";
	}
	if(i%7==0){
		salida+="Pumchakalaka";
	}
	if (salida==""){
		salida+=i;
	}
	console.log(salida);
	salida="";
	}


