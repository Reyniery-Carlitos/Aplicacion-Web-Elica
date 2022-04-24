<?php
	session_start();

	// Validaciones
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
    <link rel="stylesheet" href="css/webAdministrativa.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap" rel="stylesheet">
    <title> Administracion </title>
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
					<li class="Lista-Opciones__Items"> <a href="#" class="Lista-Opciones__Link" onclick="mostrarRepartidores()"> Repartidores </a> </li>
					<li class="Lista-Opciones__Items"> <a href="#" class="Lista-Opciones__Link" onclick="mostrarOrdenes()">Ordenes </a> </li>
					<li class="Lista-Opciones__Items"> 
						<a href="#" class="Lista-Opciones__Link"> Empresas </a> 
						<ul class="Lista-Opciones__Lista-SubItems">
							<li class="Lista-Opciones__SubItems"> 
								<a href="#" class="Lista-Opciones__Link" onclick="mostrarEmpresas()"> Ver Empresas </a> 
							</li>
							<li class="Lista-Opciones__SubItems"> 
								<a href="#" class="Lista-Opciones__Link" onclick="formularioAgregarEmpresa()"> Agregar Empresa </a> 
							</li>
							<li class="Lista-Opciones__SubItems"> 
								<a href="#" class="Lista-Opciones__Link" onclick="editarEmpresa()"> Editar Empresa </a> 
							</li>
						</ul>	
					</li>

					<li class="Lista-Opciones__Items"> 
						<a href="#" class="Lista-Opciones__Link"> Categorias </a>

						<ul class="Lista-Opciones__Lista-SubItems">
							<li class="Lista-Opciones__SubItems"> 
								<a href="#" class="Lista-Opciones__Link" onclick="mostrarCategorias()"> Ver Categorias </a> 
							</li>
							<li class="Lista-Opciones__SubItems"> 
								<a href="#" class="Lista-Opciones__Link" onclick="formularioAgregarCategoria()"> Agregar Categoria </a> 
							</li>
							<li class="Lista-Opciones__SubItems"> 
								<a href="#" class="Lista-Opciones__Link" onclick="editarCategorias()"> Editar Categoria </a> 
							</li>
						</ul>	
					</li>

					<li class="Lista-Opciones__Items"> 
						<a href="#" class="Lista-Opciones__Link"> Productos </a>

						<ul class="Lista-Opciones__Lista-SubItems">
							<li class="Lista-Opciones__SubItems"> 
								<a href="#" class="Lista-Opciones__Link" onclick="mostrarProductos()"> Ver Productos </a> 
							</li>
							<li class="Lista-Opciones__SubItems"> 
								<a href="#" class="Lista-Opciones__Link" onclick="formularioAgregarProducto()"> Agregar Producto </a> 
							</li>
							<li class="Lista-Opciones__SubItems"> 
								<a href="#" class="Lista-Opciones__Link" onclick="editarProductos()"> Editar Producto </a> 
							</li>
						</ul>	
					</li>
				</ul>
			</nav>
		
			<div class="Contenedor-Formulario" id="Contenedor-Principal-Formulario">
				
			</div>

			<div class="Contenido-Principal" id="Contenido-Principal-Cards">
				
			</div>	
		</div>
	</main>

	<!-- Scripts -->
	<script src="js/jquery-3.4.1.min.js"></script>
    <script src="js/popper.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="https://unpkg.com/axios/dist/axios.min.js">  </script>
    <!-- <script src="js/DB.js"></script> -->
    <script src="js/controladorWebAdministrativa.js"></script>
</body>
</html>