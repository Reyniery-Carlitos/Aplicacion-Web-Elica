<?php
	include_once('clase-administradores.php');
	class Repartidor{
		private $username;
		private $email;
		private $password;
		private $telefono;
		private $ciudad;
		private $imagen;
		private $id;
		private $valoracion;
		private $status;
		private $disponibilidad;
		private $ordenesEntregadas = '';

		function __construct($username, $email, $password, $telefono, $ciudad, $imagen, $valoracion, $status){
			$this->username = $username;
			$this->email = $email;
			$this->password = $password;
			$this->telefono = $telefono;
			$this->ciudad = $ciudad;
			$this->imagen = $imagen;
			$this->valoracion = $valoracion;
			$this->status = $status;
		}

		// Agregar repartidores
		function agregarRepartidor(){
			$archivo = file_get_contents("../data/repartidores.json");
			$repartidores = json_decode($archivo, true);
			$disponibilidad = "No disponible";
			$id = 'rep';
			do {
				$id = 'rep' . strval(rand(1, 1000));;
				$existe = 0;
				foreach ($repartidores as $key => $value) {
					if($value['id'] == $id){
						$existe = 1;
						break;
					}else{
						$existe = 0;
					}
				}
			} while ($existe == 1);
			
			$repartidores[] = array(
				"id"=> $id,
				"username"=> $this->username,
				"email"=> $this->email,
				"password"=> sha1($this->password),
				"telefono"=> $this->telefono,
				"ciudad"=> $this->ciudad,
				"valoracion"=> $this->valoracion,
				"status"=> $this->status,
				"disponibilidad"=> $disponibilidad,
				"ordenesEntregadas"=>[],
				"imagen"=> $this->imagen
			);

			$archivo = fopen("../data/repartidores.json", "w");
			fwrite($archivo, json_encode($repartidores));
			fclose($archivo);
		}

		// Obtener todos los repartidores
		static function obtenerRepartidores(){
			$archivo = file_get_contents("../data/repartidores.json");
			$repartidores2 = json_decode($archivo, true);
			$repartidores = [];
			foreach ($repartidores2 as $key => $value) {
				$repartidores[] = array(
					"id"=> $value['id'],
					"username"=> $value['username'],
					"email"=> $value['email'],
					"telefono"=> $value['telefono'],
					"ciudad"=> $value['ciudad'],
					"valoracion"=> $value['valoracion'],
					"status"=> $value['status'],
					"disponibilidad"=> $value['disponibilidad'],
					"ordenesEntregadas"=> $value['ordenesEntregadas'],
					"imagen"=> $value['imagen']
				);
			}

			echo json_encode($repartidores);
		}

		// Obtener un solo repartidor
		static function obtenerRepartidor($id){
			$archivo = file_get_contents("../data/repartidores.json");
			$repartidores = json_decode($archivo, true);
			foreach ($repartidores as $key => $value) {
				if($value['id'] == $id){
					echo json_encode($repartidores[$key]);		
				}
			}
		}

		// Actualizar un repartidor
		public function actualizarRepartidor($id){
			$archivo = file_get_contents("../data/repartidores.json");
			$repartidores = json_decode($archivo, true);
			$disponibilidad = "No disponible";

			foreach ($repartidores as $key => $value) {
				if($value['id'] == $id){
					 $ordenesEntregadas = $repartidores[$key]["ordenesEntregadas"];
					if($this->status == 'Rechazado'){
						$disponibilidad = 'No disponible';
						echo $repartidores[$key]['disponibilidad'];
					}else if($this->status = 'Aceptado'){
						$disponibilidad = 'Disponible';
						echo $repartidores[$key]['disponibilidad'];
					}

					if($value['password'] == $this->password){
						$password = $value['password'];
					}else{
						$password = sha1($this->password);
					}
				}
			}
			
			$repartidor = array(
				"id"=> $id,
				"username"=> $this->username,
				"email"=> $this->email,
				"password"=> $password,
				"telefono"=> $this->telefono,
				"ciudad"=> $this->ciudad,
				"valoracion"=> $this->valoracion,
				"status"=> $this->status,
				"disponibilidad"=> $disponibilidad,
				"ordenesEntregadas"=> $ordenesEntregadas,
				"imagen"=> $this->imagen
			);

			foreach ($repartidores as $key => $value) {
				if($value['id'] == $id){
					$repartidores[$key] = $repartidor;		
				}
			}

			$archivo = fopen("../data/repartidores.json", "w");
			fwrite($archivo, json_encode($repartidores));
			fclose($archivo); 
		}

		static function agregarOrdenRepartidor($idRepartidor, $idOrden, $disponibilidadOrden){
			$archivo = file_get_contents("../data/repartidores.json");
			$repartidores = json_decode($archivo, true);

			foreach ($repartidores as $key => $value) {
				if($value['id'] == $idRepartidor){
					if($disponibilidadOrden == 'Entregada'){
						$repartidores[$key]['disponibilidad'] = "Disponible";
					}else if($disponibilidadOrden != 'Entregada' && $disponibilidadOrden != 'No Entregada'){
						$repartidores[$key]['disponibilidad'] = "En proceso";
					}else{
						$repartidores[$key]['disponibilidad'] = "No disponible";
						echo $repartidores[$key]['disponibilidad'];
					}

					$existe = "no";
					foreach ($repartidores[$key]['ordenesEntregadas'] as $key2 => $value2) {
						if ($value2 == $idOrden){
							$existe = "si";
							break;
						}
					}
					if($existe == "no"){
						array_push($repartidores[$key]["ordenesEntregadas"], $idOrden);
					}
					break;
				}
			}

			$archivo = fopen("../data/repartidores.json", "w");
			fwrite($archivo, json_encode($repartidores));
			fclose($archivo);
		}

		static function buscarEmailRepartidor($email){
			$archivo = file_get_contents("../data/repartidores.json");
			$repartidores = json_decode($archivo, true);
			$existe = 0;
			foreach ($repartidores as $key => $value) {
				if($value['email'] == $email){
					$existe = 1;
					echo $existe;
					break;
				}
			}

			if($existe == 0){
				Administrador::buscarEmailAdministrador($email);
			}
		}

		static function verificarRepartidor($email, $password){
			$archivo = file_get_contents("../data/repartidores.json");
			$repartidores = json_decode($archivo, true);

			foreach ($repartidores as $key => $value) {
				if($value['email'] == $email && $value['password'] == sha1($password)){
					return $repartidores[$key];
					break;	
				}
			}
		}
	}
?>