let clientes = [
	{
		id: "cl1", 
		nombre: "Jeff",
		apellido: "Bezos",
		residencia: "Col. Palmira",
		ciudad: "Tegucigalpa",
		email: "jperez@gmail.com",
		telefono: 99889988,
		password: "asd456",
		carrito: [
			"prod1",
		],
		productosComprados: [
			"prod1"
		],
		imagen: "assets/img/1.webp"	
	},
	{
		id: "cl2", 
		nombre: "Cristiano",
		apellido: "Ronaldo",
		residencia: "Col. Kennedy",
		ciudad: "Tegucigalpa",
		email: "mario@gmail.com",
		telefono: 99889933,
		password: "asd4562",
		carrito: [
			"prod1",
			"prod2"
		],
		productosComprados: [
			"prod1"
		],
		imagen: "assets/img/1.webp" 	
	},
	{
		id: "cl1", 
		nombre: "Lionel",
		apellido: "Messi",
		residencia: "Col. Palmira",
		ciudad: "Tegucigalpa",
		email: "jperez@gmail.com",
		telefono: 99889988,
		password: "asd456",
		carrito: [
			"prod1",
		],
		productosComprados: [
			"prod2"
		],
		imagen: "assets/img/1.webp"	
	}
];

let productos = [
	{
		id: "prod1",
		nombreProducto: "Pastel de fresa",
		idEmpresaPerteneciente: "emp2",
		categoria: "Postres",
		descripcion: "lorem ipsum dolor sit amem",
		precio: 15, 
		descuento: 10,
		valoracion: 5,
		imagenPortada: "assets/img/banner.jpg",
		imagenPerfil: "assets/img/1.webp"
	},
	{
		id: "prod2",
		nombreProducto: "Pollo frito",
		idEmpresaPerteneciente: "emp1",
		categoria: "Comida",
		descripcion: "lorem ipsum dolor sit amem",
		precio: 150, 
		descuento: 10,
		valoracion: 3,
		imagenPortada: "assets/img/banner.jpg",
		imagenPerfil: "assets/img/1.webp",
	}
];

let empresas = [
	{
		id: "emp1",
		nombre: "Kentuchy",
		descripcion: "Lorem Ipsum dolor sit",
		email: "kentuchy@kfc.com",
		telefono: 99889922,
		redesSociales:[
			"facebook/kfc.com",
			"instagram/kfc.com"
		], 
		valoracion: 4,
		productosEmpresa: [
			"prod1"
		],
		imagenPortada: "assets/img/kfc.webp",
		imagenPerfil: "assets/img/1.webp"
	},
	{
		id: "emp2",
		nombre: "Churchs Chicken",
		descripcion: "Lorem Ipsum dolor sit",
		email: "Churchs@churches.com",
		telefono: 99889556,
		redesSociales:[
			"facebook/ch.com"
		], 
		valoracion: 5,
		productosEmpresa: [
			"prod1", "prod2"
		],
		imagenPortada: "assets/img/kfc.webp",
		imagenPerfil: "assets/img/1.webp"
	}
];

let administradores = [
	{
		id: "adm1", 
		nombre: "Steve",
		apellido: "Jobs",
		residencia: "Prados universitarios",
		ciudad: "Tegucigalpa",
		email: "jobs@apple.co",
		telefono: 99889900,
		password: "asd456s",
		imagen: "assets/img/1.webp"
	}
];

let repartidores = [
	{
		id: "rep1",
		nombre: "Nikola",
		apellido: "Tesla",
		telefono: 99009900,
		email: "oscar@gmail.com",
		ciudad: "Tegucigalpa",
		residencia: "Col. Carrizal",
		password: "123456",
		valoracion: 4,
		status: "Rechazado",
		disponibilidad: "disponible",
		ordenesEntregadas: [
			"ord2",
			"ord4",
			"ord4"
		],
		imagen: "assets/img/1.webp"
	},
	{
		id: "rep2",
		nombre: "Usain",
		apellido: "Bolt",
		telefono: 99009332,
		email: "jaime@gmail.com",
		ciudad: "Tegucigalpa",
		residencia: "Col. 3 de mayo",
		password: "1234562",
		valoracion: 2,
		status: "Aceptado",
		disponibilidad: "no disponible",
		ordenesEntregadas: [
			"ord3",
			"ord2"
		],
		imagen: "assets/img/1.webp"
	},
	{
		id: "rep3",
		nombre: "Ada",
		apellido: "Lovalace",
		telefono: 88332211,
		email: "jairo@gmail.com",
		ciudad: "Tegucigalpa",
		residencia: "Col. Quezada",
		password: "dfssa123456",
		valoracion: 3,
		status: "Pendiente",
		disponibilidad: "en proceso",
		ordenesEntregadas: [
			"ord4",
			"ord1"
		],
		imagen: "assets/img/1.webp"
	},
	{
		id: "rep4",
		nombre: "Carlo Yair",
		apellido: "Costly",
		telefono: 99009900,
		email: "oscar@gmail.com",
		ciudad: "Tegucigalpa",
		residencia: "Col. Carrizal",
		password: "123456",
		valoracion: 4,
		status: "Rechazado",
		disponibilidad: "disponible",
		ordenesEntregadas: [
			"ord3",
			"ord1"
		],
		imagen: "assets/img/1.webp"
	},
	{
		id: "rep5",
		nombre: "Isaac",
		apellido: "Newton",
		telefono: 99009332,
		email: "jaime@gmail.com",
		ciudad: "Tegucigalpa",
		residencia: "Col. 3 de mayo",
		password: "1234562",
		valoracion: 2,
		status: "Aceptado",
		disponibilidad: "no disponible",
		ordenesEntregadas: [
			"ord2"
		],
		imagen: "assets/img/1.webp"
	},
	{
		id: "rep6",
		nombre: "Pierre Emeric",
		apellido: "Aubameyang",
		telefono: 88332211,
		email: "jairo@gmail.com",
		ciudad: "Tegucigalpa",
		residencia: "Col. Quezada",
		password: "dfssa123456",
		valoracion: 3,
		status: "Pendiente",
		disponibilidad: "en proceso",
		ordenesEntregadas: [
			"ord2",
			"ord4"
		],
		imagen: "assets/img/1.webp"
	}	
];

let ordenes = [
	{
		id: "ord1",
		pedido: "Pastel de fresas",
		descripcion: "lorem ipsum",
		disponibilidad: "Entregada",
		status: "Asignada",
		statusRepartidor: "Tomada", 
		cliente: "Lionel Messi",
		repartidor: "rep4",
		cantidad: 2,
		precio: 120,
		direccion: "Col. Quezada",
		imagen: 'assets/img/1.webp' 
	},
	{
		id: "ord2",
		pedido: "Pastel de queso",
		descripcion: "lorem ipsum",
		disponibilidad: "No entregada",
		status: "No asignada",
		statusRepartidor: "No tomada",
		cliente: "Cristiano Ronaldo",
		repartidor: "rep2",
		cantidad: 5,
		precio: 35,
		direccion: "Col. Quezada",
		imagen: 'assets/img/1.webp' 
	},
	{
		id: "ord3",
		pedido: "Pizza de 100 pesitos",
		descripcion: "lorem ipsum dolor sit",
		disponibilidad: "En el origen",
		status: "Asignada",
		statusRepartidor: "Tomada",
		cliente: "Jeff Bezos",
		repartidor: "rep1",
		cantidad: 1,
		precio: 100,
		direccion: "Col. Quezada",
		imagen: 'assets/img/1.webp' 
	},
	{
		id: "ord4",
		pedido: "Torta cubana",
		descripcion: "lorem ipsum dolor sit",
		disponibilidad: "En camino",
		status: "Asignada",
		statusRepartidor: "Tomada",
		cliente: "Jeff Bezos",
		repartidor: "rep5",
		cantidad: 6,
		precio: 60,
		direccion: "Col. Quezada",
		imagen: 'assets/img/1.webp' 
	},
	{
		id: "ord5",
		pedido: "Tacos",
		descripcion: "lorem ipsum",
		disponibilidad: "No entregada",
		status: "No asignada",
		statusRepartidor: "Tomada",
		cliente: "Cristiano Ronaldo",
		repartidor: "rep3",
		cantidad: 5,
		precio: 30,
		direccion: "Col. Quezada",
		imagen: 'assets/img/1.webp' 
	}  
];

const status = [
	{
		// Repartidor
		stats: 'Aceptado',
		statsColor: '#35CF00'
	},
	{
		// Repartidor
		stats: 'Rechazado',
		statsColor: 'red'
	},
	{
		// Repartidor
		stats: 'Pendiente',
		statsColor: 'orange'
	},
	{
		// Ordenes -> Administrador
		stats: 'Asignada',
		statsColor: '#35CF00' 
	}, 
	{
		// Ordenes -> Administrador
		stats: 'No asignada',
		statsColor: 'red' 
	},
	{
		// Ordenes -> Administrador
		stats: 'Tomada',
		statsColor: '#35CF00' 
	},
	{
		// Ordenes -> Administrador
		stats: 'No tomada',
		statsColor: 'red' 
	},
	{
		// Ordenes
		stats: 'Entregada',
		statsColor: '#35CF00' 
	},
	{
		// Ordenes
		stats: 'No entregada',
		statsColor: 'red' 
	},
	{
		// Ordenes
		stats: "En el origen",
		statsColor: "skyblue"
	},
	{
		// Ordenes
		stats: "En camino",
		statsColor: "orange"
	}
];

// SUPONGAMOS QUE EL REPARTIDOR QUE USA LA APP ES EL REPARTIDOR CON ID rep4
let repartidorActual = "rep4";

function generarPerfil(){
	// document.getElementById("Menu-Opciones-Principal").classList.remove('Lista-Opciones-Show');	
	document.getElementById("Contenedor-Principal-Formulario").classList.toggle('Contenedor-Formulario-Show');
}

function rellenarFormularioUsuario(){
	document.getElementById('Contenedor-Principal-Formulario').innerHTML = '';
	const infoRepartidor = repartidores.find(item => repartidorActual === item.id);
		if(infoRepartidor){
			document.getElementById('Contenedor-Principal-Formulario').innerHTML += `
				<div class="Contenedor-Imagen-Formulario">
					<img src="assets/img/1.webp" id="Imagen-Formulario">
				</div>
				<a href="#"> <h2 class="Editar"> Cambiar Foto </h2> </a>
						
				<div class="mb-3">
			  		<div class="Formulario-Contenedor-Texto">
						<label for=""> Nombre </label>
						<a href="#" onclick="editarNombre()"> <h2 class="Editar"> Editar </h2> </a>
					</div>
					<input readonly type="text" name="" id="Input-Editar-Nombre" placeholder="${infoRepartidor.nombre} ${infoRepartidor.apellido}">
							
					<div class="Formulario-Contenedor-Texto">
						<label for=""> Email </label>
						<a href="#" onclick="editarEmail()"> <h2 class="Editar"> Editar </h2> </a>
					</div>
					<input readonly type="email" name="" id="Input-Editar-Email"  placeholder="${infoRepartidor.email}">
							
					<div class="Formulario-Contenedor-Texto">
						<label for=""> Telefono </label>
						<a href="#" onclick="editarTelefono()"> <h2 class="Editar"> Editar </h2> </a>
					</div>
					<input readonly type="text" id="Input-Editar-Telefono" name="" placeholder="${infoRepartidor.telefono}">
							
					<div class="Formulario-Contenedor-Texto">
						<label for=""> Password </label>
						<a href="#" onclick="editarPassword()"> <h2 class="Editar"> Editar </h2> </a>
					</div>
					<input readonly type="Password" id="Input-Editar-Password" name="" placeholder="${infoRepartidor.password}">
							
					<div class="Formulario-Contenedor-Texto">
						<button class="btn-success Btn-Save" id="Btn-Guardar-Cambios-Perfil"> Save </button> 	
					</div>
				</div>
			`;
		}	
}

rellenarFormularioUsuario();

function activarMenu(){
	// document.getElementById("Contenedor-Principal-Formulario").classList.remove('Contenedor-Formulario-Show');
	document.getElementById("Menu-Opciones-Principal").classList.toggle('Lista-Opciones-Show');
	rellenarFormularioUsuario();
}

function mostrarOrdenes(){
	document.getElementById('Contenido-Principal-Cards').innerHTML = '';
	
	ordenes.forEach(orden => {
		const statusOrden = status.find(item => orden.statusRepartidor === item.stats);
		const statusPedido = status.find(item => orden.disponibilidad === item.stats);
		const nombreRepartidor = repartidores.find(item => orden.repartidor === item.id);

		if (orden.statusRepartidor !== 'Tomada') {
			document.getElementById('Contenido-Principal-Cards').innerHTML += `
				<div class="Contenedor-Cards">
					<div class="Card">
						<div class="Card-Contenido-1 Card-Imagen-Asignar-Productos" >
							<img src="${orden.imagen}" id="Imagen-Usuario">
							<h2 class="Card-Texto Card-Texto-Estado"> <span style="color: ${statusOrden.statsColor}"> ● </span> ${orden.statusRepartidor} </h2>
						</div>
						<div class="Card-Contenido-2">
							<h2 class="Card-Texto Card-Texto-Contenido Card-Texto-Nombre"> ${orden.pedido} </h2>
							<h2 class="Card-Texto Card-Texto-Contenido Card-Texto-Descripcion"> ${orden.descripcion} </h2>
							<h2 class="Card-Texto Card-Texto-Contenido Card-Texto-Direccion"> ${orden.direccion} </h2>
							<h2 class="Card-Texto Card-Texto-Contenido Card-Texto-Pedido-Por"> Pedido por: ${orden.cliente} </h2>
							<h2 class="Card-Texto Card-Texto-Contenido Card-Texto-Repartido-Por"> Repartido por: ${nombreRepartidor.nombre} ${nombreRepartidor.apellido} </h2>
							<div class="Card-Contenedor-Cantidad">
								<h2 class="Card-Texto Contenedor-Cantidad-Numero"> ${orden.cantidad} </h2>
								<h2 class="Card-Texto Contenedor-Cantidad-Texto"> Cantidad </h2>
							</div>
						</div>
						<div class="Card-Contenido-3">
							<h2 class="Card-Texto Card-Texto-Titulo-Contenido-3"> Precio </h2>
							<h2 class="Card-Texto Card-Texto-Contenido-3"> ${orden.precio}L </h2>
							<h2 class="Card-Texto Card-Texto-Estado"> <span style="color: ${statusPedido.statsColor}"> ● </span> ${orden.disponibilidad} </h2>
						</div>
					</div>
					<div class="Cards-Botones">
						
					</div>
				</div>`;
		}else{
			document.getElementById('Contenido-Principal-Cards').innerHTML += `
				<div class="Contenedor-Cards">
					<div class="Card">
						<div class="Card-Contenido-1 Card-Imagen-Asignar-Productos" >
							<img src="${orden.imagen}" id="Imagen-Usuario">
							<h2 class="Card-Texto Card-Texto-Estado"> <span style="color: ${statusOrden.statsColor}"> ● </span> ${orden.statusRepartidor} </h2>
						</div>
						<div class="Card-Contenido-2">
							<h2 class="Card-Texto Card-Texto-Contenido Card-Texto-Nombre"> ${orden.pedido} </h2>
							<h2 class="Card-Texto Card-Texto-Contenido Card-Texto-Descripcion"> ${orden.descripcion} </h2>
							<h2 class="Card-Texto Card-Texto-Contenido Card-Texto-Direccion"> ${orden.direccion} </h2>
							<h2 class="Card-Texto Card-Texto-Contenido Card-Texto-Pedido-Por"> Pedido por: ${orden.cliente} </h2>
							<h2 class="Card-Texto Card-Texto-Contenido Card-Texto-Repartido-Por"> Repartido por: ${nombreRepartidor.nombre} ${nombreRepartidor.apellido} </h2>
							<div class="Card-Contenedor-Cantidad">
								<h2 class="Card-Texto Contenedor-Cantidad-Numero"> ${orden.cantidad} </h2>
								<h2 class="Card-Texto Contenedor-Cantidad-Texto"> Cantidad </h2>
							</div>
						</div>
						<div class="Card-Contenido-3">
							<h2 class="Card-Texto Card-Texto-Titulo-Contenido-3"> Precio </h2>
							<h2 class="Card-Texto Card-Texto-Contenido-3"> ${orden.precio}L </h2>
							<h2 class="Card-Texto Card-Texto-Estado"> <span style="color: ${statusPedido.statsColor}"> ● </span> ${orden.disponibilidad} </h2>
						</div>
					</div>
					<div class="Cards-Botones">
						<!-- <button class="btn btn-success rounded-0 Boton-Cards" onclick="asignarRepartidor()" id="Btn-Asignar-Repartidor"> <h2 class="Card-Texto Card-Texto-Boton font-weight-bold"> ASIGNAR A </h2> </button> -->
					</div>
				</div>`;	
		}
	})
}

function mostrarMisOrdenes(){
	document.getElementById('Contenido-Principal-Cards').innerHTML = '';

	const ordenesRepartidor = repartidores.find(repartidor => repartidorActual === repartidor.id);
	(ordenesRepartidor.ordenesEntregadas).forEach(orden => {
		const misOrdenesRealizadas = ordenes.find(item => item.id === orden); // Retorna un JSON
		const statusOrden = status.find(item1 => misOrdenesRealizadas.statusRepartidor === item1.stats); 
		const statusPedido = status.find(item2 => misOrdenesRealizadas.disponibilidad === item2.stats);
		// const nombreRepartidor = repartidores.find(item3 => orden.repartidor === item.id);

		document.getElementById('Contenido-Principal-Cards').innerHTML += `
			<div class="Contenedor-Cards">
				<div class="Card">
					<div class="Card-Contenido-1 Card-Imagen-Asignar-Productos" >
						<img src="${misOrdenesRealizadas.imagen}" id="Imagen-Usuario">
						<h2 class="Card-Texto Card-Texto-Estado"> <span style="color: ${statusOrden.statsColor}"> ● </span> ${misOrdenesRealizadas.statusRepartidor} </h2>
					</div>
					<div class="Card-Contenido-2">
						<h2 class="Card-Texto Card-Texto-Contenido Card-Texto-Nombre"> ${misOrdenesRealizadas.pedido} </h2>
						<h2 class="Card-Texto Card-Texto-Contenido Card-Texto-Descripcion"> ${misOrdenesRealizadas.descripcion} </h2>
						<h2 class="Card-Texto Card-Texto-Contenido Card-Texto-Direccion"> ${misOrdenesRealizadas.direccion} </h2>
						<h2 class="Card-Texto Card-Texto-Contenido Card-Texto-Pedido-Por"> Pedido por: ${misOrdenesRealizadas.cliente} </h2>
						<h2 class="Card-Texto Card-Texto-Contenido Card-Texto-Repartido-Por"> Repartido por: ${ordenesRepartidor.nombre} ${ordenesRepartidor.apellido} </h2>
						<div class="Card-Contenedor-Cantidad">
							<h2 class="Card-Texto Contenedor-Cantidad-Numero"> ${misOrdenesRealizadas.cantidad} </h2>
							<h2 class="Card-Texto Contenedor-Cantidad-Texto"> Cantidad </h2>
						</div>
					</div>
					<div class="Card-Contenido-3">
						<h2 class="Card-Texto Card-Texto-Titulo-Contenido-3"> Precio </h2>
						<h2 class="Card-Texto Card-Texto-Contenido-3"> ${misOrdenesRealizadas.precio}L </h2>
						<h2 class="Card-Texto Card-Texto-Estado"> <span style="color: ${statusPedido.statsColor}"> ● </span> ${misOrdenesRealizadas.disponibilidad} </h2>
					</div>
				</div>
				<div class="Cards-Botones">
						
				</div>
			</div>
		`;
	});
}

function ordenesDisponibles(){
	document.getElementById('Contenido-Principal-Cards').innerHTML = '';
	const ordenesNoTomadas = ordenes.filter(orden => orden.statusRepartidor === "No tomada");
	ordenesNoTomadas.forEach(ordenNoTomada => {
		const statusOrden = status.find(item => ordenNoTomada.statusRepartidor === item.stats);
		const statusPedido = status.find(item => ordenNoTomada.disponibilidad === item.stats);
		const nombreRepartidor = repartidores.find(item => ordenNoTomada.repartidor === item.id);

		document.getElementById('Contenido-Principal-Cards').innerHTML += `
			<div class="Contenedor-Cards">
				<div class="Card">
					<div class="Card-Contenido-1 Card-Imagen-Asignar-Productos" >
						<img src="${ordenNoTomada.imagen}" id="Imagen-Usuario">
						<h2 class="Card-Texto Card-Texto-Estado"> <span style="color: ${statusOrden.statsColor}"> ● </span> ${ordenNoTomada.statusRepartidor} </h2>
					</div>
					<div class="Card-Contenido-2">
						<h2 class="Card-Texto Card-Texto-Contenido Card-Texto-Nombre"> ${ordenNoTomada.pedido} </h2>
						<h2 class="Card-Texto Card-Texto-Contenido Card-Texto-Descripcion"> ${ordenNoTomada.descripcion} </h2>
						<h2 class="Card-Texto Card-Texto-Contenido Card-Texto-Direccion"> ${ordenNoTomada.direccion} </h2>
						<h2 class="Card-Texto Card-Texto-Contenido Card-Texto-Pedido-Por"> Pedido por: ${ordenNoTomada.cliente} </h2>
						<h2 class="Card-Texto Card-Texto-Contenido Card-Texto-Repartido-Por"> Repartido por: ${nombreRepartidor.nombre} ${nombreRepartidor.apellido} </h2>
						<div class="Card-Contenedor-Cantidad">
							<h2 class="Card-Texto Contenedor-Cantidad-Numero"> ${ordenNoTomada.cantidad} </h2>
							<h2 class="Card-Texto Contenedor-Cantidad-Texto"> Cantidad </h2>
						</div>
					</div>
					<div class="Card-Contenido-3">
						<h2 class="Card-Texto Card-Texto-Titulo-Contenido-3"> Precio </h2>
						<h2 class="Card-Texto Card-Texto-Contenido-3"> ${ordenNoTomada.precio}L </h2>
						<h2 class="Card-Texto Card-Texto-Estado"> <span style="color: ${statusPedido.statsColor}"> ● </span> ${ordenNoTomada.disponibilidad} </h2>
					</div>
				</div>
				<div class="Cards-Botones">
						
				</div>
			</div>
		`;
	})
}

function ordenesTomadasSinAsignar(){
	document.getElementById('Contenido-Principal-Cards').innerHTML = '';
	const ordenesTomadas = ordenes.filter(orden => orden.statusRepartidor === "Tomada");
	ordenesTomadas.forEach(ordenTomada => {
		if (ordenTomada.disponibilidad === "No entregada") {
			const statusOrden = status.find(item => ordenTomada.statusRepartidor === item.stats);
			const statusPedido = status.find(item => ordenTomada.disponibilidad === item.stats);
			const nombreRepartidor = repartidores.find(item => ordenTomada.repartidor === item.id);

			document.getElementById('Contenido-Principal-Cards').innerHTML += `
				<div class="Contenedor-Cards">
					<div class="Card">
						<div class="Card-Contenido-1 Card-Imagen-Asignar-Productos" >
							<img src="${ordenTomada.imagen}" id="Imagen-Usuario">
							<h2 class="Card-Texto Card-Texto-Estado"> <span style="color: ${statusOrden.statsColor}"> ● </span> ${ordenTomada.statusRepartidor} </h2>
						</div>
						<div class="Card-Contenido-2">
							<h2 class="Card-Texto Card-Texto-Contenido Card-Texto-Nombre"> ${ordenTomada.pedido} </h2>
							<h2 class="Card-Texto Card-Texto-Contenido Card-Texto-Descripcion"> ${ordenTomada.descripcion} </h2>
							<h2 class="Card-Texto Card-Texto-Contenido Card-Texto-Direccion"> ${ordenTomada.direccion} </h2>
							<h2 class="Card-Texto Card-Texto-Contenido Card-Texto-Pedido-Por"> Pedido por: ${ordenTomada.cliente} </h2>
							<h2 class="Card-Texto Card-Texto-Contenido Card-Texto-Repartido-Por"> Repartido por: ${nombreRepartidor.nombre} ${nombreRepartidor.apellido} </h2>
							<div class="Card-Contenedor-Cantidad">
								<h2 class="Card-Texto Contenedor-Cantidad-Numero"> ${ordenTomada.cantidad} </h2>
								<h2 class="Card-Texto Contenedor-Cantidad-Texto"> Cantidad </h2>
							</div>
						</div>
						<div class="Card-Contenido-3">
							<h2 class="Card-Texto Card-Texto-Titulo-Contenido-3"> Precio </h2>
							<h2 class="Card-Texto Card-Texto-Contenido-3"> ${ordenTomada.precio}L </h2>
							<h2 class="Card-Texto Card-Texto-Estado"> <span style="color: ${statusPedido.statsColor}"> ● </span> ${ordenTomada.disponibilidad} </h2>
						</div>
					</div>
					<div class="Cards-Botones">
							
					</div>
				</div>
			`;
		}
	})
}

function editarNombre(){
	document.getElementById("Input-Editar-Nombre").removeAttribute("readonly");
}

function editarEmail(){
	document.getElementById("Input-Editar-Email").removeAttribute("readonly");
}

function editarTelefono(){
	document.getElementById("Input-Editar-Telefono").removeAttribute("readonly");
}

function editarPassword(){
	document.getElementById("Input-Editar-Password").removeAttribute("readonly");
}

const guardarNuevosCambios = document.getElementById('Btn-Guardar-Cambios-Perfil');
guardarNuevosCambios.addEventListener('click', () => {
	document.getElementById("Input-Editar-Nombre").setAttribute("readonly", true);
	document.getElementById("Input-Editar-Email").setAttribute("readonly", true);
	document.getElementById("Input-Editar-Telefono").setAttribute("readonly", true);
	document.getElementById("Input-Editar-Password").setAttribute("readonly", true);
});

// Funcionalidad del boton editar de los form en editar empresa
function editarNombreEmpresa(){
	document.getElementById("Input-Editar-Nombre-Empresa").removeAttribute("readonly");
}

function editarDescripcionEmpresa(){
	document.getElementById("Input-Editar-Descripcion-Empresa").removeAttribute("readonly");
}

function editarEmailEmpresa(){
	document.getElementById("Input-Editar-Email-Empresa").removeAttribute("readonly");
}

function editarTelefonoEmpresa(){
	document.getElementById("Input-Editar-Telefono-Empresa").removeAttribute("readonly");
}

function editarRedesEmpresa(){
	document.getElementById("Input-Editar-Redes-Empresa").removeAttribute("readonly");
}

function guardarNuevosCambiosEmpresa(){
	document.getElementById("Input-Editar-Nombre-Empresa").setAttribute("readonly", true);
	document.getElementById("Input-Editar-Descripcion-Empresa").setAttribute("readonly", true);
	document.getElementById("Input-Editar-Email-Empresa").setAttribute("readonly", true);
	document.getElementById("Input-Editar-Telefono-Empresa").setAttribute("readonly", true);
	document.getElementById("Input-Editar-Redes-Empresa").setAttribute("readonly", true);
}

// Editar Informacion productos formulario
function editarNombreEmpresaProducto(){
	document.getElementById("Input-Editar-Nombre-Empresa-Producto").removeAttribute("readonly");
}

function editarNombreProducto(){
	document.getElementById("Input-Editar-Nombre-Producto").removeAttribute("readonly");
}

function editarCategoriaProducto(){
	document.getElementById("Input-Editar-Categoria-Producto").removeAttribute("readonly");
}

function editarDescripcionProducto(){
	document.getElementById("Input-Editar-Descripcion-Producto").removeAttribute("readonly");
}

function editarPrecioProducto(){
	document.getElementById("Input-Editar-Precio-Producto").removeAttribute("readonly");
}

function editarDescuentoProducto(){
	document.getElementById("Input-Editar-Descuento-Producto").removeAttribute("readonly");
}

function guardarNuevosCambiosProductos(){
	document.getElementById("Input-Editar-Nombre-Empresa-Producto").setAttribute("readonly", true);
	document.getElementById("Input-Editar-Nombre-Producto").setAttribute("readonly", true);
	document.getElementById("Input-Editar-Categoria-Producto").setAttribute("readonly", true);
	document.getElementById("Input-Editar-Descripcion-Producto").setAttribute("readonly", true);
	document.getElementById("Input-Editar-Precio-Producto").setAttribute("readonly", true);
	document.getElementById("Input-Editar-Descuento-Producto").setAttribute("readonly", true);
}