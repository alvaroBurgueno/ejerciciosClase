var myName = "David";
var myDay=25;
var myMonth=12;
var myYear=1982;
var myDayOutput = myDay;
var myMonthOutput = myMonth;
var currentYear = 2017;

var myAge;
var currentDate = new Date();
var currentYear = currentDate.getFullYear();
var currentMonth = currentDate.getMonth();
var currentDay = currentDate.getDay();

if (myDay < 10) {
	myDayOutput = "0" + myDay;
}
if (myMonth < 10) {
	myMonthOutput = "0" + myMonth;
}

if (currentMonth > myMonth){
	myAge = currentYear - myYear;
} else {
	if (currentMonth < myMonth){
		myAge = currentYear - myYear -1;
	} else{
		if (currentDay < myDay){
			myAge = currentYear - myYear -1;
		} else {
			myAge = currentYear - myYear;
		}
	}
}



myAge = currentYear - myYear;

console.log ("Mi nombre es "+ myName);
console.log ("Mi fecha de nacimiento es el "+ myDayOutput +" del "
				+ myMonthOutput + " del "+ myYear+".");
console.log("Por tanto tengo "+ myAge + " años.");
