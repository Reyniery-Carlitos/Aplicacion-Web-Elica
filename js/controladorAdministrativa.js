function activarMenu(){
	// document.getElementById("Contenedor-Principal-Formulario").classList.remove('Contenedor-Formulario-Show');
	document.getElementById("Menu-Opciones-Principal").classList.toggle('Lista-Opciones-Show');
}

function generarPerfil(){
	// document.getElementById("Menu-Opciones-Principal").classList.remove('Lista-Opciones-Show');	
	document.getElementById("Contenedor-Principal-Formulario").classList.toggle('Contenedor-Formulario-Show');
}

// Funcion para mostrar las cards de los repartidores
function mostrarRepartidores(){
	console.log("Entro aqui");
	document.getElementById("Contenido-Principal-Cards").innerHTML = '';
	document.getElementById("Contenido-Principal-Cards").innerHTML += `
		<div class="Card">
			<div class="Card-Imagen" >
				<img src="assets/img/1.webp" id="Imagen-Usuario">
				<h2 class="Card-Texto Card-Texto-Estado"> <span> ● </span> En Proceso </h2>
			</div>
			<div class="Card-Contenido">
				<h2 class="Card-Texto Card-Texto-Contenido Card-Texto-Nombre"> Nombre </h2>
				<h2 class="Card-Texto Card-Texto-Contenido Card-Texto-Email"> Correo Electronico </h2>
				<h2 class="Card-Texto Card-Texto-Contenido Card-Texto-Residencia"> Residencia </h2>
				<h2 class="Card-Texto Card-Texto-Contenido Card-Texto-Telefono"> Telefono </h2>
				<h2 class="Card-Texto Card-Texto-Contenido Card-Texto-Total"> Total Ordenes Entregadas: #</h2>
			</div>
			<div class="Card-Calificacion">
				<h2 class="Card-Texto Card-Texto-Titulo-Calificacion"> Calificacion </h2>
				<h2 class="Card-Texto Card-Texto-Calificacion"> 0 </h2>
			</div>
		</div>
		<div class="Cards-Botones">
			<button class="btn btn-danger rounded-0 Boton-Cards"> <h2 class="Card-Texto Card-Texto-Boton"> RECHAZAR </h2> </button>
			<button class="btn btn-success rounded-0 Boton-Cards"> <h2 class="Card-Texto Card-Texto-Boton"> ACEPTAR </h2> </button>
		</div>`;
}

//Funcion para mostrar las cards de las empresas
function mostrarEmpresas(){
	document.getElementById('Contenido-Principal-Cards').innerHTML = '';
	document.getElementById('Contenido-Principal-Cards').innerHTML += `
		<div class="Contenedor-Empresas">
			<div class="Card-Empresas">
				<div class="Card-Imagen-Banner" >
					<img src="assets/img/banner.jpg" id="Imagen-Banner-Empresa" alt="Imagen Banner Empresa">
				</div>
				<div class="Card-Contenido-Empresas">
					<div class="Card-Contenido-Texto">
						<h2 class="Card-Texto Card-Texto-Nombre text-success"> Nombre Empresa </h2>
						<h2 class="Card-Texto Card-Texto-Residencia"> Descripcion </h2>
						<h2 class="Card-Texto Card-Texto-Telefono"> <i class="fa-solid fa-star"> </i> <i class="fa-regular fa-star"></i> </h2>
					</div>
					<div class="Card-Imagen-Empresa">
						<img src="assets/img/1.webp" id="Imagen-Miniatura-Empresa">		
					</div>
				</div>
			</div>
		</div>`;
}

function mostrarOrdenes(){
	document.getElementById('Contenido-Principal-Cards').innerHTML = '';
	document.getElementById('Contenido-Principal-Cards').innerHTML = `
		<div class="Card">
			<div class="Card-Imagen Card-Imagen-Asignar-Productos" >
				<img src="assets/img/1.webp" id="Imagen-Usuario">
				<h2 class="Card-Texto Card-Texto-Estado"> <span> ● </span> En Proceso </h2>
			</div>
			<div class="Card-Contenido">
				<h2 class="Card-Texto Card-Texto-Contenido Card-Texto-Nombre"> Nombre Producto </h2>
				<h2 class="Card-Texto Card-Texto-Contenido Card-Texto-Direccion"> Descripcion </h2>
				<h2 class="Card-Texto Card-Texto-Contenido Card-Texto-Direccion"> Direccion </h2>
				<h2 class="Card-Texto Card-Texto-Contenido Card-Texto-Pedido-Por"> Pedido por: Nombre Cliente </h2>
				<h2 class="Card-Texto Card-Texto-Contenido Card-Texto-Repartido-Por"> Repartido por: Nombre Cliente </h2>
				<div class="Contenedor-Cantidad">
					<h2 class="Card-Texto Contenedor-Cantidad-Numero"> # </h2>
					<h2 class="Card-Texto Contenedor-Cantidad-Texto"> Cantidad </h2>
				</div>
			</div>
			<div class="Card-Calificacion">
				<h2 class="Card-Texto Card-Texto-Titulo-Calificacion"> Precio </h2>
				<h2 class="Card-Texto Card-Texto-Calificacion"> 0L </h2>
				<h2 class="Card-Texto Card-Texto-Estado"> <span> ● </span> En Proceso </h2>
			</div>
		</div>
		<div class="Cards-Botones">
			<button class="btn btn-success rounded-0 Boton-Cards" onclick="asignarRepartidor()" id="Btn-Asignar-Repartidor"> <h2 class="Card-Texto Card-Texto-Boton"> ASIGNAR A </h2> </button>
		</div>`;
}

function formularioEditarEmpresa(){
	document.getElementById('Contenido-Principal-Cards').innerHTML = '';
	document.getElementById('Contenido-Principal-Cards').innerHTML = `
		<div class="Contenedor-Formulario-Agregar-Empresa" id="Contenedor-Principal-Formulario-Agregar-Empresa">
			<img src="assets/img/banner.jpg" class="Imagen-Portada-Empresas" id="Imagen-Portada-Formulario-Empresas">
			<img src="assets/img/1.webp" class="Imagen-Perfil-Empresas" id="Imagen-Perfil-Formulario-Empresas">
			<a href="#" class="text-decoration-none"> <h2 class="Editar"> Cambiar Foto Perfil </h2> </a>
			<a href="#" class="text-decoration-none"> <h2 class="Editar"> Cambiar Foto Portada</h2> </a>
						
			<div class="Contenedor-Inputs-Empresas">
			  	<div class="Formulario-Contenedor-Texto">
					<label for=""> Nombre </label>
					<a href="#" onclick="editarNombre()" class="text-decoration-none"> <h2 class="Editar"> Editar </h2> </a>
				</div>
				<input readonly type="text" name="" id="Input-Editar-Nombre-Empresa" placeholder="Nombre Empresa">
						
				<div class="Formulario-Contenedor-Texto">
					<label for=""> Descripcion </label>
					<a href="#" onclick="editarEmail()" class="text-decoration-none"> <h2 class="Editar"> Editar </h2> </a>
				</div>
				<input readonly type="email" name="" id="Input-Editar-Descripcion-Empresa"  placeholder="Descripcion Empresa">

				<div class="Formulario-Contenedor-Texto">
					<label for=""> Email </label>
					<a href="#" onclick="editarEmail()" class="text-decoration-none"> <h2 class="Editar"> Editar </h2> </a>
				</div>
				<input readonly type="email" name="" id="Input-Editar-Email-Empresa"  placeholder="Email">
							
				<div class="Formulario-Contenedor-Texto">
					<label for=""> Telefono </label>
					<a href="#" onclick="editarTelefono()" class="text-decoration-none"> <h2 class="Editar"> Editar </h2> </a>
				</div>
				<input readonly type="text" id="Input-Editar-Telefono-Empresa" name="">
							
				<div class="Formulario-Contenedor-Texto">
					<label for=""> Redes Sociales </label>
					<a href="#" onclick="editarPassword()" class="text-decoration-none"> <h2 class="Editar"> Editar </h2> </a>
				</div>
				<textarea readonly id="Input-Editar-Password" class="border border-0" name=""> </textarea>
							
				<div class="Formulario-Contenedor-Texto">
					<button class="btn-success Btn-Save" id="Btn-Guardar-Cambios-Perfil"> Save </button> 	
				</div>
			</div>
		</div>`;
}

const empresaAEditar = () => {
	formularioEditarEmpresa();
};

function editarEmpresa(){
	document.getElementById('Contenido-Principal-Cards').innerHTML = '';
	document.getElementById('Contenido-Principal-Cards').innerHTML += `
		<div class="Contenedor-Empresas">
			<div class="Card-Empresas" id="Empresa-Para-Editar" onclick="empresaAEditar()">
				<div class="Card-Imagen-Banner" >
					<img src="assets/img/banner.jpg" id="Imagen-Banner-Empresa" alt="Imagen Banner Empresa">
				</div>
				<div class="Card-Contenido-Empresas">
					<div class="Card-Contenido-Texto">
						<h2 class="Card-Texto Card-Texto-Nombre text-success"> Nombre Empresa </h2>
						<h2 class="Card-Texto Card-Texto-Residencia"> Descripcion </h2>
						<h2 class="Card-Texto Card-Texto-Telefono"> <i class="fa-solid fa-star"> </i> <i class="fa-regular fa-star"></i> </h2>
					</div>
					<div class="Card-Imagen-Empresa">
						<img src="assets/img/1.webp" id="Imagen-Miniatura-Empresa">		
					</div>
				</div>
			</div>
		</div>`;
}

function formularioAgregarEmpresa(){
	document.getElementById('Contenido-Principal-Cards').innerHTML = '';
	document.getElementById('Contenido-Principal-Cards').innerHTML = `
		<div class="Contenedor-Formulario-Agregar-Empresa" id="Contenedor-Principal-Formulario-Agregar-Empresa">
			<img src="" class="Imagen-Portada-Empresas" id="Imagen-Portada-Formulario-Empresas">
			<img src="" class="Imagen-Perfil-Empresas" id="Imagen-Perfil-Formulario-Empresas">
			<a href="#" class="text-decoration-none"> <h2 class="Editar"> Cambiar Foto Perfil </h2> </a>
			<a href="#" class="text-decoration-none"> <h2 class="Editar"> Cambiar Foto Portada </h2> </a>
						
			<div class="Contenedor-Inputs-Empresas">
			  	<div class="Formulario-Contenedor-Texto">
					<label for=""> Nombre </label>
					<a href="#" onclick="editarNombre()" class="text-decoration-none"> <h2 class="Editar"> Editar </h2> </a>
				</div>
				<input readonly type="text" name="" id="Input-Editar-Nombre-Empresa" placeholder="Nombre Empresa">
						
				<div class="Formulario-Contenedor-Texto">
					<label for=""> Descripcion </label>
					<a href="#" onclick="editarEmail()" class="text-decoration-none"> <h2 class="Editar"> Editar </h2> </a>
				</div>
				<input readonly type="text" name="" id="Input-Editar-Descripcion-Empresa"  placeholder="Descripcion Empresa">

				<div class="Formulario-Contenedor-Texto">
					<label for=""> Email </label>
					<a href="#" onclick="editarEmail()" class="text-decoration-none"> <h2 class="Editar"> Editar </h2> </a>
				</div>
				<input readonly type="email" name="" id="Input-Editar-Email-Empresa"  placeholder="Email">
							
				<div class="Formulario-Contenedor-Texto">
					<label for=""> Telefono </label>
					<a href="#" onclick="editarTelefono()" class="text-decoration-none"> <h2 class="Editar"> Editar </h2> </a>
				</div>
				<input readonly type="text" id="Input-Editar-Telefono-Empresa" name="">
							
				<div class="Formulario-Contenedor-Texto">
					<label for=""> Redes Sociales </label>
					<a href="#" onclick="editarPassword()" class="text-decoration-none"> <h2 class="Editar"> Editar </h2> </a>
				</div>
				<textarea readonly id="Input-Editar-Password" class="border border-0" name=""> </textarea>
							
				<div class="Formulario-Contenedor-Texto">
					<button class="btn-success Btn-Save" id="Btn-Guardar-Cambios-Perfil"> Save </button> 	
				</div>
			</div>
		</div>`;
}

function formularioAgregarProducto(){
	// Recorrer el JSON y validar si es agregar o editar producto
	document.getElementById('Contenido-Principal-Cards').innerHTML = '';
	document.getElementById('Contenido-Principal-Cards').innerHTML = `
		<div class="Contenedor-Formulario-Agregar-Empresa" id="Contenedor-Principal-Formulario-Agregar-Empresa">
			<img src="" class="Imagen-Portada-Empresas" id="Imagen-Portada-Formulario-Empresas">
			<a href="#" class="text-decoration-none"> <h2 class="Editar"> Cambiar foto de portada </h2> </a>
						
			<div class="Contenedor-Inputs-Empresas">
			  	<div class="Formulario-Contenedor-Texto">
					<label for="Input-Editar-Nombre-Empresa"> Nombre Empresa </label>
					<a href="#" onclick="editarNombre()" class="text-decoration-none"> <h2 class="Editar"> Editar </h2> </a>
				</div>
				<input readonly type="text" name="" id="Input-Editar-Nombre-Empresa" placeholder="Nombre Empresa">
				
				<div class="Formulario-Contenedor-Texto">
					<label for="Input-Editar-Nombre-Producto"> Nombre Producto </label>
					<a href="#" onclick="editarNombre()" class="text-decoration-none"> <h2 class="Editar"> Editar </h2> </a>
				</div>
				<input readonly type="text" name="" id="Input-Editar-Nombre-Pruducto" placeholder="Nombre Producto">		

				<div class="Formulario-Contenedor-Texto">
					<label for="Input-Editar-Nombre-Empresa"> Categoria Producto </label>
					<a href="#" onclick="editarNombre()" class="text-decoration-none"> <h2 class="Editar"> Editar </h2> </a>
				</div>
				<input readonly type="text" name="" id="Input-Editar-Categoria-Producto" placeholder="Categoria Producto">

				<div class="Formulario-Contenedor-Texto">
					<label for=""> Descripcion Producto </label>
					<a href="#" onclick="editarEmail()" class="text-decoration-none"> <h2 class="Editar"> Editar </h2> </a>
				</div>
				<input readonly type="text" name="" id="Input-Editar-Descripcion-Producto"  placeholder="Descripcion Producto">

				<div class="Formulario-Contenedor-Texto">
					<label for=""> Email </label>
					<a href="#" onclick="editarEmail()" class="text-decoration-none"> <h2 class="Editar"> Editar </h2> </a>
				</div>
				<input readonly type="email" name="" id="Input-Editar-Email-Empresa"  placeholder="Email">
							
				<div class="Formulario-Contenedor-Texto">
					<label for=""> Precio </label>
					<a href="#" onclick="editarTelefono()" class="text-decoration-none"> <h2 class="Editar"> Editar </h2> </a>
				</div>
				<input readonly type="number" id="Input-Editar-Precio-Producto" name="">
							
				<div class="Formulario-Contenedor-Texto">
					<label for="Input-Editar-Descuento-Producto"> Descuento </label>
					<a href="#" onclick="editarNombre()" class="text-decoration-none"> <h2 class="Editar"> Editar </h2> </a>
				</div>
				<input readonly type="number" name="" id="Input-Editar-Nombre-Empresa" placeholder="Descuento">
							
				<div class="Formulario-Contenedor-Texto">
					<button class="btn-success Btn-Save" id="Btn-Guardar-Cambios-Perfil"> Save </button> 	
				</div>
			</div>
		</div>`;
}

function formularioEditarProducto(){
	// Recorrer el JSON y validar si es agregar o editar producto
	document.getElementById('Contenido-Principal-Cards').innerHTML = '';
	document.getElementById('Contenido-Principal-Cards').innerHTML = `
		<div class="Contenedor-Formulario-Agregar-Empresa" id="Contenedor-Principal-Formulario-Agregar-Empresa">
			<img src="" class="Imagen-Portada-Empresas" id="Imagen-Portada-Formulario-Empresas">
			<a href="#" class="text-decoration-none"> <h2 class="Editar"> Cambiar foto de portada </h2> </a>
						
			<div class="Contenedor-Inputs-Empresas">
			  	<div class="Formulario-Contenedor-Texto">
					<label for="Input-Editar-Nombre-Empresa"> Nombre Empresa </label>
					<a href="#" onclick="editarNombre()" class="text-decoration-none"> <h2 class="Editar"> Editar </h2> </a>
				</div>
				<input readonly type="text" name="" id="Input-Editar-Nombre-Empresa" placeholder="Nombre Empresa">
				
				<div class="Formulario-Contenedor-Texto">
					<label for="Input-Editar-Nombre-Producto"> Nombre Producto </label>
					<a href="#" onclick="editarNombre()" class="text-decoration-none"> <h2 class="Editar"> Editar </h2> </a>
				</div>
				<input readonly type="text" name="" id="Input-Editar-Nombre-Pruducto" placeholder="Nombre Producto">		

				<div class="Formulario-Contenedor-Texto">
					<label for="Input-Editar-Nombre-Empresa"> Categoria Producto </label>
					<a href="#" onclick="editarNombre()" class="text-decoration-none"> <h2 class="Editar"> Editar </h2> </a>
				</div>
				<input readonly type="text" name="" id="Input-Editar-Categoria-Producto" placeholder="Categoria Producto">

				<div class="Formulario-Contenedor-Texto">
					<label for=""> Descripcion Producto </label>
					<a href="#" onclick="editarEmail()" class="text-decoration-none"> <h2 class="Editar"> Editar </h2> </a>
				</div>
				<input readonly type="text" name="" id="Input-Editar-Descripcion-Producto"  placeholder="Descripcion Producto">

				<div class="Formulario-Contenedor-Texto">
					<label for=""> Email </label>
					<a href="#" onclick="editarEmail()" class="text-decoration-none"> <h2 class="Editar"> Editar </h2> </a>
				</div>
				<input readonly type="email" name="" id="Input-Editar-Email-Empresa"  placeholder="Email">
							
				<div class="Formulario-Contenedor-Texto">
					<label for=""> Precio </label>
					<a href="#" onclick="editarTelefono()" class="text-decoration-none"> <h2 class="Editar"> Editar </h2> </a>
				</div>
				<input readonly type="number" id="Input-Editar-Precio-Producto" name="">
							
				<div class="Formulario-Contenedor-Texto">
					<label for="Input-Editar-Descuento-Producto"> Descuento </label>
					<a href="#" onclick="editarNombre()" class="text-decoration-none"> <h2 class="Editar"> Editar </h2> </a>
				</div>
				<input readonly type="number" name="" id="Input-Editar-Nombre-Empresa" placeholder="Descuento">
							
				<div class="Formulario-Contenedor-Texto">
					<button class="btn-success Btn-Save" id="Btn-Guardar-Cambios-Perfil"> Save </button> 	
				</div>
			</div>
		</div>`;
}

function asignarRepartidor(){
	// Falta hacer un filtro de los usuarios disponibles

	document.getElementById('Contenido-Principal-Cards').innerHTML = '';
	document.getElementById('Contenido-Principal-Cards').innerHTML = `
		<div class="Card">
			<div class="Card-Imagen" >
				<img src="assets/img/1.webp" id="Imagen-Usuario">
				<h2 class="Card-Texto Card-Texto-Estado"> <span> ● </span> En Proceso </h2>
			</div>
			<div class="Card-Contenido">
				<h2 class="Card-Texto Card-Texto-Contenido Card-Texto-Nombre"> Nombre </h2>
				<h2 class="Card-Texto Card-Texto-Contenido Card-Texto-Email"> Correo Electronico </h2>
				<h2 class="Card-Texto Card-Texto-Contenido Card-Texto-Residencia"> Residencia </h2>
				<h2 class="Card-Texto Card-Texto-Contenido Card-Texto-Telefono"> Telefono </h2>
				<h2 class="Card-Texto Card-Texto-Contenido Card-Texto-Total"> Total Ordenes Entregadas: #</h2>
			</div>
			<div class="Card-Calificacion">
				<h2 class="Card-Texto Card-Texto-Titulo-Calificacion"> Calificacion </h2>
				<h2 class="Card-Texto Card-Texto-Calificacion"> 0 </h2>
			</div>
		</div>
		<div class="Cards-Botones">
			<button class="btn btn-primary rounded-0 Boton-Cards"> <h2 class="Card-Texto Card-Texto-Boton"> ASIGNAR </h2> </button>
		</div>`;
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

// mostrarRepartidores();
// mostrarEmpresas();