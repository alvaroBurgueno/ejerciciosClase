
var number = 0;

var m3 = "Fizz";
var m5 = "Buzz";
var m7 = "PummChaKalaKa";

while(number<110){
	number++;
	if((number%3==0) && (number%5==0) && (number%7==0)){
		console.log(m3+m5+m7);
	} else{
		if((number%3==0) && (number%5==0)){
			console.log(m3+m5);
	} else{
		if (number%7==0){
			console.log(m7);
		} else{
			if (number%5==0){
			console.log(m5);
		} else{
			if (number%3==0){
			console.log(m3);
		} else{
			console.log(number);
		}
		}
		}
	}
}
}