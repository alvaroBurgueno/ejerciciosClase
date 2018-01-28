




$(document).ready(function(){

  $("#cambio").click(function() {
	 $("p").css({'color':'red','font-size':'1.3em','background':'yellow'});
   });

  $("#nombre").click(function(){
     $(this).animate({'font-size':'150px'});
  });
  $("#nombre").click(function(){
     $(this).animate({'font-size':'50px'});
  }); 

/*  $('#cambio').on('click',function(){
  	 $("body").css({'background-color':'pink'});
     //$('#respuesta-ej1').toggle();
   });*/

/*	    $("#ocultar").click(function(e){				
	      $("#name").fadeOut(2000);		
	    });
	    $("#mostrar").click(function(e){				
	      $("#name").fadeIn(2000);		
	    });*/







});