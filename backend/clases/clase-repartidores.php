<?php
	class Repartidor extends Usuario{
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

		function __construct($username, $email, $password, $telefono = 0, $ciudad="", $imagen = "", $valoracion = 0, $status = "Pendiente", $disponibilidad = "No disponible"){
			$this->username = $username;
			$this->email = $email;
			$this->password = $password;
			$this->telefono = $telefono;
			$this->ciudad = $ciudad;
			$this->imagen = $imagen;
			$this->valoracion = $valoracion;
			$this->status = $status;
			$this->disponibilidad = $disponibilidad;
		}

		function agregarRepartidor(){
			$archivo = file_get_contents("../data/repartidores.json");
			$repartidores = json_decode($archivo, true);
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
				"password"=> $this->password,
				"telefono"=> $this->telefono,
				"ciudad"=> $this->ciudad,
				"valoracion"=> $this->valoracion,
				"status"=> $this->status,
				"disponibilidad"=> $this->disponibilidad,
				"ordenesEntregadas"=>[],
				"imagen"=> $this->imagen
			);

			$archivo = fopen("../data/repartidores.json", "w");
			fwrite($archivo, json_encode($repartidores));
			fclose($archivo);
		}

		static function obtenerRepartidores(){
			$archivo = file_get_contents("../data/repartidores.json");
			echo $archivo;
		}

		static function obtenerRepartidor($id){
			$archivo = file_get_contents("../data/repartidores.json");
			$repartidores = json_decode($archivo, true);
			foreach ($repartidores as $key => $value) {
				if($value['id'] == $id){
					echo json_encode($repartidores[$key]);		
				}
			}
		}

		public function actualizarRepartidor($id){
			$archivo = file_get_contents("../data/repartidores.json");
			$repartidores = json_decode($archivo, true);
			
			$repartidor = array(
				"id"=> $id,
				"username"=> $this->username,
				"email"=> $this->email,
				"password"=> $this->password,
				"telefono"=> $this->telefono,
				"ciudad"=> $this->ciudad,
				"valoracion"=> $this->valoracion,
				"status"=> $this->status,
				"disponibilidad"=> $this->disponibilidad,
				"ordenesEntregadas"=>[],
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
	}
?>