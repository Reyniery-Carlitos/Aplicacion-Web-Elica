<?php
	class StatusOrden{
		private $stats;
		private $statsColor;

		function __construct($stats, $statsColor){
			$this->stats = $stats;
			$this->statsColor = $statsColor;
		}

		static function obtenerAllStatus(){
			$archivo = file_get_contents("../data/statusOrden.json");
			echo $archivo;
		}

		static function obtenerStatus($nombreStats){
			$archivo = file_get_contents("../data/statusOrden.json");
			$estados = json_decode($archivo, true);
			foreach ($estados as $key => $value) {
				if($value['stats'] == nombreStats){
					echo json_encode($estados[$key]);
				}
			}
		}
	}
?>