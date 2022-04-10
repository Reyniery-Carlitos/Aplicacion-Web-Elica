<?php
	header("content-type: aplication/json");
	include_once("../clases/clase-productos.php");

	switch ($_SERVER['REQUEST_METHOD']) {
		case 'POST':
			$_POST = json_decode(file_get_contents('php://input'), true);
			$producto = new Producto($_POST['nombre'], $_POST['categoria'], $_POST['descripcion'], $_POST['precio'], $_POST['imagenPortada'], $_POST['imagenPerfilm']);
			$producto->agregarProducto();
		break;

		case 'GET':
			if(isset($_GET['id'])){
				Producto::obtenerProducto($_GET['id']);
				// Producto::obtenerPrecio($_GET['id']);
			}else{
				Producto::obtenerProductos();
			}
		break;
	}
?>