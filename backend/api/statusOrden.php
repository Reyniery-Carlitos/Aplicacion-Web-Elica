<?php
	header("content-type: application/json");
	include_once("../clases/clase-statusOrden.php");

	switch ($_SERVER['REQUEST_METHOD']) {
		case 'GET':
			if(isset($_GET['stats'])){
				StatusOrden::obtenerStatus($_GET['stats']);
			}else{
				StatusOrden::obtenerAllStatus();
			}
		break;
	}
?>