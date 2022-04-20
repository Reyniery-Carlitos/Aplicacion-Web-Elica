<?php
	include_once("clase-productos.php");
	include_once("clase-clientes.php");
	include_once("clase-repartidores.php");

	class Orden{
		private $id;
		private $pedido;
		private $descripcion;
		private $disponibilidad;
		private $status = "No asignada";
		private $statusRepartidor = "No tomada";
		private $cliente;
		private $repartidor;
		private $cantidad;
		private $precio;
		private $direccion;
		private $latitud;
		private $longitud;
		private $imagen;
		private $total = 0;
		private $comisionElica = 0;
		private $comisionRepartidor = 0;
		private $precioEnvio = 50;

		function __construct($pedido, $descripcion, $disponibilidad, $cliente, $repartidor, $cantidad, $direccion, $latitud, $longitud, $imagen){
			$this->pedido = $pedido;
			$this->descripcion = $descripcion;
			$this->disponibilidad = $disponibilidad;
			$this->cliente = $cliente;
			$this->repartidor = $repartidor;
			$this->cantidad = $cantidad;
			$this->direccion = $direccion;
			$this->latitud = $latitud;
			$this->longitud = $longitud;
			$this->imagen = $imagen;
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

			if($this->repartidor == "No asignado"){
				$statusRepartidor = 'No tomada';
				$status = "No asignada";
			}else{
				$statusRepartidor = 'Tomada';
				$status = "Asignada";
			}

			$precio = (Producto::obtenerPrecio($this->pedido));
				
			$ordenes[] = array(
				"id"=> $id,
				"pedido"=> $this->pedido,
				"descripcion"=> $this->descripcion,
				"disponibilidad"=> $this->disponibilidad,
				"status"=> $status,
				"statusRepartidor"=> $statusRepartidor,
				"cliente"=> $this->cliente,
				"repartidor"=> $this->repartidor,
				"cantidad"=> $this->cantidad,
				"precio"=> $precio,
				"total"=> (($precio * $this->cantidad) + $this->precioEnvio),
				"precioEnvio"=> $this->precioEnvio,
				"comisionElica"=> ($this->precioEnvio * 0.20),
				"comisionRepartidor" => ($this->precioEnvio * 0.80),
				"direccion"=> $this->direccion,
				"latitud"=> $this->latitud,
				"longitud"=> $this->longitud,
				"imagen"=> $this->imagen
			);

			Cliente::agregarOrdenCliente($this->cliente, $id);

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

		public function actualizarOrden($id){
			$archivo = file_get_contents("../data/ordenes.json");
			$ordenes = json_decode($archivo, true);

			if($this->repartidor == "No asignado"){
				$statusRepartidor = 'No tomada';
				$status = "No asignada";
			}else{
				// Repartidor::cambiarEstado($this->repartidor, $this->disponibilidad);
				$statusRepartidor = 'Tomada';
				$status = "Asignada";
			}

			$precio = (Producto::obtenerPrecio($this->pedido));
			
			$orden = array(
				"id"=> $id,
				"pedido"=> $this->pedido,
				"descripcion"=> $this->descripcion,
				"disponibilidad"=> $this->disponibilidad,
				"status"=> $status,
				"statusRepartidor"=> $statusRepartidor,
				"cliente"=> $this->cliente,
				"repartidor"=> $this->repartidor,
				"cantidad"=> $this->cantidad,
				"precio"=> $precio,
				"total"=> (($precio * $this->cantidad) + $this->precioEnvio),
				"precioEnvio"=> $this->precioEnvio,
				"comisionElica"=> ($this->precioEnvio * 0.20),
				"comisionRepartidor" => ($this->precioEnvio * 0.80),
				"direccion"=> $this->direccion,
				"latitud"=> $this->latitud,
				"longitud"=> $this->longitud,
				"imagen"=> $this->imagen
			);

			foreach ($ordenes as $key => $value) {
				if($value['id'] == $id){
					$ordenes[$key] = $orden;		
				}
			}
			
			Repartidor::agregarOrdenRepartidor($this->repartidor, $id, $this->disponibilidad);

			$archivo = fopen("../data/ordenes.json", "w");
			fwrite($archivo, json_encode($ordenes));
			fclose($archivo); 
		}
	}
?>