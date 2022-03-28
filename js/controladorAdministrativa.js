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
		nombre: "Pastel de fresa",
		empresa: "emp2",
		categoria: "Postres",
		descripcion: "lorem ipsum dolor sit amem",
		precio: 15, 
		descuento: 10,
		valoracion: 5,
		imagenPerfil: "assets/img/1.webp"
	},
	{
		id: "prod2",
		nombre: "Pollo frito",
		empresa: "emp1",
		categoria: "Comida",
		descripcion: "lorem ipsum dolor sit amem",
		precio: 150, 
		descuento: 10,
		valoracion: 3,
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
		disponibilidad: "Disponible",
		ordenesEntregadas: [
			"prod1",
			"prod2"
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
		disponibilidad: "No disponible",
		ordenesEntregadas: [
			"prod2"
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
		disponibilidad: "En proceso",
		ordenesEntregadas: [
			"prod1"
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
		disponibilidad: "Disponible",
		ordenesEntregadas: [
			"prod1",
			"prod2"
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
		disponibilidad: "No disponible",
		ordenesEntregadas: [
			"prod2"
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
		disponibilidad: "En proceso",
		ordenesEntregadas: [
			"prod1"
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
		cantidad: 5,
		precio: 20,
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
		precio: 20,
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
		cliente: "Lionel Messi",
		repartidor: "rep1",
		cantidad: 5,
		precio: 20,
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
		cantidad: 5,
		precio: 20,
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
		// Repartidor -> Disponibilidad
		stats: 'Disponible',
		statsColor: '#35CF00'
	},
	{
		// Repartidor -> Disponibilidad
		stats: 'No disponible',
		statsColor: 'red'
	},
	{
		// Repartidor -> Disponibilidad
		stats: 'En proceso',
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

function generarPerfil(){
	// document.getElementById("Menu-Opciones-Principal").classList.remove('Lista-Opciones-Show');	
	document.getElementById("Contenedor-Principal-Formulario").classList.toggle('Contenedor-Formulario-Show');
}

function rellenarFormularioUsuario(){
	administradores.forEach(administrador => {
		document.getElementById('Contenedor-Principal-Formulario').innerHTML = '';
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
				<input readonly type="text" name="" id="Input-Editar-Nombre" placeholder="${administrador.nombre}">
						
				<div class="Formulario-Contenedor-Texto">
					<label for=""> Email </label>
					<a href="#" onclick="editarEmail()"> <h2 class="Editar"> Editar </h2> </a>
				</div>
				<input readonly type="email" name="" id="Input-Editar-Email"  placeholder="${administrador.email}">
						
				<div class="Formulario-Contenedor-Texto">
					<label for=""> Telefono </label>
					<a href="#" onclick="editarTelefono()"> <h2 class="Editar"> Editar </h2> </a>
				</div>
				<input readonly type="text" id="Input-Editar-Telefono" name="" placeholder="${administrador.telefono}">
						
				<div class="Formulario-Contenedor-Texto">
					<label for=""> Password </label>
					<a href="#" onclick="editarPassword()"> <h2 class="Editar"> Editar </h2> </a>
				</div>
				<input readonly type="Password" id="Input-Editar-Password" name="" placeholder="${administrador.password}">
						
				<div class="Formulario-Contenedor-Texto">
					<button class="btn-success Btn-Save" id="Btn-Guardar-Cambios-Perfil"> Save </button> 	
				</div>
			</div>
		`;
	});
}

rellenarFormularioUsuario();

function activarMenu(){
	// document.getElementById("Contenedor-Principal-Formulario").classList.remove('Contenedor-Formulario-Show');
	document.getElementById("Menu-Opciones-Principal").classList.toggle('Lista-Opciones-Show');
	rellenarFormularioUsuario();
}

// Funcion para mostrar las cards de los repartidores
function mostrarRepartidores(){
	document.getElementById("Contenido-Principal-Cards").innerHTML = '';
	repartidores.forEach(repartidor => {
		const statusRepartidor = status.find(item => repartidor.status == item.stats);
		if(repartidor.status === 'Pendiente') {
			document.getElementById("Contenido-Principal-Cards").innerHTML += `
				<div class="Contenedor-Cards">
					<div class="Card">
						<div class="Card-Contenido-1" >
							<img src="assets/img/1.webp" class="Imagen-Usuario">
							<h2 class="Card-Texto Card-Texto-Estado"> <span style="color: ${statusRepartidor.statsColor};"> ● </span> ${repartidor.status} </h2>
						</div>
						<div class="Card-Contenido-2">
							<h2 class="Card-Texto Card-Texto-Contenido-2 Card-Texto-Nombre"> ${repartidor.nombre} ${repartidor.apellido}</h2>
							<h2 class="Card-Texto Card-Texto-Contenido-2 Card-Texto-Email"> ${repartidor.email} </h2>
							<h2 class="Card-Texto Card-Texto-Contenido-2 Card-Texto-Residencia"> ${repartidor.residencia} </h2>
							<h2 class="Card-Texto Card-Texto-Contenido-2 Card-Texto-Telefono"> ${repartidor.telefono} </h2>
							<h2 class="Card-Texto Card-Texto-Contenido-2 Card-Texto-Total"> Total Ordenes Entregadas: ${(repartidor.ordenesEntregadas).length}</h2>
						</div>
						<div class="Card-Contenido-3">
							<h2 class="Card-Texto Card-Texto-Titulo-Contenido-3"> Calificacion </h2>
							<h2 class="Card-Texto Card-Texto-Contenido-3"> ${repartidor.valoracion} </h2>
						</div>
					</div>
					<div class="Cards-Botones">
						<button class="btn btn-danger rounded-0 Boton-Cards"> <h2 class="Card-Texto Card-Texto-Boton"> RECHAZAR </h2> </button>
						<button class="btn btn-success rounded-0 Boton-Cards"> <h2 class="Card-Texto Card-Texto-Boton"> ACEPTAR </h2> </button>
					</div>
				</div>`;	
		} else{
			document.getElementById("Contenido-Principal-Cards").innerHTML += `
				<div class="Contenedor-Cards">
					<div class="Card">
						<div class="Card-Contenido-1" >
							<img src="assets/img/1.webp" class="Imagen-Usuario">
							<h2 class="Card-Texto Card-Texto-Estado"> <span style="color: ${statusRepartidor.statsColor};"> ● </span> ${repartidor.status} </h2>
						</div>
						<div class="Card-Contenido-2">
							<h2 class="Card-Texto Card-Texto-Contenido-2 Card-Texto-Nombre"> ${repartidor.nombre} ${repartidor.apellido} </h2>
							<h2 class="Card-Texto Card-Texto-Contenido-2 Card-Texto-Email"> ${repartidor.email} </h2>
							<h2 class="Card-Texto Card-Texto-Contenido-2 Card-Texto-Residencia"> ${repartidor.residencia} </h2>
							<h2 class="Card-Texto Card-Texto-Contenido-2 Card-Texto-Telefono"> ${repartidor.telefono} </h2>
							<h2 class="Card-Texto Card-Texto-Contenido-2 Card-Texto-Total"> Total Ordenes Entregadas: ${(repartidor.ordenesEntregadas).length}</h2>
						</div>
						<div class="Card-Contenido-3">
							<h2 class="Card-Texto Card-Texto-Titulo-Contenido-3"> Calificacion </h2>
							<h2 class="Card-Texto Card-Texto-Contenido-3"> ${repartidor.valoracion} </h2>
						</div>
					</div>
				</div>`;
		}
	})
}

//Funcion para mostrar las cards de las empresas
function mostrarEmpresas(){
	document.getElementById('Contenido-Principal-Cards').innerHTML = '';

	empresas.forEach(empresa => {
		let estrellas = '';
		for(let i = 0; i < (empresa.valoracion); i++){
			estrellas += `<i class="fa-solid fa-star text-success"></i>`;
		}

		for(let j = 0; j < (5 - empresa.valoracion); j++){
			estrellas += `<i class="fa-regular fa-star text-danger"></i>`;
		}

		document.getElementById('Contenido-Principal-Cards').innerHTML += `
			<div class="card Card-Empresas m-1" style="width: 20rem;">
				<img class="card-img-top Card-Banner-Empresa img-fluid" src="${empresa.imagenPortada}" alt="Imagen Banner">
				<div class="card-body Card-Contenido-Texto-Empresa p-0 ml-1 mt-2 mb-1">
					<h2 class="Card-Texto Card-Texto-Nombre text-success"> ${empresa.nombre} </h2>
					<h2 class="Card-Texto Card-Texto-Residencia"> ${empresa.descripcion} </h2>
					<h2 class="Card-Texto Card-Texto-Telefono"> ${estrellas} </h2>
				</div>
				<div class="card-body-2 Card-Contenido-Imagen-Empresa p-0 mt-2 mb-1 mr-2 ml-2">
					<img src="${empresa.imagenPerfil}" id="Imagen-Miniatura-Empresa">		
				</div>
			</div>
		`;
	})
}

function mostrarOrdenes(){
	document.getElementById('Contenido-Principal-Cards').innerHTML = '';
	
	ordenes.forEach(orden => {
		const statusOrden = status.find(item => orden.status === item.stats);
		const statusPedido = status.find(item => orden.disponibilidad === item.stats);
		const nombreRepartidor = repartidores.find(item => orden.repartidor === item.id);

		if (orden.status === 'Asignada') {
			document.getElementById('Contenido-Principal-Cards').innerHTML += `
				<div class="Contenedor-Cards">
					<div class="Card">
						<div class="Card-Contenido-1 Card-Imagen-Asignar-Productos" >
							<img src="${orden.imagen}" class="Imagen-Usuario">
							<h2 class="Card-Texto Card-Texto-Estado"> <span style="color: ${statusOrden.statsColor}"> ● </span> ${orden.status} </h2>
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
							<img src="${orden.imagen}" class="Imagen-Usuario">
							<h2 class="Card-Texto Card-Texto-Estado"> <span style="color: ${statusOrden.statsColor}"> ● </span> ${orden.status} </h2>
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
						<button class="btn btn-success rounded-0 Boton-Cards" onclick="asignarRepartidor()" id="Btn-Asignar-Repartidor"> <h2 class="Card-Texto Card-Texto-Boton font-weight-bold"> ASIGNAR A </h2> </button>
					</div>
				</div>`;	
		}
	})
}

function formularioEditarEmpresa(idEmpresa){
	const empresaFiltrada = empresas.find(empresa => empresa.id == idEmpresa);
	document.getElementById('Contenido-Principal-Cards').innerHTML = '';

	document.getElementById('Contenido-Principal-Cards').innerHTML = `
		<div class="Contenedor-Formulario-Editar-Agregar" id="Contenedor-Principal-Formulario-Editar-Empresa">
			<img src="${empresaFiltrada.imagenPortada}" class="Imagen-Portada-Editar-Agregar" id="Imagen-Portada-Formulario-Editar-Empresa">
			<img src="${empresaFiltrada.imagenPerfil}" class="Imagen-Perfil-Editar-Agregar" id="Imagen-Perfil-Formulario-Editar-Empresa">
			<a href="#" class="text-decoration-none"> <h2 class="Editar"> Cambiar Foto Perfil </h2> </a>
			<a href="#" class="text-decoration-none"> <h2 class="Editar"> Cambiar Foto Portada</h2> </a>
						
			<div class="Contenedor-Inputs-Editar-Agregar">
			  	<div class="Formulario-Contenedor-Texto">
					<label for=""> Nombre </label>
					<a href="#" onclick="editarNombreEmpresa()" class="text-decoration-none"> <h2 class="Editar"> Editar </h2> </a>
				</div>
				<input readonly type="text" name="" id="Input-Editar-Nombre-Empresa" placeholder="${empresaFiltrada.nombre}">
						
				<div class="Formulario-Contenedor-Texto">
					<label for=""> Descripcion </label>
					<a href="#" onclick="editarDescripcionEmpresa()" class="text-decoration-none"> <h2 class="Editar"> Editar </h2> </a>
				</div>
				<input readonly type="email" name="" id="Input-Editar-Descripcion-Empresa"  placeholder="${empresaFiltrada.descripcion}">

				<div class="Formulario-Contenedor-Texto">
					<label for=""> Email </label>
					<a href="#" onclick="editarEmailEmpresa()" class="text-decoration-none"> <h2 class="Editar"> Editar </h2> </a>
				</div>
				<input readonly type="email" name="" id="Input-Editar-Email-Empresa"  placeholder="${empresaFiltrada.email}">
							
				<div class="Formulario-Contenedor-Texto">
					<label for=""> Telefono </label>
					<a href="#" onclick="editarTelefonoEmpresa()" class="text-decoration-none"> <h2 class="Editar"> Editar </h2> </a>
				</div>
				<input readonly type="text" id="Input-Editar-Telefono-Empresa" name="" placeholder="${empresaFiltrada.telefono}">
							
				<div class="Formulario-Contenedor-Texto">
					<label for=""> Redes Sociales </label>
					<a href="#" onclick="editarRedesEmpresa()" class="text-decoration-none"> <h2 class="Editar"> Editar </h2> </a>
				</div>
				<textarea readonly id="Input-Editar-Redes-Empresa" class="border border-0"> ${empresaFiltrada.redesSociales} </textarea>
							
				<div class="Formulario-Contenedor-Texto">
					<button class="btn-success Btn-Save" id="Btn-Guardar-Cambios-Empresa" onclick="guardarNuevosCambiosEmpresa()"> Save </button> 	
				</div>
			</div>
		</div>`;
}

function editarEmpresa(){
	document.getElementById('Contenido-Principal-Cards').innerHTML = '';
	empresas.forEach(empresa => {
		let estrellas = '';
		for(let i = 0; i < (empresa.valoracion); i++){
			estrellas += `<i class="fa-solid fa-star text-success"></i>`;
		}

		for(let j = 0; j < (5 - empresa.valoracion); j++){
			estrellas += `<i class="fa-regular fa-star text-danger"></i>`;
		}

		document.getElementById('Contenido-Principal-Cards').innerHTML += `
		<div class="card Card-Empresas m-1" onclick="formularioEditarEmpresa('${empresa.id}')" id="Empresa-Para-Editar" style="width: 20rem;">
			<img class="card-img-top Card-Banner-Empresa img-fluid" src="${empresa.imagenPortada}" alt="Imagen Banner">
			<div class="card-body Card-Contenido-Texto-Empresa p-0 ml-1 mt-2 mb-1">
				<h2 class="Card-Texto Card-Texto-Nombre text-success"> ${empresa.nombre} </h2>
				<h2 class="Card-Texto Card-Texto-Residencia"> ${empresa.descripcion} </h2>
				<h2 class="Card-Texto Card-Texto-Telefono"> ${estrellas} </h2>
				<div class="Contenedor-Btn-Trash">
					<i class="fa-solid fa-trash text-danger fa-2x" onclick="haceAlgo()"></i>
				</div>
			</div>
			<div class="card-body-2 Card-Contenido-Imagen-Empresa p-0 mt-2 mb-1 mr-2 ml-2">
				<img src="${empresa.imagenPerfil}" id="Imagen-Miniatura-Empresa">		
			</div>
		</div>`;
	})
}

function haceAlgo(){
	console.log("Imprimir texto");
}

function formularioAgregarEmpresa(){
	document.getElementById('Contenido-Principal-Cards').innerHTML = '';
	document.getElementById('Contenido-Principal-Cards').innerHTML = `
		<div class="Contenedor-Formulario-Editar-Agregar" id="Contenedor-Principal-Formulario-Agregar-Editar">
			<img src="" class="Imagen-Portada-Editar-Agregar" id="Imagen-Portada-Formulario-Add-Empresa">
			<img src="" class="Imagen-Perfil-Editar-Agregar" id="Imagen-Perfil-Formulario-Add-Empresa">
			<a href="#" class="text-decoration-none"> <h2 class="Editar"> Cambiar Foto Perfil </h2> </a>
			<a href="#" class="text-decoration-none"> <h2 class="Editar"> Cambiar Foto Portada </h2> </a>
						
			<div class="Contenedor-Inputs-Editar-Agregar">
			  	<div class="Formulario-Contenedor-Texto">
					<label for=""> Nombre </label>
				</div>
				<input type="text" name="" id="Input-Agregar-Nombre-Empresa" placeholder="Nombre Empresa">
						
				<div class="Formulario-Contenedor-Texto">
					<label for=""> Descripcion </label>
				</div>
				<input type="text" name="" id="Input-Agregar-Descripcion-Empresa"  placeholder="Descripcion Empresa">

				<div class="Formulario-Contenedor-Texto">
					<label for=""> Email </label>
				</div>
				<input type="email" name="" id="Input-Agregar-Email-Empresa"  placeholder="Email">
							
				<div class="Formulario-Contenedor-Texto">
					<label for=""> Telefono </label>
				</div>
				<input type="text" id="Input-Agregar-Telefono-Empresa" name="">
							
				<div class="Formulario-Contenedor-Texto">
					<label for=""> Redes Sociales </label>
				</div>
				<textarea id="Input-Agregar-Redes-Empresa" class="border border-0" name=""> </textarea>
							
				<div class="Formulario-Contenedor-Texto">
					<button class="btn-success Btn-Save" id="Btn-Guardar-Cambios-Empresa-Agregada"> Save </button> 	
				</div>
			</div>
		</div>`;
}

function formularioAgregarProducto(){
	// Recorrer el JSON y validar si es agregar o editar producto
	document.getElementById('Contenido-Principal-Cards').innerHTML = '';
	document.getElementById('Contenido-Principal-Cards').innerHTML = `
		<div class="Contenedor-Formulario-Editar-Agregar" id="Contenedor-Principal-Formulario-Add-Producto">
			<img src="" class="Imagen-Portada-Editar-Agregar" id="Imagen-Portada-Formulario-Add-Producto">
			<a href="#" class="text-decoration-none"> <h2 class="Editar"> Cambiar foto de portada </h2> </a>
						
			<div class="Contenedor-Inputs-Editar-Agregar">
			  	<div class="Formulario-Contenedor-Texto">
					<label for="Input-Editar-Nombre-Empresa"> Nombre Empresa </label>
				</div>
				<input type="text" name="" id="Input-Editar-Nombre-Empresa" placeholder="Nombre Empresa">
				
				<div class="Formulario-Contenedor-Texto">
					<label for="Input-Editar-Nombre-Producto"> Nombre Producto </label>
				</div>
				<input type="text" name="" id="Input-Editar-Nombre-Pruducto" placeholder="Nombre Producto">		

				<div class="Formulario-Contenedor-Texto">
					<label for="Input-Editar-Nombre-Empresa"> Categoria Producto </label>
				</div>
				<input type="text" name="" id="Input-Editar-Categoria-Producto" placeholder="Categoria Producto">

				<div class="Formulario-Contenedor-Texto">
					<label for=""> Descripcion Producto </label>
				</div>
				<input type="text" name="" id="Input-Editar-Descripcion-Producto"  placeholder="Descripcion Producto">
							
				<div class="Formulario-Contenedor-Texto">
					<label for=""> Precio </label>
				</div>
				<input type="number" id="Input-Editar-Precio-Producto" name="">
							
				<div class="Formulario-Contenedor-Texto">
					<label for="Input-Editar-Descuento-Producto"> Descuento </label>
				</div>
				<input type="number" name="" id="Input-Editar-Nombre-Empresa" placeholder="Descuento">
							
				<div class="Formulario-Contenedor-Texto">
					<button class="btn-success Btn-Save" id="Btn-Guardar-Cambios-Perfil"> Save </button> 	
				</div>
			</div>
		</div>`;
}

function formularioEditarProducto(idProducto){
	// Recorrer el JSON y validar si es agregar o editar producto
	document.getElementById('Contenido-Principal-Cards').innerHTML = '';
	const productoFiltrado = productos.find(producto => producto.id == idProducto);
	const empresaPertenece = empresas.find(empresaFiltrada => empresaFiltrada.id === productoFiltrado.empresa);

	document.getElementById('Contenido-Principal-Cards').innerHTML = `
		<div class="Contenedor-Formulario-Editar-Agregar" id="Contenedor-Principal-Formulario-Editar-Producto">
			<img src="${productoFiltrado.imagenPerfil}" class="Imagen-Portada-Editar-Agregar" id="Imagen-Portada-Formulario-Editar-Producto">
			<a href="#" class="text-decoration-none"> <h2 class="Editar"> Cambiar foto de portada </h2> </a>
						
			<div class="Contenedor-Inputs-Editar-Agregar">
			  	<div class="Formulario-Contenedor-Texto">
					<label for="Input-Editar-Nombre-Empresa-Producto"> Nombre Empresa </label>
					<a href="#" onclick="editarNombreEmpresaProducto()" class="text-decoration-none"> <h2 class="Editar"> Editar </h2> </a>
				</div>
				<input readonly type="text" name="" id="Input-Editar-Nombre-Empresa-Producto" placeholder="${empresaPertenece.nombre}">
				
				<div class="Formulario-Contenedor-Texto">
					<label for="Input-Editar-Nombre-Producto"> Nombre Producto </label>
					<a href="#" onclick="editarNombreProducto()" class="text-decoration-none"> <h2 class="Editar"> Editar </h2> </a>
				</div>
				<input readonly type="text" name="" id="Input-Editar-Nombre-Producto" placeholder="${productoFiltrado.nombre}">		

				<div class="Formulario-Contenedor-Texto">
					<label for="Input-Editar-Categoria-Producto"> Categoria Producto </label>
					<a href="#" onclick="editarCategoriaProducto()" class="text-decoration-none"> <h2 class="Editar"> Editar </h2> </a>
				</div>
				<input readonly type="text" name="" id="Input-Editar-Categoria-Producto" placeholder="${productoFiltrado.categoria}">

				<div class="Formulario-Contenedor-Texto">
					<label for=""> Descripcion Producto </label>
					<a href="#" onclick="editarDescripcionProducto()" class="text-decoration-none"> <h2 class="Editar"> Editar </h2> </a>
				</div>
				<input readonly type="text" name="" id="Input-Editar-Descripcion-Producto"  placeholder="${productoFiltrado.descripcion}">
							
				<div class="Formulario-Contenedor-Texto">
					<label for=""> Precio </label>
					<a href="#" onclick="editarPrecioProducto()" class="text-decoration-none"> <h2 class="Editar"> Editar </h2> </a>
				</div>
				<input readonly type="number" id="Input-Editar-Precio-Producto" name="" placeholder="${productoFiltrado.precio}">
							
				<div class="Formulario-Contenedor-Texto">
					<label for="Input-Editar-Descuento-Producto"> Descuento </label>
					<a href="#" onclick="editarDescuentoProducto()" class="text-decoration-none"> <h2 class="Editar"> Editar </h2> </a>
				</div>
				<input readonly type="number" name="" id="Input-Editar-Descuento-Producto" placeholder="${productoFiltrado.descuento}">
							
				<div class="Formulario-Contenedor-Texto">
					<button class="btn-success Btn-Save" id="Btn-Guardar-Cambios-Producto" onclick="guardarNuevosCambiosProductos()"> Save </button> 	
				</div>
			</div>
		</div>`;
}

function mostrarProductos(){
	document.getElementById('Contenido-Principal-Cards').innerHTML = '';
	productos.forEach(producto => {
		let estrellas = '';
		for(let i = 0; i < (producto.valoracion); i++){
			estrellas += `<i class="fa-solid fa-star text-success"></i>`;
		}

		for(let j = 0; j < (5 - producto.valoracion); j++){
			estrellas += `<i class="fa-regular fa-star text-danger"></i>`;
		}

		const empresaPertenece = empresas.find(empresa => empresa.id === producto.empresa);

		document.getElementById('Contenido-Principal-Cards').innerHTML += `
			<div class="Contenedor-Cards">
				<div class="Card">
					<div class="Card-Contenido-1 Card-Imagen-Asignar-Productos" >
						<img src="${producto.imagenPerfil}" class="Imagen-Usuario">
						<h2 class="Card-Texto Card-Texto-Estado"> ${producto.categoria} </h2>
					</div>
					<div class="Card-Contenido-2">
						<h2 class="Card-Texto Card-Texto-Contenido Card-Texto-Nombre"> ${producto.nombre} </h2>
						<h2 class="Card-Texto Card-Texto-Contenido Card-Texto-Direccion"> ${empresaPertenece.nombre} </h2>
						<h2 class="Card-Texto Card-Texto-Contenido Card-Texto-Pedido-Por"> ${producto.descripcion} </h2>
						<div class="Card-Contenedor-Info-Extra">
							<div class="Card-Contenedor-Estrellas">
								<h2 class="Card-Texto Contenedor-Cantidad-Numero"> ${estrellas} </h2>
								<h2 class="Card-Texto Contenedor-Cantidad-Texto"> Calificacion </h2>
							</div>
							<div class="Card-Contenedor-Descuento">
								<h2 class="Card-Texto Contenedor-Cantidad-Numero"> ${producto.descuento}% </h2>
								<h2 class="Card-Texto Contenedor-Cantidad-Texto"> Descuento </h2>
							</div>
						</div>
					</div>
					<div class="Card-Contenido-3">
						<h2 class="Card-Texto Card-Texto-Titulo-Contenido-3"> Precio </h2>
						<h2 class="Card-Texto Card-Texto-Contenido-3"> ${producto.precio}L </h2>
					</div>
				</div>
			</div>
		`;
	})
}

function editarProductos(){
	document.getElementById('Contenido-Principal-Cards').innerHTML = '';
	productos.forEach(producto => {
		let estrellas = '';
		for(let i = 0; i < (producto.valoracion); i++){
			estrellas += `<i class="fa-solid fa-star text-success"></i>`;
		}

		for(let j = 0; j < (5 - producto.valoracion); j++){
			estrellas += `<i class="fa-regular fa-star text-danger"></i>`;
		}

		const empresaPertenece = empresas.find(empresa => empresa.id === producto.empresa);

		document.getElementById('Contenido-Principal-Cards').innerHTML += `
			<div class="Contenedor-Cards Contenedor-Cards-Productos">
				<div class="Card" onclick="formularioEditarProducto('${producto.id}')">
					<div class="Card-Contenido-1 Card-Imagen-Asignar-Productos" >
						<img src="${producto.imagenPerfil}" class="Imagen-Usuario">
						<h2 class="Card-Texto Card-Texto-Estado"> ${producto.categoria} </h2>
					</div>
					<div class="Card-Contenido-2">
						<h2 class="Card-Texto Card-Texto-Contenido Card-Texto-Nombre"> ${producto.nombre} </h2>
						<h2 class="Card-Texto Card-Texto-Contenido Card-Texto-Direccion"> ${empresaPertenece.nombre} </h2>
						<h2 class="Card-Texto Card-Texto-Contenido Card-Texto-Pedido-Por"> ${producto.descripcion} </h2>
						<div class="Card-Contenedor-Info-Extra">
							<div class="Card-Contenedor-Estrellas">
								<h2 class="Card-Texto Contenedor-Cantidad-Numero"> ${estrellas} </h2>
								<h2 class="Card-Texto Contenedor-Cantidad-Texto"> Calificacion </h2>
							</div>
							<div class="Card-Contenedor-Descuento">
								<h2 class="Card-Texto Contenedor-Cantidad-Numero"> ${producto.descuento}% </h2>
								<h2 class="Card-Texto Contenedor-Cantidad-Texto"> Descuento </h2>
							</div>
						</div>
					</div>
					<div class="Card-Contenido-3">
						<h2 class="Card-Texto Card-Texto-Titulo-Contenido-3"> Precio </h2>
						<h2 class="Card-Texto Card-Texto-Contenido-3"> ${producto.precio}L </h2>
						<div class="Contenedor-Btn-Trash">
							<i class="fa-solid fa-trash text-danger fa-2x" onclick="haceAlgo()"></i>
						</div>
					</div>
				</div>	
			</div>
		`;
	})
}

function asignarRepartidor(){
	document.getElementById('Contenido-Principal-Cards').innerHTML = '';
	repartidores.forEach(repartidor => {
		const statusRepartidor = status.find(item => repartidor.disponibilidad === item.stats);
		
		if (repartidor.disponibilidad === "Disponible") {		
			document.getElementById('Contenido-Principal-Cards').innerHTML = `
				<div class="Contenedor-Cards">
					<div class="Card">
						<div class="Card-Contenido-1" >
							<img src="${repartidor.imagen}" class="Imagen-Usuario">
							<h2 class="Card-Texto Card-Texto-Estado"> <span id="Status-Repartidor" style="color: ${statusRepartidor.statsColor};"> ● </span> ${repartidor.disponibilidad} </h2>
						</div>
						<div class="Card-Contenido-2">
							<h2 class="Card-Texto Card-Texto-Contenido Card-Texto-Nombre"> ${repartidor.nombre} </h2>
							<h2 class="Card-Texto Card-Texto-Contenido Card-Texto-Email"> ${repartidor.email} </h2>
							<h2 class="Card-Texto Card-Texto-Contenido Card-Texto-Residencia"> ${repartidor.residencia} </h2>
							<h2 class="Card-Texto Card-Texto-Contenido Card-Texto-Telefono"> ${repartidor.telefono} </h2>
							<h2 class="Card-Texto Card-Texto-Contenido Card-Texto-Total"> Total Ordenes Entregadas: ${(repartidor.ordenesEntregadas).length} </h2>
						</div>
						<div class="Card-Contenido-3">
							<h2 class="Card-Texto Card-Texto-Titulo-Contenido-3"> Calificacion </h2>
							<h2 class="Card-Texto Card-Texto-Contenido-3"> ${repartidor.valoracion} </h2>
						</div>
					</div>
					<div class="Cards-Botones">
						<button class="btn btn-primary rounded-0 Boton-Cards" id="Btn-Guardar-Cambios-Empresa"> <h2 class="Card-Texto Card-Texto-Boton"> ASIGNAR </h2> </button>
					</div>
				</div>`;
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

mostrarRepartidores();