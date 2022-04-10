<?php
	header('content-type: aplication/json');
	include_once("../clases/clase-ordenes.php");

	switch($_SERVER['REQUEST_METHOD']){
		case 'POST':
			$_POST = json_decode(file_get_contents('php://input'), true);
			$orden = new Orden($_POST['pedido'], $_POST['descripcion'], $_POST['disponibilidad'], $_POST['status'], $_POST['statusRepartidor'], $_POST['cliente'], $_POST['repartidor'], $_POST['cantidad'], $_POST['direccion'], $_POST['imagen']);
			$orden->agregarOrden();
		break;

		case 'GET':
			if(isset($_GET['id'])){
				Orden::obtenerOrden($_GET['id']);
			}else{
				Orden::obtenerOrdenes();
			}
		break;
	}

?>