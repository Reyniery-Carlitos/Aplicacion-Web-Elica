<?php
	session_start();
	header("content-type: application/json");
	include_once("../clases/clase-repartidores.php");

	if(!isset($_SESSION['token'])){
		echo "Error: Acceso no autorizado";
		exit();
	}

	if(!isset($_COOKIE['token'])){
		echo "Error: Acceso no autorizado";
		exit();
	}

	if($_SESSION['token'] !== $_COOKIE['token']){
		echo "Error: Acceso no autorizado";
		exit();	
	}

	switch ($_SERVER['REQUEST_METHOD']) {
		case 'POST':
			$_POST = json_decode(file_get_contents('php://input'), true);
			$repartidor = new Repartidor($_POST['username'], $_POST['email'], $_POST['password'], $_POST['telefono'], $_POST['ciudad'], $_POST['imagen'], $_POST['valoracion'], $_POST['status']);
			$repartidor->agregarRepartidor();
		break;

		case 'GET':
			if(isset($_GET['id'])){
				Repartidor::obtenerRepartidor($_GET['id']);
			}else{
				Repartidor::obtenerRepartidores();
			}
		break;

		case 'PUT': // Actualizar repartidor
			$_PUT = json_decode(file_get_contents('php://input'), true);
			$repartidor = new Repartidor($_PUT['username'], $_PUT['email'], $_PUT['password'], $_PUT['telefono'], $_PUT['ciudad'], $_PUT['imagen'], $_PUT['valoracion'], $_PUT['status']);
			$repartidor->actualizarRepartidor($_GET['id']);
			echo "Actualizar el repartidor: " . $_GET['id'];
		break;
	}
?>