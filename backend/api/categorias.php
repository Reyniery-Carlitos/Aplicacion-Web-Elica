<?php
	header("content-type: application/json");
	include_once("../clases/clase-categorias.php");

	switch ($_SERVER['REQUEST_METHOD']) {
		case 'POST':
			$_POST = json_decode(file_get_contents('php://input'), true);
			$categoria = new Categoria($_POST['nombre'], $_POST['imagen']);
			$categoria->agregarCategoria();
		break;
		case 'GET':
			if(isset($_GET['id'])){
				Categoria::obtenerCategoria($_GET['id']);
			}else{
				Categoria::obtenerCategorias();
			}
		break;

		case 'PUT':
			$_PUT = json_decode(file_get_contents('php://input'), true);
			$categoria = new Categoria($_PUT['nombre'], $_PUT['imagen']);
			$categoria->actualizarCategoria($_GET['id']);
			echo "Actualizar la categoria: " . $_GET['id'];
		break;
	}

?>