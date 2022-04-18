<?php
	header("content-type: application/json");
	include_once("../clases/clase-repartidores.php");

	switch ($_SERVER['REQUEST_METHOD']) {
		case 'POST':
			$_POST = json_decode(file_get_contents('php://input'), true);
			Repartidor::buscarEmailRepartidor($_POST['email']);
		break;
	}
?>