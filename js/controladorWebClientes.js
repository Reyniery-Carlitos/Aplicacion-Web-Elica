let clientes = [
	{
		id: "cl1", 
		username: "Jeff Bezos",
		ciudad: "Tegucigalpa",
		email: "jperez@gmail.com",
		telefono: 99889988,
		password: "asd456",
		carrito: [
			"ord1"
		],
		imagen: "assets/img/1.webp"	
	},
	{
		id: "cl2", 
		username: "Cristiano Ronaldo",
		ciudad: "Tegucigalpa",
		email: "mario@gmail.com",
		telefono: 99889933,
		password: "asd4562",
		carrito: [
			"ord2",
			"ord5"
		],
		imagen: "assets/img/1.webp" 	
	},
	{
		id: "cl3", 
		username: "Lionel Messi",
		ciudad: "Tegucigalpa",
		email: "jperez@gmail.com",
		telefono: 99889988,
		password: "asd456",
		carrito: [
			"ord2",
			"ord3",
			"ord2"
		],
		imagen: "assets/img/1.webp"	
	}
];

let productos = [
	{
		id: "prod1",
		nombre: "Pastel de fresa",
		empresa: "emp2",
		categoria: "cat5",
		descripcion: "lorem ipsum dolor sit amem",
		precio: 15, 
		descuento: 10,
		valoracion: 5,
		imagenPortada: "assets/img/banner.jpg",
		imagenPerfil: "assets/img/1.webp",
	},
	{
		id: "prod2",
		nombre: "Pollo frito",
		empresa: "emp1",
		categoria: "cat1",
		descripcion: "lorem ipsum dolor sit amem",
		precio: 150, 
		descuento: 10,
		valoracion: 3,
		imagenPortada: "assets/img/banner.jpg",
		imagenPerfil: "assets/img/1.webp",
	},
	{
		id: "prod3",
		nombre: "Pastel de queso",
		empresa: "emp2",
		categoria: "cat5",
		descripcion: "lorem ipsum dolor sit amem",
		precio: 130, 
		descuento: 15,
		valoracion: 4,
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
			"prod2"
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
			"prod1", "prod3"
		],
		imagenPortada: "assets/img/kfc.webp",
		imagenPerfil: "assets/img/1.webp"
	}
];

let administradores = [
	{
		id: "adm1", 
		username: "Steve Jobs",
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
		username: "Nikola Tesla",
		telefono: 99009900,
		email: "oscar@gmail.com",
		ciudad: "Tegucigalpa",
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
		username: "Usain Bolt",
		telefono: 99009332,
		email: "jaime@gmail.com",
		ciudad: "Tegucigalpa",
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
		username: "Ada Lovalace",
		telefono: 88332211,
		email: "jairo@gmail.com",
		ciudad: "Tegucigalpa",
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
		username: "Carlo Yair Costly",
		telefono: 99009900,
		email: "oscar@gmail.com",
		ciudad: "Tegucigalpa",
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
		username: "Isaac Newton",
		telefono: 99009332,
		email: "jaime@gmail.com",
		ciudad: "Tegucigalpa",
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
		username: "Pierre Emeric Aubameyang",
		telefono: 88332211,
		email: "jairo@gmail.com",
		ciudad: "Tegucigalpa",
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
		pedido: "prod1",
		descripcion: "lorem ipsum",
		disponibilidad: "Entregada",
		status: "Asignada",
		statusRepartidor: "Tomada", 
		cliente: "cl1",
		repartidor: "rep4",
		cantidad: 2,
		precio: 120,
		direccion: "Col. Quezada",
		imagen: 'assets/img/1.webp' 
	},
	{
		id: "ord2",
		pedido: "prod3",
		descripcion: "lorem ipsum",
		disponibilidad: "No entregada",
		status: "No asignada",
		statusRepartidor: "No tomada",
		cliente: "cl2",
		repartidor: "rep2",
		cantidad: 5,
		precio: 35,
		direccion: "Col. Quezada",
		imagen: 'assets/img/1.webp' 
	},
	{
		id: "ord3",
		pedido: "prod2",
		descripcion: "lorem ipsum dolor sit",
		disponibilidad: "En el origen",
		status: "Asignada",
		statusRepartidor: "Tomada",
		cliente: "cl3",
		repartidor: "rep1",
		cantidad: 1,
		precio: 100,
		direccion: "Col. Quezada",
		imagen: 'assets/img/1.webp' 
	},
	{
		id: "ord4",
		pedido: "prod3",
		descripcion: "lorem ipsum dolor sit",
		disponibilidad: "En camino",
		status: "Asignada",
		statusRepartidor: "Tomada",
		cliente: "cl3",
		repartidor: "rep5",
		cantidad: 6,
		precio: 60,
		direccion: "Col. Quezada",
		imagen: 'assets/img/1.webp' 
	},
	{
		id: "ord5",
		pedido: "prod2",
		descripcion: "lorem ipsum",
		disponibilidad: "No entregada",
		status: "No asignada",
		statusRepartidor: "Tomada",
		cliente: "cl2",
		repartidor: "rep3",
		cantidad: 5,
		precio: 30,
		direccion: "Col. Quezada",
		imagen: 'assets/img/1.webp' 
	}  
];

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
]

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

let clienteActual = 'cl3';

function generarPerfil(){
	// document.getElementById("Menu-Opciones-Principal").classList.remove('Lista-Opciones-Show');	
	document.getElementById("Contenedor-Principal-Formulario").classList.toggle('Contenedor-Formulario-Show');
}

function rellenarFormularioUsuario(){
	const infoClienteActual = clientes.find(cliente => cliente.id === clienteActual); 
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
			<input readonly type="text" name="" id="Input-Editar-Nombre" placeholder="${infoClienteActual.username}">
						
			<div class="Formulario-Contenedor-Texto">
				<label for=""> Email </label>
				<a href="#" onclick="editarEmail()"> <h2 class="Editar"> Editar </h2> </a>
			</div>
			<input readonly type="email" name="" id="Input-Editar-Email"  placeholder="${infoClienteActual.email}">
						
			<div class="Formulario-Contenedor-Texto">
				<label for=""> Telefono </label>
				<a href="#" onclick="editarTelefono()"> <h2 class="Editar"> Editar </h2> </a>
			</div>
			<input readonly type="text" id="Input-Editar-Telefono" name="" placeholder="${infoClienteActual.telefono}">
						
			<div class="Formulario-Contenedor-Texto">
				<label for=""> Password </label>
				<a href="#" onclick="editarPassword()"> <h2 class="Editar"> Editar </h2> </a>
			</div>
			<input readonly type="Password" id="Input-Editar-Password" name="" placeholder="${infoClienteActual.password}">
						
			<div class="Formulario-Contenedor-Texto">
				<button class="btn-success Btn-Save" id="Btn-Guardar-Cambios-Perfil"> Save </button> 	
			</div>
		</div>
	`;
}

rellenarFormularioUsuario();

function activarMenu(){
	// document.getElementById("Contenedor-Principal-Formulario").classList.remove('Contenedor-Formulario-Show');
	document.getElementById("Menu-Opciones-Principal").classList.toggle('Lista-Opciones-Show');
	rellenarFormularioUsuario();
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
			<div class="card Card-Empresas Card-Empresas-Clientes m-1" style="width: 20rem;" onclick="mostrarProductosFiltrados('${empresa.id}')">
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
		const categoriaSeleccionada = categorias.find(categoria => categoria.id === producto.categoria);

		document.getElementById('Contenido-Principal-Cards').innerHTML += `
			<div class="Contenedor-Cards">
				<div class="Card">
					<div class="Card-Contenido-1 Card-Imagen-Asignar-Productos" >
						<img src="${producto.imagenPerfil}" class="Imagen-Usuario">
						<h2 class="Card-Texto Card-Texto-Estado"> ${categoriaSeleccionada.nombre} </h2>
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
				<div class="Cards-Botones">
					<button class="btn btn-success rounded-0 Boton-Cards" id="Btn-Asignar-Repartidor"> <h2 class="Card-Texto Card-Texto-Boton font-weight-bold"> PEDIR </h2> </button>
				</div>
			</div>
		`;
	})
}

function mostrarProductosFiltrados(idEmpresa){
	document.getElementById('Contenido-Principal-Cards').innerHTML = '';

	const empresaActual = empresas.find(empresa => empresa.id === idEmpresa);

	(empresaActual.productosEmpresa).forEach(productoEmpresa => {
		const productosFiltrados = productos.filter(producto => producto.id === productoEmpresa);
		
		productosFiltrados.forEach(productoFiltradoEmpresa => {
			let estrellas = '';
			for(let i = 0; i < (productoFiltradoEmpresa.valoracion); i++){
				estrellas += `<i class="fa-solid fa-star text-success"></i>`;
			}

			for(let j = 0; j < (5 - productoFiltradoEmpresa.valoracion); j++){
				estrellas += `<i class="fa-regular fa-star text-danger"></i>`;
			}

			const empresaPertenece = empresas.find(empresa => empresa.id === productoFiltradoEmpresa.empresa);
			const categoriaSeleccionada = categorias.find(categoria => categoria.id === productoFiltradoEmpresa.categoria);

			document.getElementById('Contenido-Principal-Cards').innerHTML += `
				<div class="Contenedor-Cards Contenedor-Cards-Carritos">
					<div class="Card">
						<div class="Card-Contenido-1 Card-Imagen-Asignar-ProductoFiltradoEmpresas" >
							<img src="${productoFiltradoEmpresa.imagenPerfil}" class="Imagen-Usuario">
							<h2 class="Card-Texto Card-Texto-Estado"> ${categoriaSeleccionada.nombre} </h2>
						</div>
						<div class="Card-Contenido-2">
							<h2 class="Card-Texto Card-Texto-Contenido Card-Texto-Nombre"> ${productoFiltradoEmpresa.nombre} </h2>
							<h2 class="Card-Texto Card-Texto-Contenido Card-Texto-Direccion"> ${empresaPertenece.nombre} </h2>
							<h2 class="Card-Texto Card-Texto-Contenido Card-Texto-Pedido-Por"> ${productoFiltradoEmpresa.descripcion} </h2>
							<div class="Card-Contenedor-Info-Extra">
								<div class="Card-Contenedor-Estrellas">
									<h2 class="Card-Texto Contenedor-Cantidad-Numero"> ${estrellas} </h2>
									<h2 class="Card-Texto Contenedor-Cantidad-Texto"> Calificacion </h2>
								</div>
								<div class="Card-Contenedor-Descuento">
									<h2 class="Card-Texto Contenedor-Cantidad-Numero"> ${productoFiltradoEmpresa.descuento}% </h2>
									<h2 class="Card-Texto Contenedor-Cantidad-Texto"> Descuento </h2>
								</div>
							</div>
						</div>
						<div class="Card-Contenido-3">
							<h2 class="Card-Texto Card-Texto-Titulo-Contenido-3"> Precio </h2>
							<h2 class="Card-Texto Card-Texto-Contenido-3"> ${productoFiltradoEmpresa.precio}L </h2>
						</div>
					</div>
					<div class="Cards-Botones">
						<button class="btn btn-success rounded-0 Boton-Cards" id="Btn-Asignar-Repartidor"> <h2 class="Card-Texto Card-Texto-Boton font-weight-bold"> PEDIR </h2> </button>
					</div>
				</div>
			`;
		})
	})
}

function carrito(){
	document.getElementById('Contenido-Principal-Cards').innerHTML = '';
	
	const clienteSeleccionado = clientes.find(cliente => cliente.id === clienteActual);
	(clienteSeleccionado.carrito).forEach(ordenCarrito => {
		const listaOrdenes = ordenes.find(ordenSeleccionada => ordenCarrito === ordenSeleccionada.id);
		// listaOrdenes.forEach(orden => {
			const statusPedido = status.find(item => listaOrdenes.disponibilidad === item.stats);
			const nombreRepartidor = repartidores.find(item => listaOrdenes.repartidor === item.id);
			const productoSeleccionado = productos.find(producto => producto.id === listaOrdenes.pedido);
			document.getElementById('Contenido-Principal-Cards').innerHTML += `
			<div class="Contenedor-Cards Contenedor-Cards-Carritos" onclick="verDetallesPedido('${listaOrdenes.id}')">
				<div class="Card">
					<div class="Card-Contenido-1 Card-Imagen-Asignar-Productos" >
						<img src="${listaOrdenes.imagen}" class="Imagen-Usuario">
						<h2 class="Card-Texto Card-Texto-Estado"> <span style="color: ${statusPedido.statsColor}"> ● </span> ${listaOrdenes.disponibilidad} </h2>
					</div>
					<div class="Card-Contenido-2">
						<h2 class="Card-Texto Card-Texto-Contenido Card-Texto-Nombre"> ${productoSeleccionado.nombre} </h2>
						<h2 class="Card-Texto Card-Texto-Contenido Card-Texto-Descripcion"> ${listaOrdenes.descripcion} </h2>
						<h2 class="Card-Texto Card-Texto-Contenido Card-Texto-Direccion"> ${listaOrdenes.direccion} </h2>
						<h2 class="Card-Texto Card-Texto-Contenido Card-Texto-Pedido-Por"> Pedido por: ${clienteSeleccionado.username} </h2>
						<h2 class="Card-Texto Card-Texto-Contenido Card-Texto-Repartido-Por"> Repartido por: ${nombreRepartidor.username} </h2>
						<div class="Card-Contenedor-Cantidad">
							<h2 class="Card-Texto Contenedor-Cantidad-Numero"> ${listaOrdenes.cantidad} </h2>
							<h2 class="Card-Texto Contenedor-Cantidad-Texto"> Cantidad </h2>
						</div>
					</div>
					<div class="Card-Contenido-3">
						<h2 class="Card-Texto Card-Texto-Titulo-Contenido-3"> Precio </h2>
						<h2 class="Card-Texto Card-Texto-Contenido-3"> ${listaOrdenes.precio}L </h2>
					</div>
				</div>
				<div class="Cards-Botones">
						
				</div>
			</div>`;
		// })
	})
}

function verDetallesPedido(idOrden){
	document.getElementById('Contenido-Principal-Cards').innerHTML = '';
	const ordenSeleccionada = ordenes.find(orden => idOrden === orden.id);
	const productoSeleccionado = productos.find(producto => ordenSeleccionada.pedido === producto.id);
	const empresaSeleccionada = empresas.find(empresa => productoSeleccionado.empresa === empresa.id);
	const repartidorSeleccionado = repartidores.find(repartidor => repartidor.id === ordenSeleccionada.repartidor);
	const categoriaSeleccionada = categorias.find(categoria => categoria.id === productoSeleccionado.categoria);

	document.getElementById('Contenido-Principal-Cards').innerHTML += `
		<div class="Contenedor-Detalles-Orden">
			<img src="${ordenSeleccionada.imagen}" class="Imagen-Detalles-Orden" alt="Imagen Banner">
			<h2 class="Texto-Detalles-Orden Texto-Detalles-Orden-Titulo"> Nombre Producto </h2>
			<h2 class="Texto-Detalles-Orden"> ${productoSeleccionado.nombre} </h2>
			<h2 class="Texto-Detalles-Orden Texto-Detalles-Orden-Titulo"> Empresa </h2>
			<h2 class="Texto-Detalles-Orden"> ${empresaSeleccionada.nombre} </h2>
			<h2 class="Texto-Detalles-Orden Texto-Detalles-Orden-Titulo"> Categoria </h2>
			<h2 class="Texto-Detalles-Orden"> ${categoriaSeleccionada.nombre} </h2>
			<h2 class="Texto-Detalles-Orden Texto-Detalles-Orden-Titulo"> Descripcion </h2>
			<h2 class="Texto-Detalles-Orden"> ${ordenSeleccionada.descripcion} </h2>
			<div class="Contenido-Detalles-Orden">
				<h2 class="Texto-Detalles-Orden Texto-Detalles-Orden-Titulo"> Precio </h2>
				<h2 class="Texto-Detalles-Orden"> ${productoSeleccionado.precio} </h2>
			</div>
			<div class="Contenido-Detalles-Orden">
				<h2 class="Texto-Detalles-Orden Texto-Detalles-Orden-Titulo"> Cantidad </h2>
				<h2 class="Texto-Detalles-Orden"> ${ordenSeleccionada.cantidad} </h2>
			</div>
			<div class="Contenido-Detalles-Orden">
				<h2 class="Texto-Detalles-Orden Texto-Detalles-Orden-Titulo"> Descuento </h2>
				<h2 class="Texto-Detalles-Orden"> ${productoSeleccionado.descuento}% </h2>
			</div>
			<div class="Contenido-Detalles-Orden">
				<h2 class="Texto-Detalles-Orden Texto-Detalles-Orden-Titulo"> Subtotal </h2>
				<h2 class="Texto-Detalles-Orden"> Falta Calcular$ </h2>
			</div>
			<div class="Contenido-Detalles-Orden">
				<h2 class="Texto-Detalles-Orden Texto-Detalles-Orden-Titulo"> Total </h2>
				<h2 class="Texto-Detalles-Orden"> Falta Calcular$ </h2>
			</div>
					
			<h2 class="Texto-Detalles-Orden Texto-Detalles-Orden-Titulo"> Repartidor </h2>
			<h2 class="Texto-Detalles-Orden"> ${repartidorSeleccionado.username} </h2>
			<h2 class="Texto-Detalles-Orden Texto-Detalles-Orden-Titulo"> Direccion de envio </h2>
			<h2 class="Texto-Detalles-Orden"> ${ordenSeleccionada.direccion} </h2>
			<div class="Contenedor-Detalles-Orden-Btn">
				<button class="btn-danger Btn-Save" id="Btn-Guardar-Cambios-Perfil" onclick="carrito()"> Cerrar </button> 	
			</div>
		</div>		
	`;
}

function verProductosCategoria(idCategoria){
	const productosSeleccionados = productos.filter(producto => producto.categoria === idCategoria);
	productosSeleccionados.forEach(productoActual => {
		document.getElementById('Contenido-Principal-Cards').innerHTML = '';
		let estrellas = '';
		for(let i = 0; i < (productoActual.valoracion); i++){
			estrellas += `<i class="fa-solid fa-star text-success"></i>`;
		}

		for(let j = 0; j < (5 - productoActual.valoracion); j++){
			estrellas += `<i class="fa-regular fa-star text-danger"></i>`;
		}

		const empresaPertenece = empresas.find(empresa => empresa.id === productoActual.empresa);
		const categoriaSeleccionada = categorias.find(categoria => categoria.id === idCategoria);

		document.getElementById('Contenido-Principal-Cards').innerHTML += `
			<div class="Contenedor-Cards">
				<div class="Card">
					<div class="Card-Contenido-1 Card-Imagen-Asignar-Productos" >
						<img src="${productoActual.imagenPerfil}" class="Imagen-Usuario">
						<h2 class="Card-Texto Card-Texto-Estado"> ${categoriaSeleccionada.nombre} </h2>
					</div>
					<div class="Card-Contenido-2">
						<h2 class="Card-Texto Card-Texto-Contenido Card-Texto-Nombre"> ${productoActual.nombre} </h2>
						<h2 class="Card-Texto Card-Texto-Contenido Card-Texto-Direccion"> ${empresaPertenece.nombre} </h2>
						<h2 class="Card-Texto Card-Texto-Contenido Card-Texto-Pedido-Por"> ${productoActual.descripcion} </h2>
						<div class="Card-Contenedor-Info-Extra">
							<div class="Card-Contenedor-Estrellas">
								<h2 class="Card-Texto Contenedor-Cantidad-Numero"> ${estrellas} </h2>
								<h2 class="Card-Texto Contenedor-Cantidad-Texto"> Calificacion </h2>
							</div>
							<div class="Card-Contenedor-Descuento">
								<h2 class="Card-Texto Contenedor-Cantidad-Numero"> ${productoActual.descuento}% </h2>
								<h2 class="Card-Texto Contenedor-Cantidad-Texto"> Descuento </h2>
							</div>
						</div>
					</div>
					<div class="Card-Contenido-3">
						<h2 class="Card-Texto Card-Texto-Titulo-Contenido-3"> Precio </h2>
						<h2 class="Card-Texto Card-Texto-Contenido-3"> ${productoActual.precio}L </h2>
					</div>
				</div>
				<div class="Cards-Botones">
					<button class="btn btn-success rounded-0 Boton-Cards" id="Btn-Asignar-Repartidor"> <h2 class="Card-Texto Card-Texto-Boton font-weight-bold"> PEDIR </h2> </button>
				</div>
			</div>
		`;
	});
}

function mostrarCategorias(){
	document.getElementById('Contenido-Principal-Cards').innerHTML = '';
	let listaCategorias = '';
	categorias.forEach(categoria => {
		listaCategorias += `
			<div class="Card-Categoria" onclick="verProductosCategoria('${categoria.id}')">
				<img src="${categoria.imagen}" alt="Imagen ${categoria.nombre}">
				<h2 class="Texto-Detalles-Orden"> ${categoria.nombre} </h2>
			</div>`;
	});
	document.getElementById('Contenido-Principal-Cards').innerHTML += ` 
		<div class="Container-Card-Categorias">
			${listaCategorias}
		</div>
	`;
}

mostrarProductos();