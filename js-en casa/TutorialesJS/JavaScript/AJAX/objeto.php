<?php

	// Para evitar que los warnings salgan en la pantalla y se traten como texto JSON
	error_reporting(0);

$objeto ="";
$objeto->nombre = "Alvaro";
$objeto->nacimiento = 1988;
$objeto->pais = "España";

// Codificamos el objeto a JSON 
$miJSON = json_encode($objeto);
// Mostrar por pantalla
echo $miJSON;



?>