<?php
	header('content-type: application/json');
	include_once('../clases/clase-empresas.php');

	switch ($_SERVER['REQUEST_METHOD']) {
		case 'POST':
			$_POST = json_decode(file_get_contents('php://input'), true);
			$empresa = new Empresa($_POST['nombre'], $_POST['descripcion'], $_POST['email'], $_POST['telefono'], $_POST['valoracion'], $_POST['imagenPortada'], $_POST['imagenPerfil']);
			$empresa->agregarEmpresa();
		break;
		
		case 'GET':
			if(isset($_GET['id'])){
				Empresa::obtenerEmpresa($_GET['id']);
			}else{
				Empresa::obtenerEmpresas();
			}
		break;	
		
		case 'PUT':
			$_PUT = json_decode(file_get_contents('php://input'), true);
			$empresa = new Empresa($_PUT['nombre'], $_PUT['descripcion'], $_PUT['email'], $_PUT['telefono'], $_PUT['valoracion'], $_PUT['imagenPortada'], $_PUT['imagenPerfil']);
			$empresa->actualizarEmpresa($_GET['id']);
			echo "Actualizar la empresa: " . $_GET['id'];
		break;

		case 'DELETE': // Eliminar un usuario
			Empresa::eliminarEmpresa($_GET['id']);
			// echo "Eliminar usuario con el id: " . $_GET['id'];
			$resultado["mensaje"] = "Eliminar empresa con id: " . $_GET['id'];
			echo json_encode($resultado);
		break;
	}
?>