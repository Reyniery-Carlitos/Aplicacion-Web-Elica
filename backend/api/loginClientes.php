<?php
	session_start();
	header("content-type: application/json");
	include_once("../clases/clase-clientes.php");

	switch ($_SERVER['REQUEST_METHOD']) {
		case 'POST':
			$_POST = json_decode(file_get_contents('php://input'), true);
			$cliente = Cliente::verificarCliente($_POST['email'], $_POST['password']);
			if($cliente){
				$resultado = array('token' => sha1(uniqid(rand(), true)));
				$_SESSION['token'] = $resultado['token'];
				setcookie("token", $resultado['token'], time() + (60*60*24*31), "/");
				setcookie("id", $cliente['id'], time() + (60*60*24*31), "/");
				setcookie("username", $cliente['username'], time() + (60*60*24*31), "/");
				setcookie("email", $cliente['email'], time() + (60*60*24*31), "/");
				echo "Existe";
			}else{
				setcookie("token", '', time() -1, "/");
				setcookie("id", '', time() -1, "/");
				setcookie("username", '', time() -1, "/");
				setcookie("email", '', time() -1, "/");
			}
		break;
	}
?>