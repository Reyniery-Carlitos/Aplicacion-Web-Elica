<?php
	session_start();
	header("content-type: application/json");
	include_once("../clases/clase-administradores.php");

	switch ($_SERVER['REQUEST_METHOD']) {
		case 'POST':
			$_POST = json_decode(file_get_contents('php://input'), true);
			$administrador = Administrador::verificarAdministrador($_POST['email'], $_POST['password']);
			if($administrador){
				$resultado = array('token' => sha1(uniqid(rand(), true)));
				$_SESSION['token'] = $resultado['token'];
				setcookie("token", $resultado['token'], time() + (60*60*24*31), "/");
				setcookie("id", $administrador['id'], time() + (60*60*24*31), "/");
				setcookie("username", $administrador['username'], time() + (60*60*24*31), "/");
				setcookie("email", $administrador['email'], time() + (60*60*24*31), "/");
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