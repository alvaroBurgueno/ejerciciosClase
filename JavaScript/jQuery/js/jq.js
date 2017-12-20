

$(document).ready( function (){
	$("#myButton").click( function(){

		if ( $(this).hasClass("enabledButton") == false) {
			$(this).addClass("enabledButton");
			$(this).html("ON");
			$("#myImage").attr("src", "img/gatoOscuro.png");
		} else {
			$(this).removeClass("enabledButton");
			$(this).html("OFF");
			$("#myImage").attr("src", "img/gatito.png");
		}

	});
});