let clienteActual = 'cl3';
urlClientes = "../backend/api/clientes.php";
urlCategorias = "../backend/api/categorias.php";
urlProductos = "../backend/api/productos.php";
urlEmpresas = "../backend/api/empresas.php";
urlOrdenes = "../backend/api/ordenes.php";
var clientes = [];
var categorias = [];
var productos = [];
var empresas = [];
var ordenes = [];

function generarPerfil(){
	// document.getElementById("Menu-Opciones-Principal").classList.remove('Lista-Opciones-Show');	
	document.getElementById("Contenedor-Principal-Formulario").classList.toggle('Contenedor-Formulario-Show');
}

function rellenarFormularioUsuario(){
	console.log(clientes);
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
			<input readonly type="text" name="Username" id="Input-Editar-Nombre" value="${infoClienteActual.username}"">
						
			<div class="Formulario-Contenedor-Texto">
				<label for=""> Email </label>
				<a href="#" onclick="editarEmail()"> <h2 class="Editar"> Editar </h2> </a>
			</div>
			<input readonly type="email" name="Email" id="Input-Editar-Email" value="${infoClienteActual.email}">
						
			<div class="Formulario-Contenedor-Texto">
				<label for=""> Telefono </label>
				<a href="#" onclick="editarTelefono()"> <h2 class="Editar"> Editar </h2> </a>
			</div>
			<input readonly type="text" id="Input-Editar-Telefono" name="Telefono" value="${infoClienteActual.telefono}">
						
			<div class="Formulario-Contenedor-Texto">
				<label for=""> Password </label>
				<a href="#" onclick="editarPassword()"> <h2 class="Editar"> Editar </h2> </a>
			</div>
			<input readonly type="Password" id="Input-Editar-Password" name="Password" value="${infoClienteActual.password}">
						
			<div class="Formulario-Contenedor-Texto">
				<button class="btn-success Btn-Save" id="Btn-Guardar-Cambios-Perfil" onclick="guardarNuevosCambios()"> Save </button> 	
			</div>
		</div>
	`;
}

function obtenerInfoCliente(){
	axios({
		method: 'GET',
		url: urlClientes,
		responseType: 'json'
	}).then(respuesta => {
		clientes = respuesta.data;
		rellenarFormularioUsuario();
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
		mostrarCategorias();
		console.log(categorias);
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
		console.log(productos);
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
		console.log(empresas);
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
		console.log(respuesta);
		ordenes = respuesta.data;
	}).catch(error => {
		console.error(error);
	})
}

obtenerOrdenes();

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

const crearOrden = (idProducto) => {
	const productoSeleccionado = productos.find(producto => idProducto === producto.id);

	let orden = {
		"pedido": idProducto,
		"descripcion": productoSeleccionado.descripcion,
		"disponibilidad": "No entregada",
		"status": "No asignada",
		"statusRepartidor": "No tomada",
		"cliente": clienteActual,
		"repartidor": "No asignado",
		"cantidad": parseInt(document.getElementById('cantidad-pedir').value),
		"direccion": "Col. Ulloa",
		"imagen": "assets/img/1.webp" 
	}
	console.log(orden);

	// axios({
	// 	method: 'POST',
	// 	url: urlOrdenes,
	// 	responseType: 'json',
	// 	data: orden
	// }).then(respuesta => {

	// })/catch(error => {
	// 	console.error(error);
	// })
}

function pedirOrden(idProducto){
	document.getElementById('Contenido-Principal-Cards').innerHTML = '';
	const productoSeleccionado = productos.find(producto => idProducto === producto.id);
	const empresaSeleccionada = empresas.find(empresa => productoSeleccionado.empresa === empresa.id);
	const categoriaSeleccionada = categorias.find(categoria => categoria.id === productoSeleccionado.categoria);

	document.getElementById('Contenido-Principal-Cards').innerHTML += `
		<div class="Contenedor-Detalles-Orden">
			<img src="${productoSeleccionado.imagenPerfil}" class="Imagen-Detalles-Orden" alt="Imagen Banner">
			<h2 class="Texto-Detalles-Orden Texto-Detalles-Orden-Titulo"> Nombre Producto </h2>
			<h2 class="Texto-Detalles-Orden"> ${productoSeleccionado.nombre} </h2>
			<h2 class="Texto-Detalles-Orden Texto-Detalles-Orden-Titulo"> Empresa </h2>
			<h2 class="Texto-Detalles-Orden"> ${empresaSeleccionada.nombre} </h2>
			<h2 class="Texto-Detalles-Orden Texto-Detalles-Orden-Titulo"> Categoria </h2>
			<h2 class="Texto-Detalles-Orden"> ${categoriaSeleccionada.nombre} </h2>
			<h2 class="Texto-Detalles-Orden Texto-Detalles-Orden-Titulo"> Descripcion </h2>
			<h2 class="Texto-Detalles-Orden"> ${productoSeleccionado.descripcion} </h2>
			<div class="Contenido-Detalles-Orden">
				<h2 class="Texto-Detalles-Orden Texto-Detalles-Orden-Titulo"> Precio </h2>
				<h2 class="Texto-Detalles-Orden"> ${productoSeleccionado.precio}L </h2>
			</div>
			<div class="Contenido-Detalles-Orden">
				<h2 class="Texto-Detalles-Orden Texto-Detalles-Orden-Titulo"> Cantidad </h2>
				<input type="number" class="font-weight-bold" style="border: none; width: 15%;" id="cantidad-pedir" value="1">
			</div>
					
			<h2 class="Texto-Detalles-Orden Texto-Detalles-Orden-Titulo"> Repartidor </h2>
			<h2 class="Texto-Detalles-Orden"> Sin asignar </h2>
			<h2 class="Texto-Detalles-Orden Texto-Detalles-Orden-Titulo"> Direccion de envio </h2>
			<h2 class="Texto-Detalles-Orden"> Falta </h2>
			<div class="Contenedor-Detalles-Orden-Btn">
				<button class="btn-danger Btn-Save" id="" onclick="crearOrden('${idProducto}')"> Pedir </button> 	
			</div>
		</div>		
	`;
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
						</div>
					</div>
					<div class="Card-Contenido-3">
						<h2 class="Card-Texto Card-Texto-Titulo-Contenido-3"> Precio </h2>
						<h2 class="Card-Texto Card-Texto-Contenido-3"> ${producto.precio}L </h2>
					</div>
				</div>
				<div class="Cards-Botones">
					<button class="btn btn-success rounded-0 Boton-Cards" id="Btn-Asignar-Repartidor" onclick="pedirOrden('${producto.id}')"> <h2 class="Card-Texto Card-Texto-Boton font-weight-bold"> PEDIR </h2> </button>
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
			const statusPedido = statusOrdenes.find(item => listaOrdenes.disponibilidad === item.stats);
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
				<h2 class="Texto-Detalles-Orden Texto-Detalles-Orden-Titulo"> Total </h2>
				<h2 class="Texto-Detalles-Orden"> ${ordenSeleccionada.total}$ </h2>
			</div>
					
			<h2 class="Texto-Detalles-Orden Texto-Detalles-Orden-Titulo"> Repartidor </h2>
			<h2 class="Texto-Detalles-Orden"> ${repartidorSeleccionado.username} </h2>
			<h2 class="Texto-Detalles-Orden Texto-Detalles-Orden-Titulo"> Direccion de envio </h2>
			<h2 class="Texto-Detalles-Orden"> ${ordenSeleccionada.direccion} </h2>
			<div class="Contenedor-Detalles-Orden-Btn">
				<button class="btn-danger Btn-Save" id="" onclick="carrito()"> Cerrar </button> 	
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

// const guardarNuevosCambios = document.getElementById('Btn-Guardar-Cambios-Perfil');
// guardarNuevosCambios.addEventListener('click', () => {
// 	document.getElementById("Input-Editar-Nombre").setAttribute("readonly", true);
// 	document.getElementById("Input-Editar-Email").setAttribute("readonly", true);
// 	document.getElementById("Input-Editar-Telefono").setAttribute("readonly", true);
// 	document.getElementById("Input-Editar-Password").setAttribute("readonly", true);
// });

function modificarInfoCliente(){
	let username = document.getElementById('Input-Editar-Nombre').value;
	let email = document.getElementById('Input-Editar-Email').value;
	let password = document.getElementById('Input-Editar-Password').value;
	let telefono = document.getElementById('Input-Editar-Telefono').value;

	let clienteModificado = {
		"username": username,
		"email": email,
		"password": password,
		"telefono": telefono,
		"ciudad": "",
		"imagen": "assets/img/1.webp"	
	}

	axios({
		method: 'PUT',
		url: urlClientes + `?id=${clienteActual}`,
		responseType: 'json',
		data: clienteModificado
	}).then(respuesta => {
		obtenerInfoCliente();
	}).catch(error => {
		console.error(error);
	})
}


function guardarNuevosCambios(){
	document.getElementById("Input-Editar-Nombre").setAttribute("readonly", true);
	document.getElementById("Input-Editar-Email").setAttribute("readonly", true);
	document.getElementById("Input-Editar-Telefono").setAttribute("readonly", true);
	document.getElementById("Input-Editar-Password").setAttribute("readonly", true);
	modificarInfoCliente(clienteActual);
}

// mostrarProductos();