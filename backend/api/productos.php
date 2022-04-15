<?php
	header("content-type: application/json");
	include_once("../clases/clase-productos.php");

	switch ($_SERVER['REQUEST_METHOD']) {
		case 'POST':
			$_POST = json_decode(file_get_contents('php://input'), true);
			$producto = new Producto($_POST['nombre'], $_POST['empresa'], $_POST['categoria'], $_POST['descripcion'], $_POST['precio'], $_POST['valoracion'], $_POST['imagenPerfil']);
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

		case 'PUT':
			$_PUT = json_decode(file_get_contents('php://input'), true);
			$producto = new Producto($_PUT['nombre'], $_PUT['empresa'], $_PUT['categoria'], $_PUT['descripcion'], $_PUT['precio'], $_PUT['valoracion'], $_PUT['imagenPerfil']);
			$producto->actualizarProducto($_GET['id']);
		break;

		case 'DELETE': // Eliminar un usuario
			Producto::eliminarProducto($_GET['id']);
			// echo "Eliminar usuario con el id: " . $_GET['id'];
			$resultado["mensaje"] = "Eliminar producto con id: " . $_GET['id'];
			echo json_encode($resultado);
		break;
	}
?>