<?php
	include_once('clase-empresas.php');
	include_once('clase-categorias.php');

	class Producto{
		private $id;
		private $nombre;
		private $categoria;
		private $descripcion;
		private $precio;
		private $valoracion;
		private $imagenPortada;
		private $imagenPerfil;

		function __construct($nombre, $empresa, $categoria, $descripcion, $precio, $valoracion, $imagenPerfil){
			$this->nombre = $nombre;
			$this->empresa = $empresa;
			$this->categoria = $categoria;
			$this->descripcion = $descripcion;
			$this->precio = $precio;
			$this->valoracion = $valoracion;
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
				"empresa"=> $this->empresa,
				"categoria"=> $this->categoria,
				"descripcion"=> $this->descripcion,
				"precio"=> $this->precio,
				"valoracion"=> $this->valoracion,
				"imagenPerfil"=> $this->imagenPerfil
			);

			Empresa::agregarProductoEmpresa($this->empresa, $id);

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

		// Funcion para actualizar una producto
		function actualizarProducto($id){
			$archivo = file_get_contents("../data/productos.json");
			$productos = json_decode($archivo, true);

			$producto = array(
				"id"=> $id,
				"nombre"=> $this->nombre,
				"empresa"=> $this->empresa,
				"categoria"=> $this->categoria,
				"descripcion"=> $this->descripcion,
				"precio"=> $this->precio,
				"valoracion"=> $this->valoracion,
				"imagenPerfil"=> $this->imagenPerfil
			);
			
			foreach ($productos as $key => $value) {
				if($value['id'] == $id){
					$productos[$key] = $producto;	
				}
			}

			$archivo = fopen("../data/productos.json", "w");
			fwrite($archivo, json_encode($productos));
			fclose($archivo);
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

		static function eliminarProducto($idProducto){
			$archivo = file_get_contents("../data/productos.json");
			$productos = json_decode($archivo, true);

			foreach ($productos as $key => $value) {
				if($value['id'] == $idProducto){
					array_splice($productos, $key, 1);
					echo "Producto: " . $key;
				}	
			}

			$archivo = fopen("../data/productos.json", "w");
			fwrite($archivo, json_encode($productos));
			fclose($archivo); 
		}

		static function eliminarProductos($idEmpresa){
			$archivo = file_get_contents("../data/productos.json");
			$productos = json_decode($archivo, true);
			foreach ($productos as $key => $value) {
				if($value['empresa'] == $idEmpresa){
					array_splice($productos, $key, 1);
					echo "Producto: " . $key;
				}	
			}

			$archivo = fopen("../data/productos.json", "w");
			fwrite($archivo, json_encode($productos));
			fclose($archivo); 
		}
	}

?>