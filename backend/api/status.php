<?php
	header("content-type: application/json");
	include_once("../clases/clase-status.php");

	switch ($_SERVER['REQUEST_METHOD']) {
		case 'GET':
			if(isset($_GET['stats'])){
				Status::obtenerStatus($_GET['stats']);
			}else{
				Status::obtenerAllStatus();
			}
		break;
	}
?>