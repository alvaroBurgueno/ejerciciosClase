

$(document).ready(function(){

	var uno = $("#videoUno").attr("hide");
	
	$("#botonCambio").click(function(){

		if (uno==true) {
			$("#videoUno").show();
			$("#videoDos").hide();
		} else {
			$("#videoUno").hide();
			$("#videoDos").show();
		}
	});
});

/*function ocultar{
	$("#videoUno").show();
	$("#videoDos").hide();
};
function ocultar2{
	$("#videoUno").hide();
	$("#videoDos").show();
};*/