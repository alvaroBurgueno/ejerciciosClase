

$(document).ready(function(){

	$("#imagen1").hide();
	$("#imagen2").hide();
	$("#imagen3").hide();

	$("#boton1").click(function(){
		$("#imagen2").hide();
		$("#imagen3").hide();
		$("#imagen1").show();
	});
	$("#boton2").click(function(){
		$("#imagen1").hide();
		$("#imagen3").hide();
		$("#imagen2").show();
	});
	$("#boton3").click(function(){
		$("#imagen1").hide();
		$("#imagen2").hide();
		$("#imagen3").show();
	});


});







