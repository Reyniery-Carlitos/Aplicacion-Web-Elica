<?php
	include_once("clase-productos.php");
	class Orden{
		private $id;
		private $pedido;
		private $descripcion;
		private $disponibilidad;
		private $status;
		private $statusRepartidor;
		private $cliente;
		private $repartidor;
		private $cantidad;
		private $precio;
		private $direccion;
		private $imagen;
		private $total;

		function __construct($pedido, $descripcion, $disponibilidad, $status, $statusRepartidor, $cliente, $repartidor, $cantidad, $direccion, $imagen){
			$this->pedido = $pedido;
			$this->descripcion = $descripcion;
			$this->disponibilidad = $disponibilidad;
			$this->status = $status;
			$this->statusRepartidor = $statusRepartidor;
			$this->cliente = $cliente;
			$this->repartidor = $repartidor;
			$this->cantidad = $cantidad;
			$this->precio = 0;
			$this->direccion = $direccion;
			$this->imagen = $imagen;
			$this->total = 0;
		}

		static function calcularTotal(){
			$archivo = file_get_contents("../data/ordenes.json");
			$ordenes = json_decode($archivo, true);
			
		}

		function agregarOrden(){
			$archivo = file_get_contents("../data/ordenes.json");
			$ordenes = json_decode($archivo, true);
			$id = '';
			do {
				$id = 'ord' . strval(rand(1, 1000));;
				$existe = 0;
				foreach ($ordenes as $key => $value) {
					if($value['id'] == $id){
						$existe = 1;
						break;
					}else{
						$existe = 0;
					}
				}
			} while ($existe == 1);

			$this->precio = (Producto::obtenerPrecio($this->pedido));
				
			$ordenes[] = array(
				"id"=> $id,
				"pedido"=> $this->pedido,
				"descripcion"=> $this->descripcion,
				"disponibilidad"=> $this->disponibilidad,
				"status"=> $this->status,
				"statusRepartidor"=> $this->statusRepartidor,
				"cliente"=> $this->cliente,
				"repartidor"=> $this->repartidor,
				"cantidad"=> $this->cantidad,
				"precio"=> $this->precio,
				"total"=> ($this->precio * $this->cantidad),
				"direccion"=> $this->direccion,
				"imagen"=> $this->imagen
			);

			$archivo = fopen("../data/ordenes.json", "w");
			fwrite($archivo, json_encode($ordenes));
			fclose($archivo);
		}

		static function obtenerOrdenes(){
			$archivo = file_get_contents("../data/ordenes.json");
			echo $archivo;
		}

		function obtenerOrden($id){
			$archivo = file_get_contents("../data/ordenes.json");
			$ordenes = json_decode($archivo, true);
			foreach ($ordenes as $key => $value) {
				if($value['id'] == $id){
					echo json_encode(ordenes[$key]);
				}
			}
		}
	}
?>