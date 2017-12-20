/*	hover click blur focus mouseenter mouseleave
	hide(1000) show toggle fadeIn() fadeOut() fadeToggle() fadeTo()

	$(selector).toggle(speed,callback); 
*/



$(document).ready(function(){

	

	$("#myButton").click(function (){

		if($("#verde").hasClass("opacity")== false){

			$("#verde").addClass("opacity");
			$("#ambar").removeClass("opacity");


		} else if ($("#ambar").hasClass("opacity")== false) {

			$("#ambar").addClass("opacity");
			$("#rojo").removeClass("opacity");

		} else {

			$("#rojo").addClass("opacity");
			$("#verde").removeClass("opacity");

		}

	});
	

		
});