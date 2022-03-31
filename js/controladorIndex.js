const categorias = [
	{
		id: "cat1",
		nombre: "Comidas",
		imagen: "assets/img/comida.png"
	},
	{
		id: "cat2",
		nombre: "Frutas y Verduras",
		imagen: "assets/img/frutas.png"
	},
	{
		id: "cat3",
		nombre: "Supermercado",
		imagen: "assets/img/supermercado.png"
	},
	{
		id: "cat4",
		nombre: "Tiendas y Regalos",
		imagen: "assets/img/regalos.png"
	},
	{
		id: "cat5",
		nombre: "Postres",
		imagen: "assets/img/postre.png"
	},
];

function formularioRegistro(){
	document.getElementById("Contenido-Principal-Landing").innerHTML = '';
	document.getElementById("Contenido-Principal-Landing").innerHTML += `
		<section class="Formulario-Registro" id="Contenedor-Formulario" onclick="validaciones()">
			<form action="" method="" id="Formulario">
				<h1> Registrate en Elica </h1>
				<div class="Contenedor-Individual">
					<i class="fa-solid fa-user fa-2x"></i>
					<input class="Validar" id="Input-Individual-Username" type="text" name="username" placeholder="Nombre">	
					<i class="fa-solid fa-xmark fa-2x text-danger Icono-Validar" id="Icono-Validar-Incorrecto-Username"></i>
					<i class="fa-solid fa-check fa-2x text-success Icono-Validar" id="Icono-Validar-Correcto-Username"></i>
				</div>

				<div class="Contenedor-Individual"> 
					<i class="fa-solid fa-envelope fa-2x"></i>
					<input class="" id="Input-Individual-Email" type="email" name="email" placeholder="Email">
					<i class="fa-solid fa-xmark fa-2x text-danger Icono-Validar" id="Icono-Validar-Incorrecto-Email"></i>
					<i class="fa-solid fa-check fa-2x text-success Icono-Validar" id="Icono-Validar-Correcto-Email"></i>
				</div>
					
				<div class="Contenedor-Individual"> 
					<i class="fa-solid fa-lock fa-2x"></i>
					<input class="" type="password" id="Input-Individual-Password" name="password" placeholder="Contraseña">
					<i class="fa-solid fa-xmark fa-2x text-danger Icono-Validar" id="Icono-Validar-Incorrecto-Password"></i>
					<i class="fa-solid fa-check fa-2x text-success Icono-Validar" id="Icono-Validar-Correcto-Password"></i>
				</div>
				<button type="submit" onclick="btnSubmitValidaciones()"> Registrarme </button>
				<h2> Ya tienes una cuenta? <span class="Span-Error-Login-Show"> <a href="#" onclick="formularioIniciaSesion()"> Inicia Sesion </a> </span> </h2>
			</form>
		</section>
	`;
}

function formularioRegistroRepartidores(){
	document.getElementById("Contenido-Principal-Landing").innerHTML = '';
	document.getElementById("Contenido-Principal-Landing").innerHTML += `
		<section class="Formulario-Registro" id="Contenedor-Formulario" onclick="validacionesRepartidores()">
			<form action="" method="POST" id="Formulario">
				<h1> Registrate en Elica </h1>
				<div class="Contenedor-Individual">
					<i class="fa-solid fa-user fa-2x"></i>
					<input class="Validar" id="Input-Individual-Username" type="text" name="username" placeholder="Nombre">	
					<i class="fa-solid fa-xmark fa-2x text-danger Icono-Validar" id="Icono-Validar-Incorrecto-Username"></i>
					<i class="fa-solid fa-check fa-2x text-success Icono-Validar" id="Icono-Validar-Correcto-Username"></i>
				</div>

				<div class="Contenedor-Individual"> 
					<i class="fa-solid fa-envelope fa-2x"></i>
					<input class="" id="Input-Individual-Email" type="email" name="email" placeholder="Email">
					<i class="fa-solid fa-xmark fa-2x text-danger Icono-Validar" id="Icono-Validar-Incorrecto-Email"></i>
					<i class="fa-solid fa-check fa-2x text-success Icono-Validar" id="Icono-Validar-Correcto-Email"></i>
				</div>

				<div class="Contenedor-Individual"> 
					<i class="fa-solid fa-phone fa-2x"></i>
					<input class="" id="Input-Individual-Telefono" type="tel" pattern="[0-9]{4}-[0-9]{4}" name="telefono" placeholder="Telefono">
					<i class="fa-solid fa-xmark fa-2x text-danger Icono-Validar" id="Icono-Validar-Incorrecto-Telefono"></i>
					<i class="fa-solid fa-check fa-2x text-success Icono-Validar" id="Icono-Validar-Correcto-Telefono"></i>
				</div>
					
				<div class="Contenedor-Individual"> 
					<i class="fa-solid fa-lock fa-2x"></i>
					<input class="" type="password" id="Input-Individual-Password" name="password" placeholder="Contraseña">
					<i class="fa-solid fa-xmark fa-2x text-danger Icono-Validar" id="Icono-Validar-Incorrecto-Password"></i>
					<i class="fa-solid fa-check fa-2x text-success Icono-Validar" id="Icono-Validar-Correcto-Password"></i>
				</div>
				<button type="submit" onclick="btnSubmitValidaciones()"> Registrarme </button>
				<h2> Ya tienes una cuenta? <span class="Span-Error-Login-Show"> <a href="#" onclick="btnSubmitValidacionesRepartidores()"> Inicia Sesion </a> </span> </h2>
			</form>
		</section>
	`;
}

function formularioIniciaSesion(){
	document.getElementById('Contenido-Principal-Landing').innerHTML = '';
	document.getElementById('Contenido-Principal-Landing').innerHTML += `
		<section class="Formulario-Registro">
			<form action="" id="Formulario">
				<h1> Inicia Sesion en Elica </h1>
				<div class="Contenedor-Individual"> 
					<i class="fa-solid fa-envelope fa-2x"></i>
					<input type="email" name="email" placeholder="Email" id="Input-Individual-Email">
					<i class="fa-solid fa-xmark fa-2x text-danger Icono-Validar" id="Icono-Validar-Incorrecto-Email"></i>
					<i class="fa-solid fa-check fa-2x text-success Icono-Validar" id="Icono-Validar-Correcto-Email"></i>
				</div>
					
				<div class="Contenedor-Individual"> 
					<i class="fa-solid fa-lock fa-2x"></i>
					<input type="password" name="password" placeholder="Contraseña"  id="Input-Individual-Password">
					<i class="fa-solid fa-xmark fa-2x text-danger Icono-Validar" id="Icono-Validar-Incorrecto-Password"></i>
					<i class="fa-solid fa-check fa-2x text-success Icono-Validar" id="Icono-Validar-Correcto-Password"></i>
				</div>

				<div class="Contenedor-Individual"> 
					<span class="Span-Error-Login text-danger" id="Id-Span-Invalido"> Usuario o contraseña incorrecto </span>
				</div>

				<button type="submit" onclick="validacionLogin()"> Iniciar Sesion </button>
				<h2> No te has registrado? <span class="Span-Error-Login-Show"> <a href="#" onclick="formularioRegistro()"> Registrate ahora </a> </span> </h2>
			</form>
		</section>
	`;
}

function mostrarLanding(){
	document.getElementById('Contenido-Principal-Landing').innerHTML = '';
	let listaCategorias = '';
	categorias.forEach(categoria => {
		listaCategorias += `
			<div class="Card-Categoria" onclick="formularioRegistro()">
				<img src="${categoria.imagen}" alt="Imagen ${categoria.nombre}">
				<h2 class="Texto-Detalles-Orden"> ${categoria.nombre} </h2>
			</div>`;
	});

	document.getElementById('Contenido-Principal-Landing').innerHTML += `
		<section class="Contenedor-Ordena-Ahora" id="Id-Contenedor-Ordena-Ahora">
			<article class="Contenedor-Ordena-Ahora__Contenidos Contenedor-Ordena-Ahora__Contenido1">
				<img src="assets/img/LogoElica.png">
				<h1 class="Contenedor-Ordena-Ahora__Contenido1-Titulo"> Ordena con nosotros! </h1>
				<p class="Contenedor-Ordena-Ahora__Contenido1-Texto"> Somos una aplicación móvil que te permite realizar pedidos en línea desde la comodidad de tu hogar, ordena todo tipo de suministros desde nuestra aplicación. </p>
				<button class="Botones-Header Btn-Sign-Up"> <h2 class="Texto-Header" onclick="formularioRegistro()"> Registrate </h2> </button>
			</article>
			<article class="Contenedor-Ordena-Ahora__Contenidos Contenedor-Ordena-Ahora__Contenido2">
				<img src="assets/img/repartidor2.gif" alt="Repartidor">
			</article>
		</section>

		<section class="Contenedor-Categorias" id="Id-Contenedor-Categorias">
			<h1> Nuestras Categorias </h1>
			<div class="Container-Card-Categorias">
				${listaCategorias}
			</div>
		</section>

		<section class="Contenedor-Como-Trabajamos" id="Id-Contenedor-Como-Trabajamos">
			<h1 class="Contenedor-Como-Trabajamos__Titulo"> Como trabajamos<span class="text-danger">? </span></h1>
			<h2 class="Contenedor-Como-Trabajamos__Subtitulo"> <span class="text-danger"> 1. </span> Haz un pedido </h2>
			<p class="Contenedor-Como-Trabajamos__Texto"> Registrate con nosotros y añade todo lo que necesites a tu carrito de compras  </p>
			<h2 class="Contenedor-Como-Trabajamos__Subtitulo"> <span class="text-danger"> 2. </span> Llegaremos a ti </h2>
			<p class="Contenedor-Como-Trabajamos__Texto"> Elige con nuestra aplicación el destino final de tu orden </p>
			<h2 class="Contenedor-Como-Trabajamos__Subtitulo"> <span class="text-danger"> 3. </span>  Paga de forma segura </h2>
			<p class="Contenedor-Como-Trabajamos__Texto"> Paga tu orden de una manera fácil y sencilla con cualquier tipo de tarjeta  </p>
			<button class="Botones-Header Btn-Sign-Up"> <h2 class="Texto-Header" onclick="formularioRegistro()"> Registrate </h2> </button>
		</section>

		<section class="Contenedor-Trabaja-Con-Nosotros" id="Id-Contenedor-Trabaja-Con-Nosotros">
			<h1 class="Contenedor-Como-Trabajamos__Titulo"> Trabaja con nosotros<span class="text-danger">! </span></h1>
			<p class="Contenedor-Como-Trabajamos__Texto"> Consigue un horario que se adecue a ti con una remuneración competitiva </p>
			<h2 class="Contenedor-Como-Trabajamos__Subtitulo"> Se un repartidor de Elica<span class="text-danger">! </span> </h2>
			<img src="assets/img/repartidor.png" alt="">
			<button class="Botones-Header Btn-Sign-Up"> <h2 class="Texto-Header" onclick="formularioRegistroRepartidores()"> Unete ahora </h2> </button>
		</section>
	`;
}

mostrarLanding();