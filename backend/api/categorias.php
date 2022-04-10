<?php
	header("content-type: aplication/json");
	include_once("../clases/clase-categorias.php");

	switch ($_SERVER['REQUEST_METHOD']) {
		case 'POST':
			$_POST = json_decode(file_get_contents('php://input'), true);
			$categoria = new Categoria($_POST['nombre'], $_POST['imagen']);
		break;
		case 'GET':
			if(isset($_GET['id'])){
				Categoria::obtenerCategoria($_GET['id']);
			}else{
				Categoria::obtenerCategorias();
			}
		break;
	}

?>