// SUPONGAMOS QUE EL REPARTIDOR QUE USA LA APP ES EL REPARTIDOR CON ID rep4
let repartidorActual = "rep1";

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
					<input readonly type="text" name="" id="Input-Editar-Nombre" placeholder="${infoRepartidor.username}">
							
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

function verDetallesPedido(idOrden){
	document.getElementById('Contenido-Principal-Cards').innerHTML = '';
	const ordenSeleccionada = ordenes.find(orden => idOrden === orden.id);
	const productoSeleccionado = productos.find(producto => ordenSeleccionada.pedido === producto.id);
	const empresaSeleccionada = empresas.find(empresa => productoSeleccionado.empresa === empresa.id);
	const clienteSeleccionado = clientes.find(cliente => cliente.id === ordenSeleccionada.cliente);
	const categoriaSeleccionada = categorias.find(categoria => categoria.id === productoSeleccionado.categoria);

	console.log(productoSeleccionado);

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
				<h2 class="Texto-Detalles-Orden Texto-Detalles-Orden-Titulo"> Subtotal </h2>
				<h2 class="Texto-Detalles-Orden"> Falta Calcular$ </h2>
			</div>
			<div class="Contenido-Detalles-Orden">
				<h2 class="Texto-Detalles-Orden Texto-Detalles-Orden-Titulo"> Total </h2>
				<h2 class="Texto-Detalles-Orden"> Falta Calcular$ </h2>
			</div>
			<div class="Contenido-Detalles-Orden">
				<h2 class="Texto-Detalles-Orden Texto-Detalles-Orden-Titulo"> Comision Elica </h2>
				<h2 class="Texto-Detalles-Orden"> Falta calcular% </h2>
			</div>
			<div class="Contenido-Detalles-Orden">
				<h2 class="Texto-Detalles-Orden Texto-Detalles-Orden-Titulo"> Ganancias repartidor </h2>
				<h2 class="Texto-Detalles-Orden"> Falta Calcular0$ </h2>
			</div>
					
			<h2 class="Texto-Detalles-Orden Texto-Detalles-Orden-Titulo"> Cliente </h2>
			<h2 class="Texto-Detalles-Orden"> ${clienteSeleccionado.username} </h2>
			<h2 class="Texto-Detalles-Orden Texto-Detalles-Orden-Titulo"> Direccion de envio </h2>
			<h2 class="Texto-Detalles-Orden"> ${ordenSeleccionada.direccion} </h2>
			<div class="Contenedor-Detalles-Orden-Btn">
				<button class="btn-success Btn-Save" id="Btn-Guardar-Cambios-Perfil"> Tomar Orden </button> 	
			</div>
		</div>		
	`;
}

function mostrarOrdenes(){
	document.getElementById('Contenido-Principal-Cards').innerHTML = '';
	
	ordenes.forEach(orden => {
		const statusOrden = status.find(item => orden.statusRepartidor === item.stats);
		const statusPedido = statusOrdenes.find(item => orden.disponibilidad === item.stats);
		const nombreRepartidor = repartidores.find(item => orden.repartidor === item.id);
		const clienteSeleccionado = clientes.find(cliente => orden.cliente === cliente.id);
		const productoSeleccionado = productos.find(producto => producto.id === orden.pedido);

		if (orden.statusRepartidor !== 'Tomada') {
			document.getElementById('Contenido-Principal-Cards').innerHTML += `
				<div class="Contenedor-Cards Contenedor-Cards-Productos">
					<div class="Card">
						<div class="Card-Contenido-1 Card-Imagen-Asignar-Productos" >
							<img src="${orden.imagen}" class="Imagen-Usuario">
							<h2 class="Card-Texto Card-Texto-Estado"> <span style="color: ${statusOrden.statsColor}"> ● </span> ${orden.statusRepartidor} </h2>
						</div>
						<div class="Card-Contenido-2" onclick="verDetallesPedido('${orden.id}')">
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
							<h2 class="Card-Texto Card-Texto-Estado"> <span style="color: ${statusOrden.statsColor}"> ● </span> ${orden.statusRepartidor} </h2>
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
						<!-- <button class="btn btn-success rounded-0 Boton-Cards" onclick="asignarRepartidor()" id="Btn-Asignar-Repartidor"> <h2 class="Card-Texto Card-Texto-Boton font-weight-bold"> ASIGNAR A </h2> </button> -->
					</div>
				</div>`;	
		}
	})
}

function cambiarEstado(idOrden){
	let valor = document.getElementById(`disponibilidad-repartidor-${idOrden}`).value;
	// let valor = document.querySelector('#disponibilidad-repartidor option').textContent;
	let ordenSeleccionada = ordenes.find(orden => orden.id === idOrden);
	console.log(valor);
	ordenSeleccionada.disponibilidad = valor;
	console.log(ordenSeleccionada);
	mostrarMisOrdenes();
}

function mostrarMisOrdenes(){
	document.getElementById('Contenido-Principal-Cards').innerHTML = '';

	const ordenesRepartidor = repartidores.find(repartidor => repartidorActual === repartidor.id);
	(ordenesRepartidor.ordenesEntregadas).forEach(orden => {
		let misOrdenesRealizadas = ordenes.find(item => item.id === orden); // Retorna un JSON
		const statusOrden = status.find(item1 => misOrdenesRealizadas.statusRepartidor === item1.stats); 
		const statusPedido = statusOrdenes.find(item2 => misOrdenesRealizadas.disponibilidad === item2.stats);
		const clienteSeleccionado = clientes.find(cliente => cliente.id === misOrdenesRealizadas.cliente);
		const productoSeleccionado = productos.find(producto => producto.id === misOrdenesRealizadas.pedido); 
		let listaEstados = '';

		ordenes.forEach(ordenTomada => {
			if(ordenTomada.id === orden){
				statusOrdenes.forEach(estado => {	
				if (ordenTomada.disponibilidad === estado.stats) {
					listaEstados += `<option value="${estado.stats}" selected> ${estado.stats} </option>`;
				}else{
					listaEstados += `<option value="${estado.stats}"> ${estado.stats} </option>`;
				}
			});
			document.getElementById('Contenido-Principal-Cards').innerHTML += `
				<div class="Contenedor-Cards">
					<div class="Card">
						<div class="Card-Contenido-1 Card-Imagen-Asignar-Productos" >
							<img src="${misOrdenesRealizadas.imagen}" class="Imagen-Usuario">
							<h2 class="Card-Texto Card-Texto-Estado"> <span style="color: ${statusOrden.statsColor}"> ● </span> ${misOrdenesRealizadas.statusRepartidor} </h2>
						</div>
						<div class="Card-Contenido-2">
							<h2 class="Card-Texto Card-Texto-Contenido Card-Texto-Nombre"> ${productoSeleccionado.nombre} </h2>
							<h2 class="Card-Texto Card-Texto-Contenido Card-Texto-Descripcion"> ${misOrdenesRealizadas.descripcion} </h2>
							<h2 class="Card-Texto Card-Texto-Contenido Card-Texto-Direccion"> ${misOrdenesRealizadas.direccion} </h2>
							<h2 class="Card-Texto Card-Texto-Contenido Card-Texto-Pedido-Por"> Pedido por: ${clienteSeleccionado.username}</h2>
							<h2 class="Card-Texto Card-Texto-Contenido Card-Texto-Repartido-Por"> Repartido por: ${ordenesRepartidor.username} </h2>
							<div class="Card-Contenedor-Cantidad">
								<h2 class="Card-Texto Contenedor-Cantidad-Numero"> ${misOrdenesRealizadas.cantidad} </h2>
								<h2 class="Card-Texto Contenedor-Cantidad-Texto"> Cantidad </h2>
							</div>
						</div>
						<div class="Card-Contenido-3">
							<h2 class="Card-Texto Card-Texto-Titulo-Contenido-3"> Precio </h2>
							<h2 class="Card-Texto Card-Texto-Contenido-3"> ${misOrdenesRealizadas.precio}L </h2>
							<h2 class="Card-Texto Card-Texto-Estado"> <span style="color: ${statusPedido.statsColor}"> ● </span> <select class="font-weight-bold" name="select" id="disponibilidad-repartidor-${misOrdenesRealizadas.id}" onclick="cambiarEstado('${misOrdenesRealizadas.id}')"> ${listaEstados} </select> </h2>
						</div>
					</div>
					<div class="Cards-Botones">
							
					</div>
				</div>
			`;
			}
		});
	});
}

function ordenesDisponibles(){
	document.getElementById('Contenido-Principal-Cards').innerHTML = '';
	const ordenesNoTomadas = ordenes.filter(orden => orden.statusRepartidor === "No tomada");
	ordenesNoTomadas.forEach(ordenNoTomada => {
		const statusOrden = status.find(item => ordenNoTomada.statusRepartidor === item.stats);
		const statusPedido = statusOrdenes.find(item => ordenNoTomada.disponibilidad === item.stats);
		const nombreRepartidor = repartidores.find(item => ordenNoTomada.repartidor === item.id);
		const clienteSeleccionado = clientes.find(cliente => cliente.id === ordenNoTomada.cliente);
		const productoSeleccionado = productos.find(producto => producto.id === ordenNoTomada.pedido);

		document.getElementById('Contenido-Principal-Cards').innerHTML += `
			<div class="Contenedor-Cards Contenedor-Cards-Productos" onclick="verDetallesPedido('${ordenNoTomada.id}')">
				<div class="Card">
					<div class="Card-Contenido-1 Card-Imagen-Asignar-Productos" >
						<img src="${ordenNoTomada.imagen}" class="Imagen-Usuario">
						<h2 class="Card-Texto Card-Texto-Estado"> <span style="color: ${statusOrden.statsColor}"> ● </span> ${ordenNoTomada.statusRepartidor} </h2>
					</div>
					<div class="Card-Contenido-2">
						<h2 class="Card-Texto Card-Texto-Contenido Card-Texto-Nombre"> ${productoSeleccionado.nombre} </h2>
						<h2 class="Card-Texto Card-Texto-Contenido Card-Texto-Descripcion"> ${ordenNoTomada.descripcion} </h2>
						<h2 class="Card-Texto Card-Texto-Contenido Card-Texto-Direccion"> ${ordenNoTomada.direccion} </h2>
						<h2 class="Card-Texto Card-Texto-Contenido Card-Texto-Pedido-Por"> Pedido por: ${clienteSeleccionado.username} </h2>
						<h2 class="Card-Texto Card-Texto-Contenido Card-Texto-Repartido-Por"> Repartido por: ${nombreRepartidor.username} </h2>
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
			const statusPedido = statusOrdenes.find(item => ordenTomada.disponibilidad === item.stats);
			const nombreRepartidor = repartidores.find(item => ordenTomada.repartidor === item.id);
			const clienteSeleccionado = clientes.find(cliente => cliente.id === ordenTomada.cliente);
			const productoSeleccionado = productos.find(producto => producto.id === ordenTomada.pedido);

			document.getElementById('Contenido-Principal-Cards').innerHTML += `
				<div class="Contenedor-Cards">
					<div class="Card">
						<div class="Card-Contenido-1 Card-Imagen-Asignar-Productos" >
							<img src="${ordenTomada.imagen}" class="Imagen-Usuario">
							<h2 class="Card-Texto Card-Texto-Estado"> <span style="color: ${statusOrden.statsColor}"> ● </span> ${ordenTomada.statusRepartidor} </h2>
						</div>
						<div class="Card-Contenido-2">
							<h2 class="Card-Texto Card-Texto-Contenido Card-Texto-Nombre"> ${productoSeleccionado.nombre} </h2>
							<h2 class="Card-Texto Card-Texto-Contenido Card-Texto-Descripcion"> ${ordenTomada.descripcion} </h2>
							<h2 class="Card-Texto Card-Texto-Contenido Card-Texto-Direccion"> ${ordenTomada.direccion} </h2>
							<h2 class="Card-Texto Card-Texto-Contenido Card-Texto-Pedido-Por"> Pedido por: ${clienteSeleccionado.username} </h2>
							<h2 class="Card-Texto Card-Texto-Contenido Card-Texto-Repartido-Por"> Repartido por: ${nombreRepartidor.username} </h2>
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

// function editarDescuentoProducto(){
// 	document.getElementById("Input-Editar-Descuento-Producto").removeAttribute("readonly");
// }

function guardarNuevosCambiosProductos(){
	document.getElementById("Input-Editar-Nombre-Empresa-Producto").setAttribute("readonly", true);
	document.getElementById("Input-Editar-Nombre-Producto").setAttribute("readonly", true);
	document.getElementById("Input-Editar-Categoria-Producto").setAttribute("readonly", true);
	document.getElementById("Input-Editar-Descripcion-Producto").setAttribute("readonly", true);
	document.getElementById("Input-Editar-Precio-Producto").setAttribute("readonly", true);
	// document.getElementById("Input-Editar-Descuento-Producto").setAttribute("readonly", true);
}
mostrarOrdenes();