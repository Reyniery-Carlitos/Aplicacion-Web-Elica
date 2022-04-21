// SUPONGAMOS QUE EL REPARTIDOR QUE USA LA APP ES EL REPARTIDOR CON ID rep4
var administradorActual = '';
var misCookies = document.cookie;
var listaCookies = misCookies.split(';');
for (i in listaCookies){
	if(listaCookies[i].match('id=')){
		administradorActual = listaCookies[i].slice(4);
		console.log(administradorActual);
		break;
	}
}

const urlClientes = "../backend/api/clientes.php";
const urlCategorias = "../backend/api/categorias.php";
const urlProductos = "../backend/api/productos.php";
const urlEmpresas = "../backend/api/empresas.php";
const urlOrdenes = "../backend/api/ordenes.php";
const urlStatusOrden = "../backend/api/statusOrden.php";
const urlStatus = "../backend/api/status.php";
const urlRepartidores = "../backend/api/repartidores.php";
const urlAdministradores = "../backend/api/administradores.php";
const urlImagenes = "../frontend/imagenes.php";

var clientes = [];
var categorias = [];
var productos = [];
var empresas = [];
var ordenes = [];
var statusOrdenes = [];
var estadosRepartidor = [];
var repartidores = [];
var administradores = [];
var administrador = [];

const obtenerEstadosOrdenes = () => {
	axios({
		method: 'GET',
		url: urlStatusOrden,
		responseType: 'json'
	}).then(respuesta =>{
		statusOrdenes = respuesta.data;
	}).catch(error => {
		console.error(error);
	});
}

obtenerEstadosOrdenes();

const obtenerDemasEstados = () => {
	axios({
		method: 'GET',
		url: urlStatus,
		responseType: 'json'
	}).then(respuesta =>{
		estadosRepartidor = respuesta.data;
	}).catch(error => {
		console.error(error);
	});
}

obtenerDemasEstados();

function rellenarFormularioUsuario(){
		document.getElementById('Contenedor-Principal-Formulario').innerHTML = '';
		document.getElementById('Contenedor-Principal-Formulario').innerHTML += `
			<div class="Contenedor-Imagen-Formulario">
				<img src="${administrador.imagen}" id="Imagen-Formulario">
			</div>
			<form action="${urlImagenes}" method="POST" enctype="multipart/form-data" id="Formulario-Imagen-Perfil-Usuario">  
				<a href=""> <label for="Custom-File-Input"> Cambiar / Agregar imagen </label> </a>
				<input type="file" name="file" id="Custom-File-Input" hidden>
			</form>	
			<a href="logout.php"> Cerrar Sesion </a>
					
			<div class="mb-3">
		  		<div class="Formulario-Contenedor-Texto">
					<label for=""> Nombre </label>
					<a href="#" onclick="editarNombre()"> <h2 class="Editar"> Editar </h2> </a>
				</div>
				<input readonly type="text" name="" id="Input-Editar-Nombre" value="${administrador.username}">
						
				<div class="Formulario-Contenedor-Texto">
					<label for=""> Email </label>
					<a href="#" onclick="editarEmail()"> <h2 class="Editar"> Editar </h2> </a>
				</div>
				<input readonly type="email" name="" id="Input-Editar-Email"  value="${administrador.email}">
						
				<div class="Formulario-Contenedor-Texto">
						<label for=""> Telefono </label>
						<a href="#" onclick="editarTelefono()"> <h2 class="Editar"> Editar </h2> </a>
					</div>
					<input readonly type="tel" id="Input-Editar-Telefono" name="" pattern="[0-9]{4}-[0-9]{4}" value="${administrador.telefono}">

					<div class="Formulario-Contenedor-Texto">
						<label for=""> Ciudad </label>
						<a href="#" onclick="editarCiudad()"> <h2 class="Editar"> Editar </h2> </a>
					</div>
					<input readonly type="text" id="Input-Editar-Ciudad" name="" value="${administrador.ciudad}">
						
				<div class="Formulario-Contenedor-Texto">
					<label for=""> Password </label>
					<a href="#" onclick="editarPassword()"> <h2 class="Editar"> Editar </h2> </a>
				</div>
				<input readonly type="Password" id="Input-Editar-Password" name="" value="${administrador.password}">
						
				<div class="Formulario-Contenedor-Texto">
					<button class="btn-success Btn-Save" id="Btn-Guardar-Cambios-Perfil" onclick="guardarNuevosCambios()"> Save </button> 	
				</div>
			</div>
		`;
}

function generarPerfil(){
	// document.getElementById("Menu-Opciones-Principal").classList.remove('Lista-Opciones-Show');	
	document.getElementById("Contenedor-Principal-Formulario").classList.toggle('Contenedor-Formulario-Show');
	rellenarFormularioUsuario();
}

function obtenerRepartidores(){
	axios({
		method: 'GET',
		url: urlRepartidores,
		responseType: 'json'
	}).then(respuesta => {
		repartidores = respuesta.data;
	}).catch(error => {
		console.error(error);
	})
}

obtenerRepartidores();

function obtenerAdministrador(){
	axios({
		method: 'GET',
		url: urlAdministradores + `?id=${administradorActual}`,
		responseType: 'json'
	}).then(respuesta => {
		administrador = respuesta.data;
	}).catch(error => {
		console.error(error);
	})
}

obtenerAdministrador();

function obtenerAdministradores(){
	axios({
		method: 'GET',
		url: urlAdministradores,
		responseType: 'json'
	}).then(respuesta => {
		administradores = respuesta.data;
	}).catch(error => {
		console.error(error);
	})
}

obtenerAdministradores();

function obtenerInfoCliente(){
	axios({
		method: 'GET',
		url: urlClientes,
		responseType: 'json'
	}).then(respuesta => {
		clientes = respuesta.data;
	}).catch(error => {
		console.error(error);
	})
}

obtenerInfoCliente();

function obtenerCategorias(){
	axios({
		method: 'GET',
		url: urlCategorias,
		responseType: 'json'
	}).then(respuesta => {
		categorias = respuesta.data;
	}).catch(error => {
		console.error(error);
	})
}

obtenerCategorias();

const obtenerProductos = () => {
	axios({
		method: 'GET',
		url: urlProductos,
		responseType: 'json'
	}).then(respuesta => {
		productos = respuesta.data;
	}).catch(error => {
		console.error(error);
	})
};

obtenerProductos();

const obtenerEmpresas = () => {
	axios({
		method: 'GET',
		url: urlEmpresas,
		responseType: 'json'
	}).then(respuesta => {
		empresas = respuesta.data;
	}).catch(error => {
		console.error(error);
	})
}

obtenerEmpresas();

const obtenerOrdenes = () => {
	axios({
		method: 'GET',
		url: urlOrdenes,
		responseType: 'json'
	}).then(respuesta => {
		ordenes = respuesta.data;
		mostrarOrdenes();
	}).catch(error => {
		console.error(error);
	})
}

obtenerOrdenes();

function activarMenu(){
	// document.getElementById("Contenedor-Principal-Formulario").classList.remove('Contenedor-Formulario-Show');
	document.getElementById("Menu-Opciones-Principal").classList.toggle('Lista-Opciones-Show');
	// rellenarFormularioUsuario();
}

const rechazarRepartidor = (idRepartidor) => {
	let repartidorSeleccionado = repartidores.find(repartidor => repartidor.id === idRepartidor);

	let repartidorModificado = {
	    "username": repartidorSeleccionado.username,
	    "telefono": repartidorSeleccionado.telefono,
	    "email": repartidorSeleccionado.email,
	    "ciudad": repartidorSeleccionado.ciudad,
	    "password": repartidorSeleccionado.password,
	    "valoracion": 4,
	    "status": "Rechazado",
	    "imagen": "assets/img/1.webp"
	}

	axios({
		method: 'PUT',
		url: urlRepartidores + `?id=${idRepartidor}`,
		responseType: 'json',
		data: repartidorModificado
	}).then(respuesta => {
		location.reload();
	}).catch(error => {
		console.error(error);
	})
};

const aceptarRepartidor = (idRepartidor) => {
	let repartidorSeleccionado = repartidores.find(repartidor => repartidor.id === idRepartidor);

	let repartidorModificado = {
	    "username": repartidorSeleccionado.username,
	    "telefono": repartidorSeleccionado.telefono,
	    "email": repartidorSeleccionado.email,
	    "ciudad": repartidorSeleccionado.ciudad,
	    "password": repartidorSeleccionado.password,
	    "valoracion": 4,
	    "status": "Aceptado",
	    "imagen": "assets/img/1.webp"
	}

	axios({
		method: 'PUT',
		url: urlRepartidores + `?id=${idRepartidor}`,
		responseType: 'json',
		data: repartidorModificado
	}).then(respuesta => {
		// location.reload();
		console.log(respuesta.data);
	}).catch(error => {
		console.error(error);
	})
};

// Funcion para mostrar las cards de los repartidores
function mostrarRepartidores(){
	document.getElementById("Contenido-Principal-Cards").innerHTML = '';
	repartidores.forEach(repartidor => {
		const statusRepartidor = estadosRepartidor.find(item => repartidor.status === item.stats);
		const estadoActual = estadosRepartidor.find(item => repartidor.disponibilidad === item.stats);
		// const statusPedido = statusOrdenes.find(item => repartidor.disponibilidad === item.stats);
		if(repartidor.status === 'Pendiente') {
			document.getElementById("Contenido-Principal-Cards").innerHTML += `
				<div class="Contenedor-Cards">
					<div class="Card">
						<div class="Card-Contenido-1" >
							<img src="assets/img/1.webp" class="Imagen-Usuario">
							<h2 class="Card-Texto Card-Texto-Estado"> <span style="color: ${statusRepartidor.statsColor};"> ● </span> ${repartidor.status} </h2>
						</div>
						<div class="Card-Contenido-2">
							<h2 class="Card-Texto Card-Texto-Contenido-2 Card-Texto-Nombre"> ${repartidor.username} </h2>
							<h2 class="Card-Texto Card-Texto-Contenido-2 Card-Texto-Email"> ${repartidor.email} </h2>
							<h2 class="Card-Texto Card-Texto-Contenido-2 Card-Texto-Residencia"> ${repartidor.ciudad} </h2>
							<h2 class="Card-Texto Card-Texto-Contenido-2 Card-Texto-Telefono"> ${repartidor.telefono} </h2>
							<h2 class="Card-Texto Card-Texto-Contenido-2 Card-Texto-Total"> Total Ordenes Entregadas: ${(repartidor.ordenesEntregadas).length}</h2>
						</div>
						<div class="Card-Contenido-3">
							<h2 class="Card-Texto Card-Texto-Titulo-Contenido-3"> Calificacion </h2>
							<h2 class="Card-Texto Card-Texto-Contenido-3"> ${repartidor.valoracion} </h2>
						</div>
					</div>
					<div class="Cards-Botones">
						<button class="btn btn-danger rounded-0 Boton-Cards"> <h2 class="Card-Texto Card-Texto-Boton" onclick="rechazarRepartidor('${repartidor.id}')"> RECHAZAR </h2> </button>
						<button class="btn btn-success rounded-0 Boton-Cards"> <h2 class="Card-Texto Card-Texto-Boton" onclick="aceptarRepartidor('${repartidor.id}')"> ACEPTAR </h2> </button>
					</div>
				</div>`;	
		} else if(estadoActual === undefined){
			document.getElementById("Contenido-Principal-Cards").innerHTML += `
				<div class="Contenedor-Cards">
					<div class="Card">
						<div class="Card-Contenido-1" >
							<img src="assets/img/1.webp" class="Imagen-Usuario">
							<h2 class="Card-Texto Card-Texto-Estado"> <span style="color: ${statusRepartidor.statsColor};"> ● </span> ${repartidor.status} </h2>
						</div>
						<div class="Card-Contenido-2">
							<h2 class="Card-Texto Card-Texto-Contenido-2 Card-Texto-Nombre"> ${repartidor.username} </h2>
							<h2 class="Card-Texto Card-Texto-Contenido-2 Card-Texto-Email"> ${repartidor.email} </h2>
							<h2 class="Card-Texto Card-Texto-Contenido-2 Card-Texto-Residencia"> ${repartidor.ciudad} </h2>
							<h2 class="Card-Texto Card-Texto-Contenido-2 Card-Texto-Telefono"> ${repartidor.telefono} </h2>
							<h2 class="Card-Texto Card-Texto-Contenido-2 Card-Texto-Total"> Total Ordenes Entregadas: ${(repartidor.ordenesEntregadas).length}</h2>
						</div>
						<div class="Card-Contenido-3">
							<h2 class="Card-Texto Card-Texto-Titulo-Contenido-3"> Calificacion </h2>
							<h2 class="Card-Texto Card-Texto-Contenido-3"> ${repartidor.valoracion} </h2>
							<h2 class="Card-Texto Card-Texto-Estado"> <span style="color: black;"> ● </span> Error </h2>
						</div>
					</div>
				</div>`;
		}else{
			document.getElementById("Contenido-Principal-Cards").innerHTML += `
				<div class="Contenedor-Cards">
					<div class="Card">
						<div class="Card-Contenido-1" >
							<img src="assets/img/1.webp" class="Imagen-Usuario">
							<h2 class="Card-Texto Card-Texto-Estado"> <span style="color: ${statusRepartidor.statsColor};"> ● </span> ${repartidor.status} </h2>
						</div>
						<div class="Card-Contenido-2">
							<h2 class="Card-Texto Card-Texto-Contenido-2 Card-Texto-Nombre"> ${repartidor.username} </h2>
							<h2 class="Card-Texto Card-Texto-Contenido-2 Card-Texto-Email"> ${repartidor.email} </h2>
							<h2 class="Card-Texto Card-Texto-Contenido-2 Card-Texto-Residencia"> ${repartidor.ciudad} </h2>
							<h2 class="Card-Texto Card-Texto-Contenido-2 Card-Texto-Telefono"> ${repartidor.telefono} </h2>
							<h2 class="Card-Texto Card-Texto-Contenido-2 Card-Texto-Total"> Total Ordenes Entregadas: ${(repartidor.ordenesEntregadas).length}</h2>
						</div>
						<div class="Card-Contenido-3">
							<h2 class="Card-Texto Card-Texto-Titulo-Contenido-3"> Calificacion </h2>
							<h2 class="Card-Texto Card-Texto-Contenido-3"> ${repartidor.valoracion} </h2>
							<h2 class="Card-Texto Card-Texto-Estado"> <span style="color: ${estadoActual.statsColor};"> ● </span> ${repartidor.disponibilidad} </h2>
						</div>
					</div>
				</div>
			`;
		}
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
							</div>
						</div>
						<div class="Card-Contenido-3">
							<h2 class="Card-Texto Card-Texto-Titulo-Contenido-3"> Precio </h2>
							<h2 class="Card-Texto Card-Texto-Contenido-3"> ${productoFiltradoEmpresa.precio}L </h2>
						</div>
					</div>
				</div>
			`;
		})
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
			<div class="card Card-Empresas m-1" style="width: 20rem;" onclick="mostrarProductosFiltrados('${empresa.id}')">
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

function verProductosCategoria(idCategoria){
	const productosSeleccionados = productos.filter(producto => producto.categoria === idCategoria);

	document.getElementById('Contenido-Principal-Cards').innerHTML = '';
	productosSeleccionados.forEach(productoActual => {
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
						</div>
					</div>
					<div class="Card-Contenido-3">
						<h2 class="Card-Texto Card-Texto-Titulo-Contenido-3"> Precio </h2>
						<h2 class="Card-Texto Card-Texto-Contenido-3"> ${productoActual.precio}L </h2>
					</div>
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

const agregarNuevaCategoriaImagen = () => {
	let elegido = document.getElementById('Custom-File-Input-Categoria');
	let form = document.getElementById('Formulario-Imagen-Categorias');
	form.addEventListener('submit', (e) => {
		e.preventDefault();
	});
	let data = new FormData(form);

	if(!elegido.value){
		agregarNuevaCategoria("assets/img/frutas.png");
	}else{
		axios({
			method: 'POST',
			url: urlImagenes,
			data: data
		}).then(respuesta => {
			agregarNuevaCategoria(respuesta.data);
		}).catch(error => {
			console.error(error);
		});
	}
};

const agregarNuevaCategoria = (imagenCategoria) => {
	let nombreCategoria = document.getElementById('Input-Editar-Nombre-Categoria').value;	
	
	let categoriaNueva = {
		"nombre": nombreCategoria,
		"imagen": imagenCategoria
	}
	console.log(categoriaNueva);

	axios({
		method: 'POST',
		url: urlCategorias,
		responseType: 'json',
		data: categoriaNueva
	}).then(respuesta => {
		location.reload();
	}).catch(error => {
		console.error(error);
	});
};

function formularioAgregarCategoria(){
	document.getElementById('Contenido-Principal-Cards').innerHTML = '';
	document.getElementById('Contenido-Principal-Cards').innerHTML = `
		<div class="Contenedor-Formulario-Editar-Agregar" id="Contenedor-Principal-Formulario-Add-Producto">
			<form action="${urlImagenes}" method="POST" enctype="multipart/form-data" id="Formulario-Imagen-Categorias">  
				<a href=""> <label for="Custom-File-Input-Categoria"> Cambiar / Agregar imagen </label> </a>
				<input type="file" name="file" id="Custom-File-Input-Categoria" hidden>
			</form>			
			<div class="Contenedor-Inputs-Editar-Agregar">
			  	<div class="Formulario-Contenedor-Texto">
					<label for="Input-Editar-Nombre-Empresa"> Nombre Categoria </label>
				</div>
				<input type="text" name="" id="Input-Editar-Nombre-Categoria" placeholder="Nombre Categoria" required>		
							
				<div class="Formulario-Contenedor-Texto">
					<button class="btn-success Btn-Save" id="Btn-Guardar-Cambios-Perfil" onclick="agregarNuevaCategoriaImagen()"> Save </button> 	
				</div>
			</div>
		</div>`;
}

const editarCategoriaImagen = (idCategoria) => {
	let elegido = document.getElementById('Custom-File-Input-Categoria');
	let form = document.getElementById('Formulario-Imagen-Categorias');
	const categoriaSeleccionada = categorias.find(categoria => categoria.id === idCategoria);

	form.addEventListener('submit', (e) => {
		e.preventDefault();
	});
	let data = new FormData(form);

	if(!elegido.value){
		editarNuevaCategoria(idCategoria, categoriaSeleccionada.imagen);
	}else{
		axios({
			method: 'POST',
			url: urlImagenes,
			data: data
		}).then(respuesta => {
			editarNuevaCategoria(idCategoria, respuesta.data);
		}).catch(error => {
			console.error(error);
		});
	}
};

const editarNuevaCategoria = (idCategoria, imagenCategoria) => {
	let nombreCategoria = document.getElementById('Input-Editar-Nombre-Categoria').value;	
	
	let categoriaNueva = {
		"nombre": nombreCategoria,
		"imagen": imagenCategoria
	}

	axios({
		method: 'PUT',
		url: urlCategorias + `?id=${idCategoria}`,
		responseType: 'json',
		data: categoriaNueva
	}).then(respuesta => {
		location.reload();
	}).catch(error => {
		console.error(error);
	});
};

function formularioEditarCategoria(idCategoria){
	// Recorrer el JSON y validar si es agregar o editar producto
	document.getElementById('Contenido-Principal-Cards').innerHTML = '';
	const categoriaSeleccionada = categorias.find(categoria => categoria.id === idCategoria);

	document.getElementById('Contenido-Principal-Cards').innerHTML = `
		<div class="Contenedor-Formulario-Editar-Agregar" id="Contenedor-Principal-Formulario-Add-Producto">
			<img src="${categoriaSeleccionada.imagen}" class="Imagen-Portada-Editar-Agregar" id="Imagen-Portada-Formulario-Editar-Categoria">
			<form action="${urlImagenes}" method="POST" enctype="multipart/form-data" id="Formulario-Imagen-Categorias">  
				<a href=""> <label for="Custom-File-Input-Categoria"> Cambiar / Agregar imagen </label> </a>
				<input type="file" name="file" id="Custom-File-Input-Categoria" hidden>
			</form>			
			<div class="Contenedor-Inputs-Editar-Agregar">
			  	<div class="Formulario-Contenedor-Texto">
					<label for="Input-Editar-Nombre-Empresa"> Nombre Categoria </label>
				</div>
				<input type="text" name="" id="Input-Editar-Nombre-Categoria" value="${categoriaSeleccionada.nombre}" required>		
							
				<div class="Formulario-Contenedor-Texto">
					<button class="btn-success Btn-Save" id="Btn-Guardar-Cambios-Perfil" onclick="editarCategoriaImagen('${categoriaSeleccionada.id}')"> Save </button> 	
				</div>
			</div>
		</div>
	`;
}

function editarCategorias(){
	document.getElementById('Contenido-Principal-Cards').innerHTML = '';
	let listaCategorias = ''; 
	categorias.forEach(categoria => {
		listaCategorias += `
			<div class="Card-Categoria" onclick="formularioEditarCategoria('${categoria.id}')">
				<img src="${categoria.imagen}" alt="Imagen ${categoria.nombre}">
				<h2 class="Texto-Detalles-Orden"> ${categoria.nombre} </h2>
			</div>
		`;
	});

	document.getElementById('Contenido-Principal-Cards').innerHTML += ` 
		<div class="Container-Card-Categorias">
			${listaCategorias}
		</div>
	`;
}

function mostrarOrdenes(){
	document.getElementById('Contenido-Principal-Cards').innerHTML = '';
	
	ordenes.forEach(orden => {
		const statusOrden = estadosRepartidor.find(item => orden.status === item.stats);
		const statusPedido = statusOrdenes.find(item => orden.disponibilidad === item.stats);
		const nombreRepartidor = repartidores.find(item => orden.repartidor === item.id);
		const clienteSeleccionado = clientes.find(cliente => orden.cliente === cliente.id);
		const productoSeleccionado = productos.find(producto => producto.id === orden.pedido);

		if (nombreRepartidor === undefined) {
			document.getElementById('Contenido-Principal-Cards').innerHTML += `
				<div class="Contenedor-Cards">
					<div class="Card">
						<div class="Card-Contenido-1 Card-Imagen-Asignar-Productos" >
							<img src="${orden.imagen}" class="Imagen-Usuario">
							<h2 class="Card-Texto Card-Texto-Estado"> <span style="color: ${statusOrden.statsColor}"> ● </span> ${orden.status} </h2>
						</div>
						<div class="Card-Contenido-2">
							<h2 class="Card-Texto Card-Texto-Contenido Card-Texto-Nombre"> ${productoSeleccionado.nombre} </h2>
							<h2 class="Card-Texto Card-Texto-Contenido Card-Texto-Descripcion"> ${orden.descripcion} </h2>
							<h2 class="Card-Texto Card-Texto-Contenido Card-Texto-Direccion"> ${orden.direccion} </h2>
							<h2 class="Card-Texto Card-Texto-Contenido Card-Texto-Pedido-Por"> Pedido por: ${clienteSeleccionado.username} </h2>
							<h2 class="Card-Texto Card-Texto-Contenido Card-Texto-Repartido-Por"> Repartido por: No asignado </h2>
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
		}else if (orden.status === 'Asignada') {
			document.getElementById('Contenido-Principal-Cards').innerHTML += `
				<div class="Contenedor-Cards">
					<div class="Card">
						<div class="Card-Contenido-1 Card-Imagen-Asignar-Productos" >
							<img src="${orden.imagen}" class="Imagen-Usuario">
							<h2 class="Card-Texto Card-Texto-Estado"> <span style="color: ${statusOrden.statsColor}"> ● </span> ${orden.status} </h2>
						</div>
						<div class="Card-Contenido-2">
							<h2 class="Card-Texto Card-Texto-Contenido Card-Texto-Nombre"> ${productoSeleccionado.nombre} </h2>
							<h2 class="Card-Texto Card-Texto-Contenido Card-Texto-Descripcion"> ${orden.descripcion} </h2>
							<h2 class="Card-Texto Card-Texto-Contenido Card-Texto-Direccion"> ${orden.direccion} </h2>
							<h2 class="Card-Texto Card-Texto-Contenido Card-Texto-Pedido-Por"> Pedido por: ${clienteSeleccionado.username} </h2>
							<h2 class="Card-Texto Card-Texto-Contenido Card-Texto-Repartido-Por"> Repartido por: ${nombreRepartidor.username} </h2>
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
							<h2 class="Card-Texto Card-Texto-Contenido Card-Texto-Nombre"> ${productoSeleccionado.nombre} </h2>
							<h2 class="Card-Texto Card-Texto-Contenido Card-Texto-Descripcion"> ${orden.descripcion} </h2>
							<h2 class="Card-Texto Card-Texto-Contenido Card-Texto-Direccion"> ${orden.direccion} </h2>
							<h2 class="Card-Texto Card-Texto-Contenido Card-Texto-Pedido-Por"> Pedido por: ${clienteSeleccionado.username} </h2>
							<h2 class="Card-Texto Card-Texto-Contenido Card-Texto-Repartido-Por"> Repartido por: ${nombreRepartidor.username} </h2>
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
						<button class="btn btn-success rounded-0 Boton-Cards" onclick="asignarRepartidor('${orden.id}')" id="Btn-Asignar-Repartidor"> <h2 class="Card-Texto Card-Texto-Boton font-weight-bold"> ASIGNAR A </h2> </button>
					</div>
				</div>
			`;	
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
			
			<form action="${urlImagenes}" method="POST" enctype="multipart/form-data" id="Formulario-Imagen-Portada-Empresa">  
				<span id="Status-Imagen-Portada"> Ninguna imagen Seleccionada </span>
				<a href="#"> <label for="Custom-File-Input-Portada-Empresa"> Cambiar / Agregar imagen Portada </label> </a>
				<input type="file" name="file" id="Custom-File-Input-Portada-Empresa" hidden>
			</form>	
			<form action="${urlImagenes}" method="POST" enctype="multipart/form-data" id="Formulario-Imagen-Perfil-Empresa">  
				<span id="Status-Imagen-Portada"> Ninguna imagen Seleccionada </span>
				<a href="#"> <label for="Custom-File-Input-Perfil-Empresa"> Cambiar / Agregar imagen Perfil </label> </a>
				<input type="file" name="file" id="Custom-File-Input-Perfil-Empresa" hidden>
			</form>	
						
			<div class="Contenedor-Inputs-Editar-Agregar">
			  	<div class="Formulario-Contenedor-Texto">
					<label for=""> Nombre </label>
					<a href="#" onclick="editarNombreEmpresa()" class="text-decoration-none"> <h2 class="Editar"> Editar </h2> </a>
				</div>
				<input readonly type="text" name="" id="Input-Editar-Nombre-Empresa" value="${empresaFiltrada.nombre}">
						
				<div class="Formulario-Contenedor-Texto">
					<label for=""> Descripcion </label>
					<a href="#" onclick="editarDescripcionEmpresa()" class="text-decoration-none"> <h2 class="Editar"> Editar </h2> </a>
				</div>
				<input readonly type="email" name="" id="Input-Editar-Descripcion-Empresa"  value="${empresaFiltrada.descripcion}">

				<div class="Formulario-Contenedor-Texto">
					<label for=""> Email </label>
					<a href="#" onclick="editarEmailEmpresa()" class="text-decoration-none"> <h2 class="Editar"> Editar </h2> </a>
				</div>
				<input readonly type="email" name="" id="Input-Editar-Email-Empresa"  value="${empresaFiltrada.email}">
							
				<div class="Formulario-Contenedor-Texto">
					<label for=""> Telefono </label>
					<a href="#" onclick="editarTelefonoEmpresa()" class="text-decoration-none"> <h2 class="Editar"> Editar </h2> </a>
				</div>
				<input readonly type="text" id="Input-Editar-Telefono-Empresa" name="" value="${empresaFiltrada.telefono}">
							
				<div class="Formulario-Contenedor-Texto">
					<button class="btn-success Btn-Save" id="Btn-Guardar-Cambios-Empresa" onclick="guardarNuevosCambiosEmpresa('${idEmpresa}')"> Save </button> 	
				</div>
			</div>
		</div>`;
}

const eliminarEmpresa = (idEmpresa) => {
	axios({
		method: 'DELETE',
		url: urlEmpresas + `?id=${idEmpresa}`,
		responseType: 'json'
	}).then(respuesta => {
		location.reload();
	}).catch(error => {
		console.error(error);
	});
};

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
					<i class="fa-solid fa-trash text-danger fa-2x" onclick="eliminarEmpresa('${empresa.id}')"></i>
				</div>
			</div>
			<div class="card-body-2 Card-Contenido-Imagen-Empresa p-0 mt-2 mb-1 mr-2 ml-2">
				<img src="${empresa.imagenPerfil}" id="Imagen-Miniatura-Empresa">		
			</div>
		</div>`;
	})
}

const agregarNuevaEmpresaImagen = () => {
	let portadaElegida = document.getElementById('Custom-File-Agregar-Portada-Empresa');
	let perfilElegido = document.getElementById('Custom-File-Agregar-Perfil-Empresa');
	let form = document.getElementById('Formulario-Imagen-Portada-Agregar-Empresa');
	let form2 = document.getElementById('Formulario-Imagen-Perfil-Agregar-Empresa');

	form.addEventListener('submit', (e) => {
		e.preventDefault();
	});

	form2.addEventListener('submit', (e) => {
		e.preventDefault();
	});

	let data = new FormData(form);
	let data2 = new FormData(form2);

	if(!portadaElegida.value && !perfilElegido.value){
		editarEmpresaNueva("assets/img/banner.jpg", "assets/img/1.webp");
	}else if(!portadaElegida.value && perfilElegido.value){
		axios({
			method: 'POST',
			url: urlImagenes,
			data: data2
		}).then(respuesta => {
			agregarNuevaEmpresa("assets/img/banner.jpg", respuesta.data);
		}).catch(error => {
			console.error(error);
		});
	}else if(!perfilElegido.value && portadaElegida.value){
		axios({
			method: 'POST',
			url: urlImagenes,
			data: data
		}).then(respuesta => {
			agregarNuevaEmpresa(respuesta.data, "assets/img/1.webp");
		}).catch(error => {
			console.error(error);
		});
	}else{
		axios({
			method: 'POST',
			url: urlImagenes,
			data: data
		}).then(respuesta => {
			axios({
				method: 'POST',
				url: urlImagenes,
				data: data2
			}).then(respuesta2 => {
				agregarNuevaEmpresa(respuesta.data, respuesta2.data);
			}).catch(error => {
				console.error(error);
			});
		}).catch(error => {
			console.error(error);
		});
	}
};

const agregarNuevaEmpresa = (imagenPortada, imagenPerfil) => {
	let nombre = document.getElementById('Input-Agregar-Nombre-Empresa').value;
	let descripcion = document.getElementById('Input-Agregar-Descripcion-Empresa').value;
	let email = document.getElementById('Input-Agregar-Email-Empresa').value;
	let telefono = document.getElementById('Input-Agregar-Telefono-Empresa').value; 
	console.log(imagenPortada);
	console.log(imagenPerfil);

	let empresaNueva = {
		"nombre": nombre,
		"descripcion": descripcion,
		"email": email,
		"telefono": telefono,
		"valoracion": 5,
		"imagenPortada": imagenPortada,
		"imagenPerfil": imagenPerfil
	}
	axios({
		method: 'POST',
		url: urlEmpresas,
		responseType: 'json',
		data: empresaNueva
	}).then(respuesta => {
		location.reload();
	}).catch(error => {
		console.error(error);
	});
};

const agregarNuevoProductoImagen = () => {
	let elegido = document.getElementById('Custom-File-Input');
	let form = document.getElementById('Formulario-Imagen-Productos');
	form.addEventListener('submit', (e) => {
		e.preventDefault();
	});
	let data = new FormData(form);

	if(!elegido.value){
		console.log("No hay producto seleccionado");
	}else{
		axios({
			method: 'POST',
			url: urlImagenes,
			data: data
		}).then(respuesta => {
			agregarNuevoProducto(respuesta.data);
		}).catch(error => {
			console.error(error);
		});
	}
};

function formularioAgregarEmpresa(){
	document.getElementById('Contenido-Principal-Cards').innerHTML = '';
	document.getElementById('Contenido-Principal-Cards').innerHTML = `
		<div class="Contenedor-Formulario-Editar-Agregar" id="Contenedor-Principal-Formulario-Agregar-Editar">
			
			<form action="${urlImagenes}" method="POST" enctype="multipart/form-data" id="Formulario-Imagen-Portada-Agregar-Empresa">  
				<a href="#"> <label for="Custom-File-Agregar-Portada-Empresa"> Cambiar / Agregar imagen Portada </label> </a>
				<input type="file" name="file" id="Custom-File-Agregar-Portada-Empresa" hidden>
			</form>	
			<form action="${urlImagenes}" method="POST" enctype="multipart/form-data" id="Formulario-Imagen-Perfil-Agregar-Empresa">  
				<a href="#"> <label for="Custom-File-Agregar-Perfil-Empresa"> Cambiar / Agregar imagen Perfil </label> </a>
				<input type="file" name="file" id="Custom-File-Agregar-Perfil-Empresa" hidden>
			</form>	
						
			<div class="Contenedor-Inputs-Editar-Agregar">
			  	<div class="Formulario-Contenedor-Texto">
					<label for=""> Nombre </label>
				</div>
				<input type="text" name="" id="Input-Agregar-Nombre-Empresa" placeholder="Nombre Empresa" required>
						
				<div class="Formulario-Contenedor-Texto">
					<label for=""> Descripcion </label>
				</div>
				<input type="text" name="" id="Input-Agregar-Descripcion-Empresa"  placeholder="Descripcion Empresa" required>

				<div class="Formulario-Contenedor-Texto">
					<label for=""> Email </label>
				</div>
				<input type="email" name="" id="Input-Agregar-Email-Empresa"  placeholder="Email" required>
							
				<div class="Formulario-Contenedor-Texto">
					<label for=""> Telefono </label>
				</div>
				<input type="text" id="Input-Agregar-Telefono-Empresa" name="" required>
							
				<div class="Formulario-Contenedor-Texto">
					<button class="btn-success Btn-Save" id="Btn-Guardar-Cambios-Empresa-Agregada" onclick="agregarNuevaEmpresaImagen()"> Save </button> 	
				</div>
			</div>
		</div>
	`;
}

const agregarNuevoProducto = (imagenProducto) => {
	let nombreEmpresa = document.getElementById('Id-Option-Producto').value;
	let empresaSeleccionada = empresas.find(empresa => empresa.nombre === nombreEmpresa);

	let nombreCategoria = document.getElementById('Id-Option-Categoria').value;	
	let categoriaSeleccionada = categorias.find(categoria => categoria.nombre === nombreCategoria);
	
	let nombre = document.getElementById('Input-Editar-Nombre-Producto').value;

	let descripcion = document.getElementById('Input-Editar-Descripcion-Producto').value;
	
	let precio = parseFloat(document.getElementById('Input-Editar-Precio-Producto').value);
	
	let productoNuevo = {
		"nombre": nombre,
		"empresa": empresaSeleccionada.id,
		"categoria": categoriaSeleccionada.id,
		"descripcion": descripcion,
		"precio": precio,
		"valoracion": 5,
		"imagenPerfil": imagenProducto,
	}

	axios({
		method: 'POST',
		url: urlProductos,
		responseType: 'json',
		data: productoNuevo
	}).then(respuesta => {
		location.reload();
	}).catch(error => {
		console.error(error);
	});
};

function formularioAgregarProducto(){
	// Recorrer el JSON y validar si es agregar o editar producto
	let listaCategorias = "";
	let listaEmpresas = "";
	categorias.forEach(categoria => {
		listaCategorias += `<option value="${categoria.nombre}" selected> ${categoria.nombre} </option> <br>`;
	});

	empresas.forEach(empresa => {
		listaEmpresas += `<option value="${empresa.nombre}" selected> ${empresa.nombre} </option> <br>`; 
	});

	document.getElementById('Contenido-Principal-Cards').innerHTML = '';
	document.getElementById('Contenido-Principal-Cards').innerHTML = `
		<div class="Contenedor-Formulario-Editar-Agregar" id="Contenedor-Principal-Formulario-Add-Producto">
			<!-- <img src="" class="Imagen-Portada-Editar-Agregar" id="Imagen-Portada-Formulario-Add-Producto"> -->
			<!--<span class="File-Status"> No image choosen </span>
			<a href="#" class="text-decoration-none"> <label class="Editar mb-0" for="Custom-File-Input"> Agregar imagen Producto </label> </a> -->
			<form action="${urlImagenes}" method="POST" enctype="multipart/form-data" id="Formulario-Imagen-Productos">  
				<a href=""> <label for="Custom-File-Input"> Cambiar / Agregar imagen </label> </a>
				<input type="file" name="file" id="Custom-File-Input" hidden>
			</form>			
			<div class="Contenedor-Inputs-Editar-Agregar">
			  	<div class="Formulario-Contenedor-Texto">
					<label for="Input-Editar-Nombre-Empresa"> Nombre Empresa </label>
				</div>
				<select name="selectProductos" style="width = 100%" id="Id-Option-Producto"> 
					${listaEmpresas}
				</select>
				
				<div class="Formulario-Contenedor-Texto">
					<label for="Input-Editar-Nombre-Producto"> Nombre Producto </label>
				</div>
				<input type="text" name="" id="Input-Editar-Nombre-Producto" placeholder="Nombre Producto" required>		

				<div class="Formulario-Contenedor-Texto">
					<label for="Input-Editar-Nombre-Empresa"> Categoria Producto </label>
				</div>
				<select name="select" style="width = 100%" id="Id-Option-Categoria"> 
					${listaCategorias}
				</select>
				<!-- <input type="text" name="" id="Input-Editar-Categoria-Producto" placeholder="Categoria Producto"> -->

				<div class="Formulario-Contenedor-Texto">
					<label for=""> Descripcion Producto </label>
				</div>
				<input type="text" name="" id="Input-Editar-Descripcion-Producto"  placeholder="Descripcion Producto" required>
							
				<div class="Formulario-Contenedor-Texto">
					<label for=""> Precio </label>
				</div>
				<input type="number" id="Input-Editar-Precio-Producto" name="" required>
							
				<div class="Formulario-Contenedor-Texto">
					<button class="btn-success Btn-Save" id="Btn-Guardar-Cambios-Perfil" onclick="agregarNuevoProductoImagen()"> Save </button> 	
				</div>
			</div>
		</div>`;
}

function formularioEditarProducto(idProducto){
	// Recorrer el JSON y validar si es agregar o editar producto
	document.getElementById('Contenido-Principal-Cards').innerHTML = '';
	const productoFiltrado = productos.find(producto => producto.id == idProducto);
	const empresaPertenece = empresas.find(empresaFiltrada => empresaFiltrada.id === productoFiltrado.empresa);
	const categoriaSeleccionada = categorias.find(categoria => categoria.id === productoFiltrado.categoria);
	let listaCategorias = '';
	
	categorias.forEach(categoria => {
		if(categoria.id === productoFiltrado.categoria){
			listaCategorias += `<option value="${categoria.nombre}" selected> ${categoria.nombre} </option> <br>`;
		}else{
			listaCategorias += `<option value="${categoria.nombre}"> ${categoria.nombre} </option> <br>`;
		}
	});

	document.getElementById('Contenido-Principal-Cards').innerHTML = `
		<div class="Contenedor-Formulario-Editar-Agregar" id="Contenedor-Principal-Formulario-Editar-Producto">
			<img src="${productoFiltrado.imagenPerfil}" class="Imagen-Portada-Editar-Agregar" id="Imagen-Portada-Formulario-Editar-Producto">
			<form action="${urlImagenes}" method="POST" enctype="multipart/form-data" id="Formulario-Imagen-Productos">  
				<a href=""> <label for="Custom-File-Input"> Cambiar / Agregar imagen </label> </a>
				<input type="file" name="file" id="Custom-File-Input" hidden>
			</form>
						
			<div class="Contenedor-Inputs-Editar-Agregar">
				<div class="Formulario-Contenedor-Texto">
					<label for="Input-Editar-Nombre-Producto"> Nombre Producto </label>
					<a href="#" onclick="editarNombreProducto()" class="text-decoration-none"> <h2 class="Editar"> Editar </h2> </a>
				</div>
				<input readonly type="text" name="" id="Input-Editar-Nombre-Producto" value="${productoFiltrado.nombre}">

				<div class="Formulario-Contenedor-Texto">
					<label for="Input-Editar-Categoria-Producto"> Categoria Producto </label>
					<a href="#" onclick="editarCategoriaProducto()" class="text-decoration-none"> <h2 class="Editar"> Editar </h2> </a>
				</div>
				<select name="select" style="width = 100%" id="Id-Option-Categoria" disabled> 
					${listaCategorias}
				</select>

				<div class="Formulario-Contenedor-Texto">
					<label for=""> Descripcion Producto </label>
					<a href="#" onclick="editarDescripcionProducto()" class="text-decoration-none"> <h2 class="Editar"> Editar </h2> </a>
				</div>
				<input readonly type="text" name="" id="Input-Editar-Descripcion-Producto"  value="${productoFiltrado.descripcion}">
							
				<div class="Formulario-Contenedor-Texto">
					<label for=""> Precio </label>
					<a href="#" onclick="editarPrecioProducto()" class="text-decoration-none"> <h2 class="Editar"> Editar </h2> </a>
				</div>
				<input readonly type="number" id="Input-Editar-Precio-Producto" name="" value="${productoFiltrado.precio}">
							
				<div class="Formulario-Contenedor-Texto">
					<button class="btn-success Btn-Save" id="Btn-Guardar-Cambios-Producto" onclick="guardarNuevosCambiosProductos('${productoFiltrado.id}', '${empresaPertenece.id}')"> Save </button> 	
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
						<!-- <h2 class="Card-Texto Card-Texto-Estado"> ${producto.status} </h2> -->
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

const eliminarProducto = (idProducto) => {
	axios({
		method: 'DELETE',
		url: urlProductos + `?id=${idProducto}`,
		responseType: 'json'
	}).then(respuesta => {
		location.reload();
	}).catch(error => {
		console.error(error);
	});
};

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
						<!-- <h2 class="Card-Texto Card-Texto-Estado"> ${producto.status} </h2> -->
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
						</div>
					</div>
					<div class="Card-Contenido-3">
						<h2 class="Card-Texto Card-Texto-Titulo-Contenido-3"> Precio </h2>
						<h2 class="Card-Texto Card-Texto-Contenido-3"> ${producto.precio}L </h2>
						<div class="Contenedor-Btn-Trash">
							<i class="fa-solid fa-trash text-danger fa-2x" onclick="eliminarProducto('${producto.id}')"></i>
						</div>
					</div>
				</div>	
			</div>
		`;
	})
}

const asignarOrdenRepartidor = (idOrden, idRepartidor) => {
	const ordenSeleccionada = ordenes.find(orden => idOrden === orden.id);

	let orden = {
		"pedido": ordenSeleccionada.pedido,
		"descripcion": ordenSeleccionada.descripcion,
		"disponibilidad": "No entregada",
		"cliente": ordenSeleccionada.cliente,
		"repartidor": idRepartidor,
		"cantidad": ordenSeleccionada.cantidad,
		"direccion": ordenSeleccionada.direccion,
		"imagen": ordenSeleccionada.imagen 
	}

	axios({
		method: 'PUT',
		url: urlOrdenes + `?id=${idOrden}`,
		responseType: 'json',
		data: orden
	}).then(respuesta => {
		alert('Orden asignada con exito');
		location.reload();
	}).catch(error => {
		console.error(error);
	});
}

function asignarRepartidor(idOrden){
	document.getElementById('Contenido-Principal-Cards').innerHTML = '';
	repartidores.forEach(repartidor => {
		const statusRepartidor = estadosRepartidor.find(item => repartidor.disponibilidad === item.stats);
		console.log(repartidor.disponibilidad);
		if (repartidor.disponibilidad === "Disponible") {		
			document.getElementById('Contenido-Principal-Cards').innerHTML += `
				<div class="Contenedor-Cards">
					<div class="Card">
						<div class="Card-Contenido-1" >
							<img src="${repartidor.imagen}" class="Imagen-Usuario">
							<h2 class="Card-Texto Card-Texto-Estado"> <span id="Status-Repartidor" style="color: ${statusRepartidor.statsColor};"> ● </span> ${repartidor.disponibilidad} </h2>
						</div>
						<div class="Card-Contenido-2">
							<h2 class="Card-Texto Card-Texto-Contenido Card-Texto-Nombre"> ${repartidor.username} </h2>
							<h2 class="Card-Texto Card-Texto-Contenido Card-Texto-Email"> ${repartidor.email} </h2>
							<h2 class="Card-Texto Card-Texto-Contenido Card-Texto-Residencia"> ${repartidor.ciudad} </h2>
							<h2 class="Card-Texto Card-Texto-Contenido Card-Texto-Telefono"> ${repartidor.telefono} </h2>
							<h2 class="Card-Texto Card-Texto-Contenido Card-Texto-Total"> Total Ordenes Entregadas: ${(repartidor.ordenesEntregadas).length} </h2>
						</div>
						<div class="Card-Contenido-3">
							<h2 class="Card-Texto Card-Texto-Titulo-Contenido-3"> Calificacion </h2>
							<h2 class="Card-Texto Card-Texto-Contenido-3"> ${repartidor.valoracion} </h2>
						</div>
					</div>
					<div class="Cards-Botones">
						<button class="btn btn-primary rounded-0 Boton-Cards" id="Btn-Guardar-Cambios-Empresa"> <h2 class="Card-Texto Card-Texto-Boton" onclick="asignarOrdenRepartidor('${idOrden}', '${repartidor.id}')"> ASIGNAR </h2> </button>
					</div>
				</div>
			`;
		}		
	})
}

const modificarInfoAdministradorImagen = () => {
	let administradorSeleccionado = administradores.find(administrador => administrador.id === administradorActual);
	let elegido = document.getElementById('Custom-File-Input');
	let form = document.getElementById('Formulario-Imagen-Perfil-Usuario');
	form.addEventListener('submit', (e) => {
		e.preventDefault();
	});
	let data = new FormData(form);

	if(!elegido.value){
		modificarInfoAdministrador(administradorSeleccionado.imagen);
	}else{
		axios({
			method: 'POST',
			url: urlImagenes,
			data: data
		}).then(respuesta => {
			console.log(respuesta.data);
			modificarInfoAdministrador(respuesta.data);
		}).catch(error => {
			console.error(error);
		});
	}
};

function modificarInfoAdministrador(imagenPerfil){
	let username = document.getElementById('Input-Editar-Nombre').value;
	let email = document.getElementById('Input-Editar-Email').value;
	let password = document.getElementById('Input-Editar-Password').value;
	let telefono = document.getElementById('Input-Editar-Telefono').value;
	let ciudad = document.getElementById('Input-Editar-Ciudad').value;

	let administradorModificado = {
	    "username": username,
	    "email": email,
	    "password": password,
	    "telefono": telefono,
	    "ciudad": ciudad,
	    "imagen": imagenPerfil
	}

	axios({
		method: 'PUT',
		url: urlAdministradores + `?id=${administradorActual}`,
		responseType: 'json',
		data: administradorModificado
	}).then(respuesta => {
		location.reload();
	}).catch(error => {
		console.error(error);
	});
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

function editarCiudad(){
	document.getElementById("Input-Editar-Ciudad").removeAttribute("readonly");
}

const guardarNuevosCambios = () => {
	document.getElementById("Input-Editar-Nombre").setAttribute("readonly", true);
	document.getElementById("Input-Editar-Email").setAttribute("readonly", true);
	document.getElementById("Input-Editar-Telefono").setAttribute("readonly", true);
	document.getElementById("Input-Editar-Password").setAttribute("readonly", true);
	document.getElementById("Input-Editar-Ciudad").setAttribute("readonly", true);
	modificarInfoAdministradorImagen();
};

const editarEmpresaNuevaImagen = (idEmpresa) => {
	let empresaSeleccionada = empresas.find(empresa => empresa.id === idEmpresa);
	let portadaElegida = document.getElementById('Custom-File-Input-Portada-Empresa');
	let perfilElegido = document.getElementById('Custom-File-Input-Perfil-Empresa');
	let form = document.getElementById('Formulario-Imagen-Portada-Empresa');
	let form2 = document.getElementById('Formulario-Imagen-Perfil-Empresa');

	form.addEventListener('submit', (e) => {
		e.preventDefault();
	});

	form2.addEventListener('submit', (e) => {
		e.preventDefault();
	});

	let data = new FormData(form);
	let data2 = new FormData(form2);

	if(!portadaElegida.value && !perfilElegido.value){
		editarEmpresaNueva(idEmpresa, empresaSeleccionada.imagenPortada, empresaSeleccionada.imagenPerfil);
	}else if(!portadaElegida.value && perfilElegido.value){
		axios({
			method: 'POST',
			url: urlImagenes,
			data: data2
		}).then(respuesta => {
			editarEmpresaNueva(idEmpresa, empresaSeleccionada.imagenPortada, respuesta.data);
		}).catch(error => {
			console.error(error);
		});
	}else if(!perfilElegido.value && portadaElegida.value){
		axios({
			method: 'POST',
			url: urlImagenes,
			data: data
		}).then(respuesta => {
			editarEmpresaNueva(idEmpresa, respuesta.data, empresaSeleccionada.imagenPerfil);
		}).catch(error => {
			console.error(error);
		});
	}else{
		axios({
			method: 'POST',
			url: urlImagenes,
			data: data
		}).then(respuesta => {
			axios({
				method: 'POST',
				url: urlImagenes,
				data: data2
			}).then(respuesta2 => {
				editarEmpresaNueva(idEmpresa, respuesta.data, respuesta2.data);
			}).catch(error => {
				console.error(error);
			});
		}).catch(error => {
			console.error(error);
		});
	}
};

const editarEmpresaNueva = (idEmpresa, imagenPortada, imagenPerfil) => {
	let nombre = document.getElementById('Input-Editar-Nombre-Empresa').value;
	let descripcion = document.getElementById('Input-Editar-Descripcion-Empresa').value;
	let email = document.getElementById('Input-Editar-Email-Empresa').value;
	let telefono = document.getElementById('Input-Editar-Telefono-Empresa').value; 
	console.log(imagenPortada);

	let empresaActualizada = {
		"nombre": nombre,
		"descripcion": descripcion,
		"email": email,
		"telefono": telefono,
		"valoracion": 5,
		"imagenPortada": imagenPortada,
		"imagenPerfil": imagenPerfil
	}
	axios({
		method: 'PUT',
		url: urlEmpresas + `?id=${idEmpresa}`,
		responseType: 'json',
		data: empresaActualizada
	}).then(respuesta => {
		location.reload();
	}).catch(error => {
		console.error(error);
	});
};

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

function guardarNuevosCambiosEmpresa(idEmpresa){
	document.getElementById("Input-Editar-Nombre-Empresa").setAttribute("readonly", true);
	document.getElementById("Input-Editar-Descripcion-Empresa").setAttribute("readonly", true);
	document.getElementById("Input-Editar-Email-Empresa").setAttribute("readonly", true);
	document.getElementById("Input-Editar-Telefono-Empresa").setAttribute("readonly", true);
	editarEmpresaNuevaImagen(idEmpresa);
}

const editarProductoNuevoImagen = (idProducto, idEmpresa) => {
	let elegido = document.getElementById('Custom-File-Input');
	let form = document.getElementById('Formulario-Imagen-Productos');
	let productoSeleccionado = productos.find(producto => producto.id === idProducto);
	form.addEventListener('submit', (e) => {
		e.preventDefault();
	});
	let data = new FormData(form);
	console.log(elegido.value);
	if(!elegido.value){
		editarProductoNuevo(idProducto, idEmpresa, productoSeleccionado.imagen);
	}else{
		axios({
			method: 'POST',
			url: urlImagenes,
			data: data
		}).then(respuesta => {
			editarProductoNuevo(idProducto, idEmpresa, respuesta.data);
		}).catch(error => {
			console.error(error);
		});
	}
};

const editarProductoNuevo = (idProducto, idEmpresa, imagenProducto) => {
	let nombreCategoria = document.getElementById('Id-Option-Categoria').value;	
	let categoriaSeleccionada = categorias.find(categoria => categoria.nombre === nombreCategoria);
	
	let nombre = document.getElementById('Input-Editar-Nombre-Producto').value;

	let descripcion = document.getElementById('Input-Editar-Descripcion-Producto').value;
	
	let precio = parseFloat(document.getElementById('Input-Editar-Precio-Producto').value);
	
	let productoNuevo = {
		"nombre": nombre,
		"empresa": idEmpresa,
		"categoria": categoriaSeleccionada.id,
		"descripcion": descripcion,
		"precio": precio,
		"valoracion": 5,
		"imagenPerfil": imagenProducto,
	}

	axios({
		method: 'PUT',
		url: urlProductos + `?id=${idProducto}`,
		responseType: 'json',
		data: productoNuevo
	}).then(respuesta => {
		console.log(respuesta);
		location.reload();
	}).catch(error => {
		console.error(error);
	});
};

// Editar Informacion productos formulario
function editarNombreEmpresaProducto(){
	document.getElementById("Input-Editar-Nombre-Empresa-Producto").removeAttribute("disabled");
}

function editarNombreProducto(){
	document.getElementById("Input-Editar-Nombre-Producto").removeAttribute("readonly");
}

function editarCategoriaProducto(){
	document.getElementById("Id-Option-Categoria").removeAttribute("disabled");
}

function editarDescripcionProducto(){
	document.getElementById("Input-Editar-Descripcion-Producto").removeAttribute("readonly");
}

function editarPrecioProducto(){
	document.getElementById("Input-Editar-Precio-Producto").removeAttribute("readonly");
}

function guardarNuevosCambiosProductos(idProducto, idEmpresa){
	document.getElementById("Input-Editar-Nombre-Producto").setAttribute("readonly", true);
	document.getElementById("Id-Option-Categoria").setAttribute("disabled", true);
	document.getElementById("Input-Editar-Descripcion-Producto").setAttribute("readonly", true);
	document.getElementById("Input-Editar-Precio-Producto").setAttribute("readonly", true);
	// document.getElementById("Input-Editar-Descuento-Producto").setAttribute("readonly", true);
	editarProductoNuevoImagen(idProducto, idEmpresa);
}

mostrarRepartidores();