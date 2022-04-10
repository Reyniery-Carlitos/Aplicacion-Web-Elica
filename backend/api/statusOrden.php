<?php
	header("conten-type: aplication/json");
	include_once("../clases/clase-statusOrden.php");

	switch ($_SERVER['REQUEST_METHOD']) {
		case 'GET':
			if(isset($_GET['stats'])){
				Status::obtenerStatus($_GET['stats']);
			}
		break;
	}
?>