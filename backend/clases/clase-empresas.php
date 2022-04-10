<?php
	class Empresa{
		private $id;
		private $nombre;
		private $descripcion;
		private $email;
		private $telefono;
		private $imagenPortada;
		private $imagenPerfil;

		function __construct($nombre, $descripcion, $email, $telefono, $imagenPortada, $imagenPerfil){
			$this->nombre = $nombre;
			$this->descripcion = $descripcion;
			$this->email = $email;
			$this->telefono = $telefono;
			$this->imagenPortada = $imagenPortada;
			$this->imagenPerfil = $imagenPerfil;
		}

		function agregarEmpresa(){
			$archivo = file_get_contents("../data/empresas.json");
			$empresas = json_decode($archivo, true);
			$id = '';
			do {
				$id = 'emp' . strval(rand(1, 1000));;
				$existe = 0;
				foreach ($empresas as $key => $value) {
					if($value['id'] == $id){
						$existe = 1;
						break;
					}else{
						$existe = 0;
					}
				}
			} while ($existe == 1);
			
			$empresas[] = array(
				"id"=> $id,
				"nombre"=> $this->nombre,
				"descripcion"=> $this->descripcion,
				"telefono"=> $this->telefono,
				"precio"=> $this->precio,
				"imagenPortada"=> $this->imagenPortada,
				"imagenPerfil"=> $this->imagenPerfil
			);

			$archivo = fopen("../data/empresas.json", "w");
			fwrite($archivo, json_encode($empresas));
			fclose($archivo);
		}

		static function obtenerEmpresas(){
			$archivo = file_get_contents("../data/empresas.json");
			echo $archivo;
		}

		static function obtenerEmpresa($id){
			$archivo = file_get_contents("../data/empresas.json");
			$empresas = json_decode($archivo, true);
			foreach ($empresas as $key => $value) {
				if($value['id'] == $id){
					echo json_encode($empresas[$key]);
				}
			}
		}
	}
?>