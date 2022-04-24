<?php
	include_once('clase-clientes.php');
	class Administrador{
		private $username;
		private $email;
		private $password;
		private $telefono;
		private $ciudad;
		private $imagen;
		private $id;
		private $carrito;

		function __construct($username, $email, $password, $telefono = 0, $ciudad = "", $imagen = ""){
			$this->username = $username;
			$this->email = $email;
			$this->password = $password;
			$this->telefono = $telefono;
			$this->ciudad = $ciudad;
			$this->imagen = $imagen;
		}

		function agregarAdministrador(){
			$archivo = file_get_contents("../data/administradores.json");
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
				"password"=> sha1($this->password),
				"telefono"=> $this->telefono,
				"ciudad"=> $this->ciudad,
				"imagen"=> $this->imagen
			);

			$archivo = fopen("../data/administradores.json", "w");
			fwrite($archivo, json_encode($administradores));
			fclose($archivo);
		}

		static function obtenerAdministradores(){
			$archivo = file_get_contents("../data/administradores.json");
			$administradores2 = json_decode($archivo, true);
			$administradores = [];
			foreach ($administradores2 as $key => $value) {
				$administradores[] = array(
					"id"=> $value['id'],
					"username"=> $value['username'],
					"telefono"=> $value['telefono'],
					"ciudad"=> $value['ciudad'],
					"imagen"=> $value['imagen']
				);
			}
			echo json_encode($administradores);
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

		public function actualizarAdministrador($id){
			$archivo = file_get_contents("../data/administradores.json");
			$administradores = json_decode($archivo, true);

			foreach ($administradores as $key => $value) {
				if ($value['id'] == $id) {
					if($value['password'] == $this->password){
						$password = $value['password'];
					}else{
						$password = sha1($this->password);
					}
				}
			}

			$administrador = array(
				"id"=> $id,
				"username"=> $this->username,
				"email"=> $this->email,
				"password"=> $password,
				"telefono"=> $this->telefono,
				"ciudad"=> $this->ciudad,
				"imagen"=> $this->imagen
			);

			foreach ($administradores as $key => $value) {
				if($value['id'] == $id){
					$administradores[$key] = $administrador;		
				}
			}

			$archivo = fopen("../data/administradores.json", "w");
			fwrite($archivo, json_encode($administradores));
			fclose($archivo); 
		}

		static function buscarEmailAdministrador($email){
			$archivo = file_get_contents("../data/administradores.json");
			$administradores = json_decode($archivo, true);
			$existe = 0;
			foreach ($administradores as $key => $value) {
				if($value['email'] == $email){
					$existe = 1;
					echo $existe;
					break;
				}
			}
			
			if($existe == 0){
				Cliente::buscarEmailCliente($email);
			}
		}

		static function verificarAdministrador($email, $password){
			$archivo = file_get_contents("../data/administradores.json");
			$administradores = json_decode($archivo, true);

			foreach ($administradores as $key => $value) {
				if($value['email'] == $email && $value['password'] == sha1($password)){
					return $administradores[$key];
					break;
				}
			}
		}
	}
?>