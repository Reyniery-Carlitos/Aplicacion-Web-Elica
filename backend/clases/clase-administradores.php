<?php
	class Administrador{
		private $username;
		private $email;
		private $password;
		private $telefono;
		private $ciudad;
		private $imagen;
		private $id;
		private $carrito;

		function __construct($username, $email, $password, $telefono = 0, $ciudad="", $imagen = ""){
			$this->username = $username;
			$this->email = $email;
			$this->password = $password;
			$this->telefono = $telefono;
			$this->ciudad = $ciudad;
			$this->imagen = $imagen;
		}

		function agregarAdministrador(){
			$archivo = file_get_contents("../data/clientes.json");
			$administradores = json_decode($archivo, true);
			$id = '';
			do {
				$id = 'adm' . strval(rand(1, 1000));;
				$existe = 0;
				foreach ($administradores as $key => $value) {
					if($value['id'] == $id){
						$existe = 1;
						break;
					}else{
						$existe = 0;
					}
				}
			} while ($existe == 1);
			
			$administradores[] = array(
				"id"=> $id,
				"username"=> $this->username,
				"email"=> $this->email,
				"password"=> $this->password,
				"telefono"=> $this->telefono,
				"ciudad"=> $this->ciudad,
				"imagen"=> $this->imagen
			);

			$archivo = fopen("../data/clientes.json", "w");
			fwrite($archivo, json_encode($clientes));
			fclose($archivo);
		}

		static function obtenerAdministradores(){
			$archivo = file_get_contents("../data/administradores.json");
			echo $archivo;
		}

		static function obtenerAdministrador($id){
			$archivo = file_get_contents("../data/administradores.json");
			$administradores = json_decode($archivo, true);
			foreach ($administradores as $key => $value) {
				if($value['id'] == $id){
					echo json_encode($administradores[$key]);		
				}
			}
		}
	}

?>