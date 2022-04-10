<?php
	class Producto{
		private $id;
		private $nombre;
		private $categoria;
		private $descripcion;
		private $precio;
		// private $valoracion;
		private $imagenPortada;
		private $imagenPerfil;

		function __construct($nombre, $categoria, $descripcion, $precio, $imagenPortada, $imagenPerfil){
			$this->nombre = $nombre;
			$this->categoria = $categoria;
			$this->descripcion = $descripcion;
			$this->precio = $precio;
			$this->imagenPortada = $imagenPortada;
			$this->imagenPerfil = $imagenPerfil;
		}

		function agregarProducto(){
			$archivo = file_get_contents("../data/productos.json");
			$productos = json_decode($archivo, true);
			$id = '';
			do {
				$id = 'prod' . strval(rand(1, 1000));;
				$existe = 0;
				foreach ($productos as $key => $value) {
					if($value['id'] == $id){
						$existe = 1;
						break;
					}else{
						$existe = 0;
					}
				}
			} while ($existe == 1);
			
			$productos[] = array(
				"id"=> $id,
				"nombre"=> $this->nombre,
				"categoria"=> $this->categoria,
				"descripcion"=> $this->descripcion,
				"precio"=> $this->precio,
				"valoracion"=> $this->valoracion,
				"imagenPortada"=> $this->imagenPortada,
				"imagenPerfil"=> $this->imagenPerfil
			);

			$archivo = fopen("../data/productos.json", "w");
			fwrite($archivo, json_encode($productos));
			fclose($archivo);
		}

		static function obtenerProductos(){
			$archivo = file_get_contents("../data/productos.json");
			echo $archivo;
		}

		static function obtenerProducto($id){
			$archivo = file_get_contents("../data/productos.json");
			$productos = json_decode($archivo, true);
			foreach ($productos as $key => $value) {
				if($value['id'] == $id){
					echo json_encode($productos[$key]);		
				}
			}
		}

		static function obtenerPrecio($id){
			$archivo = file_get_contents("../data/productos.json");
			$productos = json_decode($archivo, true);
			foreach ($productos as $key => $value) {
				if($value['id'] == $id){
					return $value['precio'];
				}
			}
		}

	}

?>