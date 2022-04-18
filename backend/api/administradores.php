<?php
	session_start();
	header("content-type: application/json");
	include_once("../clases/clase-administradores.php");
	
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
		// $username, $email, $password, $telefono = 0, $ciudad = "", $imagen = ""
		// case 'POST':
		// 	$administrador = new Administrador($_POST['username']);
		// break;
		case 'GET':
			if(isset($_GET['id'])){
				Administrador::obtenerAdministrador($_GET['id']);
			}else{
				Administrador::obtenerAdministradores();
			}
		break;
		case 'PUT':
			$_PUT = json_decode(file_get_contents('php://input'), true);
			$administrador = new Administrador($_PUT['username'], $_PUT['email'], $_PUT['password'], $_PUT['telefono'], $_PUT['ciudad'], $_PUT['imagen']);
			$administrador->actualizarAdministrador($_GET['id']);
			echo "Actualizar el administrador: " . $_GET['id'];
		break;
	}

?>
