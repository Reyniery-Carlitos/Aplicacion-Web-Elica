<?php
	header('content-type: aplication/json');
	include_once('../clases/clase-empresas.php');

	switch ($_SERVER['REQUEST_METHOD']) {
		case 'POST':
			$_POST = json_decode(file_get_contents('php://input'), true);
			$empresa = new Empresa($_POST['nombre'], $_POST['descripcion'], $_POST['email'], $_POST['imagenPortada'], $_POST['imagenPerfil']);
			$empresas->agregarEmpresa();
		break;
		
		case 'GET':
			if(isset($_GET['id'])){
				Empresa::obtenerEmpresa($_GET['id']);
			}else{
				Empresa::obtenerEmpresas();
			}
		break;	
	}
?>