<?php
	include_once('clase-productos.php');
	class Empresa{
		private $id;
		private $nombre;
		private $descripcion;
		private $email;
		private $telefono;
		private $valoracion;
		private $productosEmpresa = '';
		private $imagenPortada;
		private $imagenPerfil;

		function __construct($nombre, $descripcion, $email, $telefono, $valoracion = 5, $imagenPortada, $imagenPerfil){
			$this->nombre = $nombre;
			$this->descripcion = $descripcion;
			$this->email = $email;
			$this->telefono = $telefono;
			$this->valoracion = $valoracion;
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
				"email"=> $this->email,
				"telefono"=> $this->telefono,
				"valoracion"=> $this->valoracion,
				"productosEmpresa"=> [],
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

		// Funcion para actualizar una empresa
		function actualizarEmpresa($id){
			$archivo = file_get_contents("../data/empresas.json");
			$empresas = json_decode($archivo, true);

			foreach ($empresas as $key => $value) {
				if($value['id'] == $id){
					 $productosEmpresa = $empresas[$key]["productosEmpresa"];
				}
			}

			$empresa = array(
				"id"=> $id,
				"nombre"=> $this->nombre,
				"descripcion"=> $this->descripcion,
				"email"=> $this->email,
				"telefono"=> $this->telefono,
				"valoracion"=> $this->valoracion,
				"productosEmpresa"=> $productosEmpresa,
				"imagenPortada"=> $this->imagenPortada,
				"imagenPerfil"=> $this->imagenPerfil
			);
			
			foreach ($empresas as $key => $value) {
				if($value['id'] == $id){
					$empresas[$key] = $empresa;	
				}
			}

			$archivo = fopen("../data/empresas.json", "w");
			fwrite($archivo, json_encode($empresas));
			fclose($archivo);
		}

		static function agregarProductoEmpresa($idEmpresa, $idProducto){
			$archivo = file_get_contents("../data/empresas.json");
			$empresas = json_decode($archivo, true);

			foreach ($empresas as $key => $value) {
				if($value['id'] == $idEmpresa){
					 array_push($empresas[$key]["productosEmpresa"], $idProducto);
				}
			}

			$archivo = fopen("../data/empresas.json", "w");
			fwrite($archivo, json_encode($empresas));
			fclose($archivo);
		}

		static function eliminarEmpresa($idEmpresa){
			$archivo = file_get_contents("../data/empresas.json");
			$empresas = json_decode($archivo, true);
			
			Producto::eliminarProductos($idEmpresa);

			foreach ($empresas as $key => $value) {
				if($value['id'] == $idEmpresa){
					array_splice($empresas, $key, 1);
					echo "Empresa: " . $key;
				}	
			}

			$archivo = fopen("../data/empresas.json", "w");
			fwrite($archivo, json_encode($empresas));
			fclose($archivo); 
		}
	}
?>