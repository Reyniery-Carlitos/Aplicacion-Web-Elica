<?php
	session_start();
	header("content-type: application/json");
	include_once("../clases/clase-clientes.php");

<<<<<<< HEAD
=======


>>>>>>> eb947e3d1b3086294446de22f623ad8ce1091777
	switch ($_SERVER['REQUEST_METHOD']) {
		case 'POST':
			$_POST = json_decode(file_get_contents('php://input'), true);
			$cliente = new Cliente($_POST['username'], $_POST['email'], $_POST['password'], $_POST['telefono'], $_POST['ciudad'], $_POST['imagen']);
			$cliente->agregarCliente();
		break;

		case 'GET':
			if(isset($_GET['id'])){
				Cliente::obtenerCliente($_GET['id']);
			}else{
				Cliente::obtenerClientes();
			}
		break;

		case 'PUT':
			$_PUT = json_decode(file_get_contents('php://input'), true);
			$cliente = new Cliente($_PUT['username'], $_PUT['email'], $_PUT['password'], $_PUT['telefono'], $_PUT['ciudad'], $_PUT['imagen']);
			$cliente->actualizarCliente($_GET['id']);
			echo "Actualizar el cliente: " . $_GET['id'];
		break;
	}


?>