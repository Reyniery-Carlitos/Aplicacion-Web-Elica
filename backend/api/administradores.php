<?php
	session_start();
	header("content-type: application/json");
	include_once("../clases/clase-administradores.php");

	switch ($_SERVER['REQUEST_METHOD']) {
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
