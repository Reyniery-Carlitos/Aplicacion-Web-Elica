<?php
	class Categoria{
		private $id;
		private $nombre;
		private $imagen;

		function __construct($nombre, $imagen){
			$this->nombre = $nombre;
			$this->imagen = imagen;
		}

		function agregarCategoria(){
			$archivo = file_get_contents("../data/categorias.json");
			$categorias = json_decode($archivo, true);
			$id = '';
			do {
				$id = 'cat' . strval(rand(1, 1000));;
				$existe = 0;
				foreach ($categorias as $key => $value) {
					if($value['id'] == $id){
						$existe = 1;
						break;
					}else{
						$existe = 0;
					}
				}
			} while ($existe == 1);
				
			$categorias[] = array(
				"id"=> $id,
				"nombre"=> $this->nombre,
				"imagen"=> $this->imagen
			);

			$archivo = fopen("../data/categorias.json", "w");
			fwrite($archivo, json_encode($categorias));
			fclose($archivo);
		}

		function obtenerCategorias(){
			$archivo = file_get_contents("../data/categorias.json");
			echo $archivo;
		}

		function obtenerCategoria($id){
			$archivo = file_get_contents("../data/categorias.json");
			$categorias = json_decode($archivo, true);
			foreach($categorias as $key => $value){
				if($value['id'] == $id){
					echo json_encode($categorias[$key]);	
				}
			}
		}
	}

?>