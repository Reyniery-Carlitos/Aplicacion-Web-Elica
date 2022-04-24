<?php
	class Cliente{
		private $username;
		private $email;
		private $password;
		private $telefono;
		private $ciudad;
		private $imagen;
		private $id;
		private $carritoCliente = '';

		function __construct($username, $email, $password, $telefono = 0, $ciudad="", $imagen = ""){
			$this->username = $username;
			$this->email = $email;
			$this->password = $password;
			$this->telefono = $telefono;
			$this->ciudad = $ciudad;
			$this->imagen = $imagen;
		}

		function agregarCliente(){
			$archivo = file_get_contents("../data/clientes.json");
			$clientes = json_decode($archivo, true);
			$id = '';
			do {
				$id = 'cl' . strval(rand(1, 1000));;
				$existe = 0;
				foreach ($clientes as $key => $value) {
					if($value['id'] == $id){
						$existe = 1;
						break;
					}else{
						$existe = 0;
					}
				}
			} while ($existe == 1);
			
			$clientes[] = array(
				"id"=> $id,
				"username"=> $this->username,
				"email"=> $this->email,
				"password"=> sha1($this->password),
				"telefono"=> $this->telefono,
				"ciudad"=> $this->ciudad,
				"carrito"=> [],
				"imagen"=> $this->imagen
			);

			$archivo = fopen("../data/clientes.json", "w");
			fwrite($archivo, json_encode($clientes));
			fclose($archivo);
		}

		static function obtenerClientes(){
			$archivo = file_get_contents("../data/clientes.json");
			$clientes2 = json_decode($archivo, true);
			$clientes = [];
			foreach ($clientes2 as $key => $value) {
				$clientes[] = array(
					"id"=> $value['id'],
					"username"=> $value['username'],
					"telefono"=> $value['telefono'],
					"ciudad"=> $value['ciudad'],
					"carrito"=> $value['carrito'],
					"imagen"=> $value['imagen']
				);
			}
			echo json_encode($clientes);
		}

		static function obtenerCliente($id){
			$archivo = file_get_contents("../data/clientes.json");
			$clientes = json_decode($archivo, true);
			foreach ($clientes as $key => $value) {
				if($value['id'] == $id){
					echo json_encode($clientes[$key]);		
				}
			}
		}

		public function actualizarCliente($id){
			$archivo = file_get_contents("../data/clientes.json");
			$clientes = json_decode($archivo, true);

			foreach ($clientes as $key => $value) {
				if($value['id'] == $id){
					$carritoCliente = $clientes[$key]["carrito"];
					if($value['password'] == $this->password){
						$password = $value['password'];
					}else{
						$password = sha1($this->password);
					}
				}
			}

			$cliente = array(
				"id"=> $id,
				"username"=> $this->username,
				"email"=> $this->email,
				"password"=> $password,
				"telefono"=> $this->telefono,
				"ciudad"=> $this->ciudad,
				"carrito"=> $carritoCliente,
				"imagen"=> $this->imagen
			);

			foreach ($clientes as $key => $value) {
				if($value['id'] == $id){
					$clientes[$key] = $cliente;		
				}
			}

			$archivo = fopen("../data/clientes.json", "w");
			fwrite($archivo, json_encode($clientes));
			fclose($archivo); 
		}

		static function agregarOrdenCliente($idCliente, $idOrden){
			$archivo = file_get_contents("../data/clientes.json");
			$clientes = json_decode($archivo, true);

			foreach ($clientes as $key => $value) {
				if($value['id'] == $idCliente){
					 array_push($clientes[$key]["carrito"], $idOrden);
				}
			}

			$archivo = fopen("../data/clientes.json", "w");
			fwrite($archivo, json_encode($clientes));
			fclose($archivo);
		}

		static function buscarEmailCliente($email){
			$archivo = file_get_contents("../data/clientes.json");
			$clientes = json_decode($archivo, true);
			$existe = 0;
			foreach ($clientes as $key => $value) {
				if($value['email'] == $email){
					$existe = 1;
					echo $existe;
					break;
				}
			}
			echo $existe;
		}

		static function verificarCliente($email, $password){
			$archivo = file_get_contents("../data/clientes.json");
			$clientes = json_decode($archivo, true);

			foreach ($clientes as $key => $value) {
				if($value['email'] == $email && $value['password'] == sha1($password)){
					// echo json_encode($clientes[$key]);
					return $clientes[$key];
					break;
				}
			}
		}
	}
?>