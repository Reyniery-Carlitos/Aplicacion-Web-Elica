<?php
	class Cliente{
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
				"password"=> $this->password,
				"telefono"=> $this->telefono,
				"ciudad"=> $this->ciudad,
				"carrito"=> ["ord2", "ord3", "ord2"],
				"imagen"=> $this->imagen
			);

			$archivo = fopen("../data/clientes.json", "w");
			fwrite($archivo, json_encode($clientes));
			fclose($archivo);
		}

		static function obtenerClientes(){
			$archivo = file_get_contents("../data/clientes.json");
			echo $archivo;
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
			
			$cliente = array(
				"id"=> $id,
				"username"=> $this->username,
				"email"=> $this->email,
				"password"=> $this->password,
				"telefono"=> $this->telefono,
				"ciudad"=> $this->ciudad,
				"carrito"=> ["ord2","ord3","ord2"],
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
	}


?>