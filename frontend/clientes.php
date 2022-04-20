<?php
	session_start();

	if(!isset($_SESSION['token'])){
		header("Location: 401.html");
		exit();
	}

	if(!isset($_COOKIE['token'])){
		header("Location: 401.html");
		exit();
	}

	if($_SESSION['token'] !== $_COOKIE['token']){
		header("Location: 401.html");
		exit();	
	}
?>
<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="UTF-8">
    <script src="https://kit.fontawesome.com/fea8611b3b.js" crossorigin="anonymous"></script>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="icon" href="assets/img/LogoElica.ico">
    <link rel="stylesheet" type="text/css" media="screen" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/all.css"><!--FontAwesome-->
    <link rel="stylesheet" href="css/clientes.css">
    <link rel="stylesheet" href="css/mapa.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap" rel="stylesheet">
	<link rel="stylesheet" href="https://unpkg.com/leaflet@1.3.1/dist/leaflet.css" />
        <script src="https://unpkg.com/leaflet@1.3.1/dist/leaflet.js"></script>
    <script src="https://unpkg.com/leaflet@1.3.1/dist/leaflet.js"></script>

    <title> Clientes </title>
</head>
<body>
	<header class="nav navbar navbar-expand-lg navbar-light">
		<div class="Menu-Hamburguesa">
			<a href="#" id="Btn-Hamburguesa" onclick="activarMenu()"> <span><i class="fa-solid fa-bars fa-2x"></i></span> </a>
		</div>
	
		<div class="Logo">
			<img src="assets/img/LogoElica.png" alt="Logo empresa Elica">
			<h1 style="font-weight: bold;"> ELICA </h1>
		</div>

		<div class="Perfil"> 
			<a href="#" onclick="generarPerfil()"> <span> <i class="fa-solid fa-user fa-2x"> </i> </span> </a>
		</div>	
	</header>

	<main>
		<div class="main">
			<nav class="Lista-Opciones" id="Menu-Opciones-Principal">
				<ul class="Lista-Opciones__Lista-Items m-0">
					<li class="Lista-Opciones__Items"> <a href="#" class="Lista-Opciones__Link" onclick="mostrarCategorias()"> Categorias </a> </li>
					<li class="Lista-Opciones__Items"> <a href="#" class="Lista-Opciones__Link" onclick="mostrarProductos()"> Productos </a> </li>
					<li class="Lista-Opciones__Items"> 
						<a href="#" class="Lista-Opciones__Link" onclick="mostrarEmpresas()"> Empresas </a> 	
					</li>
					<li class="Lista-Opciones__Items"> 
						<a href="#" class="Lista-Opciones__Link" onclick="carrito()"> Carrito </a>
					</li>
				</ul>
			</nav>
		
			<div class="Contenedor-Formulario" id="Contenedor-Principal-Formulario">
				
			</div>

			<div class="Contenido-Principal" id="Contenido-Principal-Cards">
				
			</div>

			<div class="container-mapa" id="id-container-mapa" hidden>
				<b>Coordenadas</b>
			    <form>
			        <div class="row">
			          	<div class="col">
			            	<input type="text" name="lat" class="form-control" id="lat" size=12 value="">
			          	</div>
			          	<div class="col">
			            	<input type="text" name="lon" class="form-control" id="lon" size=12 value="">
			          	</div>
			        </div>
			    </form>
			    <br />
			    <b>Buscar direccion</b>
			    <div id="search">
			        <div class="row">
			          	<div class="col">
			            	<input type="text" name="addr" value="" id="addr" class="form-control" size="58" />
			          	</div>
				        <div class="col">
				        	<button type="button" onclick="addr_search();" class="btn btn-primary">Buscar</button>
					    </div>
					</div>
					<div id="results"></div>
				</div>

				<br />
	      		<div class="container2">
	    	  		<div id="map" style="width: auto; height: 400px"></div>
	      		</div> 
	      		<div class="Contenedor-Detalles-Orden-Btn">
					<button class="btn-danger Btn-Save" id="" onclick="salirMapa()"> Seleccionar </button> 	
				</div>	
			</div>
		</div>
	</main>

	<!-- Scripts -->
	<script src="js/jquery-3.4.1.min.js"></script>
    <script src="js/popper.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="https://unpkg.com/axios/dist/axios.min.js">  </script>
    <!-- <script src="js/DB.js"></script> -->
    <script src="js/controladorWebClientes.js"></script>
    <script src="js/mapaClientes.js"></script>
</body>
</html>	