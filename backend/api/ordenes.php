<?php
	header('content-type: application/json');
	include_once("../clases/clase-ordenes.php");

	switch($_SERVER['REQUEST_METHOD']){
		case 'POST':
			$_POST = json_decode(file_get_contents('php://input'), true);
			$orden = new Orden($_POST['pedido'], $_POST['descripcion'], $_POST['disponibilidad'], $_POST['cliente'], $_POST['repartidor'], $_POST['cantidad'], $_POST['direccion'], $_POST['imagen']);
			$orden->agregarOrden();
		break;

		case 'GET':
			if(isset($_GET['id'])){
				Orden::obtenerOrden($_GET['id']);
			}else{
				Orden::obtenerOrdenes();
			}
		break;
		case 'PUT':
			$_PUT = json_decode(file_get_contents('php://input'), true);
			$orden = new Orden($_PUT['pedido'], $_PUT['descripcion'], $_PUT['disponibilidad'], $_PUT['cliente'], $_PUT['repartidor'], $_PUT['cantidad'], $_PUT['direccion'], $_PUT['imagen']);
			$orden->actualizarOrden($_GET['id']);
			echo "Actualizar la orden: " . $_GET['id'];
		break;
	}

?>