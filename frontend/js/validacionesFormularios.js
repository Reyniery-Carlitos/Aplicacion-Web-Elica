const urlClientes = "../backend/api/clientes.php";
const urlRepartidores = "../backend/api/repartidores.php";
const urlLoginClientes = "../backend/api/loginClientes.php";
const urlLoginRepartidores = "../backend/api/loginRepartidores.php";
const urlLoginAdministradores = "../backend/api/loginAdministradores.php";

// username: /^[a-zA-Z0-9\_\-]{4,16}$/,
// username: /^(?=.*\d)((.)\2?(?!\2))+.{8,}$/,
const expresiones = {
	username: /^[a-zA-Z0-9]+([a-zA-Z0-9](_|-| )[a-zA-Z0-9])*[a-zA-Z0-9]+$/,
	password: /^.{4,20}$/,
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{8}$/,
}

const detalles = {
	username: false,
	email: false,
	password: false
	//telefono = false,
}

let formulario = '';
let inputsForm = '';

const btnSubmitValidaciones = () => {
	formulario.addEventListener('submit', (e) => {
		e.preventDefault();
	})

	let emailFiltrado = false;
	const emailIngresado = document.getElementById('Input-Individual-Email').value;
	axios({
		method: 'POST',
		url: "../backend/api/buscarEmail.php",
		responseType: 'json',
		data: {
			'email': emailIngresado
		}
	}).then(respuesta => {
		emailFiltrado = respuesta.data;
		console.log(emailFiltrado);

		if(emailFiltrado === 1 || emailFiltrado === 11 || emailFiltrado === 111){
			console.log("La respuesta del servidor es: " + emailFiltrado);
			document.getElementById('Input-Individual-Email').classList.remove('Validar-Correcto');
			document.getElementById('Input-Individual-Email').classList.add('Validar-Incorrecto');
			document.getElementById('Icono-Validar-Correcto-Email').style.display = 'none';
			document.getElementById('Icono-Validar-Incorrecto-Email').style.display = 'inline';
			detallesRepartidores['email'] = false;
			alert('El email ya existe, por favor ingrese uno nuevo');
		}else {
			crearNuevoCliente();
		}
	}).catch(error => {
		console.error(error);
	});
};

const crearNuevoCliente = () => {
	let nombre = document.getElementById('Input-Individual-Username').value;
	let email = document.getElementById('Input-Individual-Email').value;
	// let telefono = document.getElementById('Input-Individual-Telefono').value;
	let password = document.getElementById('Input-Individual-Password').value;

	const detalles2 = Object.values(detalles);
	const buscar = detalles2.find(item => item === false);
	if(buscar == false){
		alert("Datos incorrectos");
	} else{
		let datosCliente = {
			"username": nombre,
			"email": email,
			"password": password,
			"telefono": 0,
			"ciudad": "",
			"imagen": "assets/img/1.webp" 
		}
		axios({
			method: 'POST',
			url: urlClientes,
			responseType: 'json',
			data: datosCliente
		}).then(respuesta => {
			console.log(respuesta.data);
		}).catch(error => {
			console.error(error);
		})
	}
};

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "username":
			if (expresiones.username.test(e.target.value)) {
				document.getElementById('Input-Individual-Username').classList.remove('Validar-Incorrecto');
				document.getElementById('Input-Individual-Username').classList.add('Validar-Correcto');
				document.getElementById('Icono-Validar-Incorrecto-Username').style.display = 'none';
				document.getElementById('Icono-Validar-Correcto-Username').style.display = 'inline';
				detalles['username'] = true;
			}else{
				document.getElementById('Input-Individual-Username').classList.remove('Validar-Correcto');
				document.getElementById('Input-Individual-Username').classList.add('Validar-Incorrecto');
				document.getElementById('Icono-Validar-Correcto-Username').style.display = 'none';
				document.getElementById('Icono-Validar-Incorrecto-Username').style.display = 'inline';
				detalles['username'] = false;
			}
		break;
		case "email":
			if (expresiones.email.test(e.target.value)) {
				document.getElementById('Input-Individual-Email').classList.remove('Validar-Incorrecto');
				document.getElementById('Input-Individual-Email').classList.add('Validar-Correcto');
				document.getElementById('Icono-Validar-Incorrecto-Email').style.display = 'none';
				document.getElementById('Icono-Validar-Correcto-Email').style.display = 'inline';
				detalles['email'] = true;
			}else{
				document.getElementById('Input-Individual-Email').classList.remove('Validar-Correcto');
				document.getElementById('Input-Individual-Email').classList.add('Validar-Incorrecto');
				document.getElementById('Icono-Validar-Correcto-Email').style.display = 'none';
				document.getElementById('Icono-Validar-Incorrecto-Email').style.display = 'inline';
				detalles['email'] = false;
			}
		break;
		case "password":
			if (expresiones.password.test(e.target.value)) {
				document.getElementById('Input-Individual-Password').classList.remove('Validar-Incorrecto');
				document.getElementById('Input-Individual-Password').classList.add('Validar-Correcto');
				document.getElementById('Icono-Validar-Incorrecto-Password').style.display = 'none';
				document.getElementById('Icono-Validar-Correcto-Password').style.display = 'inline';
				detalles['password'] = true;
			}else{
				document.getElementById('Input-Individual-Password').classList.remove('Validar-Correcto');
				document.getElementById('Input-Individual-Password').classList.add('Validar-Incorrecto');
				document.getElementById('Icono-Validar-Correcto-Password').style.display = 'none';
				document.getElementById('Icono-Validar-Incorrecto-Password').style.display = 'inline';
				detalles['password'] = false;
			}
		break;
	}
}

const recorrerInputsValidaciones = () => {
	inputsForm.forEach((input) => {
		input.addEventListener("keyup", validarFormulario);
		input.addEventListener('blur', validarFormulario);
	});
}

const validaciones = () => {
	formulario = document.getElementById('Formulario');
	inputsForm = document.querySelectorAll('#Formulario input');
	recorrerInputsValidaciones();
}

const detallesRepartidores = {
	username: false,
	email: false,
	password: false,
	telefono: false,
}

const btnSubmitValidacionesRepartidores = () => {
	formulario.addEventListener('submit', (e) => {
		e.preventDefault();
	})

	let emailFiltrado = false;
	const emailIngresado = document.getElementById('Input-Individual-Email').value;
	axios({
		method: 'POST',
		url: "../backend/api/buscarEmail.php",
		responseType: 'json',
		data: {
			'email': emailIngresado
		}
	}).then(respuesta => {
		emailFiltrado = respuesta.data;
		console.log(emailFiltrado);

		if(emailFiltrado === 1 || emailFiltrado === 11 || emailFiltrado === 111){
			console.log("La respuesta del servidor es: " + emailFiltrado);
			document.getElementById('Input-Individual-Email').classList.remove('Validar-Correcto');
			document.getElementById('Input-Individual-Email').classList.add('Validar-Incorrecto');
			document.getElementById('Icono-Validar-Correcto-Email').style.display = 'none';
			document.getElementById('Icono-Validar-Incorrecto-Email').style.display = 'inline';
			detallesRepartidores['email'] = false;
			alert('El email ya existe, por favor ingrese uno nuevo');
		}else {
			crearNuevoRepartidor();
		}
	}).catch(error => {
		console.error(error);
	});
};

const crearNuevoRepartidor = () => {
	let nombre = document.getElementById('Input-Individual-Username').value;
	let email = document.getElementById('Input-Individual-Email').value;
	let telefono = document.getElementById('Input-Individual-Telefono').value;
	let password = document.getElementById('Input-Individual-Password').value;
	
	const detalles2 = Object.values(detallesRepartidores);
	const buscar = detalles2.find(item => item === false);
	if(buscar == false){
		alert("Datos incorrectos");
	} else{
		let datosRepartidor = {
			"username": nombre,
			"email": email,
			"password": password,
			"telefono": telefono,
			"ciudad": "",
			"imagen": "assets/img/1.webp",
			"valoracion": 5,
			"status": "Pendiente"
		}
		axios({
			method: 'POST',
			url: urlRepartidores,
			responseType: 'json',
			data: datosRepartidor
		}).then(respuesta => {
			console.log(respuesta.data);
		}).catch(error => {
			console.error(error);
		})
	}
};

const validarFormularioRepartidores = (e) => {
	switch (e.target.name) {
		case "username":
			if (expresiones.username.test(e.target.value)) {
				document.getElementById('Input-Individual-Username').classList.remove('Validar-Incorrecto');
				document.getElementById('Input-Individual-Username').classList.add('Validar-Correcto');
				document.getElementById('Icono-Validar-Incorrecto-Username').style.display = 'none';
				document.getElementById('Icono-Validar-Correcto-Username').style.display = 'inline';
				detallesRepartidores['username'] = true;

			}else{
				document.getElementById('Input-Individual-Username').classList.remove('Validar-Correcto');
				document.getElementById('Input-Individual-Username').classList.add('Validar-Incorrecto');
				document.getElementById('Icono-Validar-Correcto-Username').style.display = 'none';
				document.getElementById('Icono-Validar-Incorrecto-Username').style.display = 'inline';
				detallesRepartidores['username'] = false;
			}
		break;
		case "email":
			if (expresiones.email.test(e.target.value)) {
				document.getElementById('Input-Individual-Email').classList.remove('Validar-Incorrecto');
				document.getElementById('Input-Individual-Email').classList.add('Validar-Correcto');
				document.getElementById('Icono-Validar-Incorrecto-Email').style.display = 'none';
				document.getElementById('Icono-Validar-Correcto-Email').style.display = 'inline';
				detallesRepartidores['email'] = true;
			}else{
				document.getElementById('Input-Individual-Email').classList.remove('Validar-Correcto');
				document.getElementById('Input-Individual-Email').classList.add('Validar-Incorrecto');
				document.getElementById('Icono-Validar-Correcto-Email').style.display = 'none';
				document.getElementById('Icono-Validar-Incorrecto-Email').style.display = 'inline';
				detallesRepartidores['email'] = false;
			}
		break;
		case "telefono":
			if (expresiones.telefono.test(e.target.value)) {
				document.getElementById('Input-Individual-Telefono').classList.remove('Validar-Incorrecto');
				document.getElementById('Input-Individual-Telefono').classList.add('Validar-Correcto');
				document.getElementById('Icono-Validar-Incorrecto-Telefono').style.display = 'none';
				document.getElementById('Icono-Validar-Correcto-Telefono').style.display = 'inline';
				detallesRepartidores['telefono'] = true;
			}else{
				document.getElementById('Input-Individual-Telefono').classList.remove('Validar-Correcto');
				document.getElementById('Input-Individual-Telefono').classList.add('Validar-Incorrecto');
				document.getElementById('Icono-Validar-Correcto-Telefono').style.display = 'none';
				document.getElementById('Icono-Validar-Incorrecto-Telefono').style.display = 'inline';
				detallesRepartidores['telefono'] = false;
			}
		break;
		case "password":
			if (expresiones.password.test(e.target.value)) {
				document.getElementById('Input-Individual-Password').classList.remove('Validar-Incorrecto');
				document.getElementById('Input-Individual-Password').classList.add('Validar-Correcto');
				document.getElementById('Icono-Validar-Incorrecto-Password').style.display = 'none';
				document.getElementById('Icono-Validar-Correcto-Password').style.display = 'inline';
				detallesRepartidores['password'] = true;
			}else{
				document.getElementById('Input-Individual-Password').classList.remove('Validar-Correcto');
				document.getElementById('Input-Individual-Password').classList.add('Validar-Incorrecto');
				document.getElementById('Icono-Validar-Correcto-Password').style.display = 'none';
				document.getElementById('Icono-Validar-Incorrecto-Password').style.display = 'inline';
				detallesRepartidores['password'] = false;
			}
		break;
	}
}

const recorrerInputsValidacionesRepartidores = () => {
	inputsForm.forEach((input) => {
		input.addEventListener("keyup", validarFormularioRepartidores);
		input.addEventListener('blur', validarFormularioRepartidores);
	});
}

const validacionesRepartidores = () => {
	formulario = document.getElementById('Formulario');
	inputsForm = document.querySelectorAll('#Formulario input');
	recorrerInputsValidacionesRepartidores();
}

const validacionLogin = () => {
	const formulario = document.getElementById('Formulario');
	formulario.addEventListener('submit', (e) => {
		e.preventDefault();
	})

	// const usuarios = [...clientes, ...administradores, ...repartidores];

	const emailLogin = document.getElementById('Input-Individual-Email').value;
	const passwordLogin = document.getElementById('Input-Individual-Password').value;
	const tipoSesion = document.getElementById('Tipo-Usuario').value;

	console.log(tipoSesion);
	let dataUsuario = {
		"email": emailLogin,
		"password": passwordLogin,
	}

	console.log(dataUsuario.email);
	console.log(dataUsuario.password);
	if (tipoSesion === 'Cliente'){
		axios({
			method: 'POST',
			url: urlLoginClientes,
			responseType: 'json',
			data: dataUsuario
		}).then(respuesta => {
			if(!respuesta.data){
				console.log('NOOOOO');
				document.getElementById('Id-Span-Invalido').classList.add('Span-Error-Login-Show');
				document.getElementById('Input-Individual-Email').classList.remove('Validar-Correcto');
				document.getElementById('Input-Individual-Password').classList.remove('Validar-Correcto');
				document.getElementById('Input-Individual-Email').classList.add('Validar-Incorrecto');
				document.getElementById('Input-Individual-Password').classList.add('Validar-Incorrecto');
				document.getElementById('Icono-Validar-Incorrecto-Email').style.display = 'inline';
				document.getElementById('Icono-Validar-Incorrecto-Password').style.display = 'inline';
				document.getElementById('Icono-Validar-Correcto-Email').style.display = 'none';
				document.getElementById('Icono-Validar-Correcto-Password').style.display = 'none';	
			}else{
				console.log(respuesta.data);
				document.getElementById('Id-Span-Invalido').classList.remove('Span-Error-Login-Show');
				document.getElementById('Input-Individual-Email').classList.remove('Validar-Incorrecto');
				document.getElementById('Input-Individual-Password').classList.remove('Validar-Incorrecto');
				document.getElementById('Input-Individual-Email').classList.add('Validar-Correcto');
				document.getElementById('Input-Individual-Password').classList.add('Validar-Correcto');
				document.getElementById('Icono-Validar-Correcto-Email').style.display = 'inline';
				document.getElementById('Icono-Validar-Correcto-Password').style.display = 'inline';
				document.getElementById('Icono-Validar-Incorrecto-Email').style.display = 'none';
				document.getElementById('Icono-Validar-Incorrecto-Password').style.display = 'none';	
				window.location.href = `clientes.php`;
			}
		}).catch(error => {
			console.error(error);
		});
	}else if (tipoSesion === 'Repartidor'){
		axios({
			method: 'POST',
			url: urlLoginRepartidores,
			responseType: 'json',
			data: dataUsuario
		}).then(respuesta => {
			console.log(respuesta.data);
			if(!respuesta.data){
				document.getElementById('Id-Span-Invalido').classList.add('Span-Error-Login-Show');
				document.getElementById('Input-Individual-Email').classList.remove('Validar-Correcto');
				document.getElementById('Input-Individual-Password').classList.remove('Validar-Correcto');
				document.getElementById('Input-Individual-Email').classList.add('Validar-Incorrecto');
				document.getElementById('Input-Individual-Password').classList.add('Validar-Incorrecto');
				document.getElementById('Icono-Validar-Incorrecto-Email').style.display = 'inline';
				document.getElementById('Icono-Validar-Incorrecto-Password').style.display = 'inline';
				document.getElementById('Icono-Validar-Correcto-Email').style.display = 'none';
				document.getElementById('Icono-Validar-Correcto-Password').style.display = 'none';	
			}else{
				document.getElementById('Id-Span-Invalido').classList.remove('Span-Error-Login-Show');
				document.getElementById('Input-Individual-Email').classList.remove('Validar-Incorrecto');
				document.getElementById('Input-Individual-Password').classList.remove('Validar-Incorrecto');
				document.getElementById('Input-Individual-Email').classList.add('Validar-Correcto');
				document.getElementById('Input-Individual-Password').classList.add('Validar-Correcto');
				document.getElementById('Icono-Validar-Correcto-Email').style.display = 'inline';
				document.getElementById('Icono-Validar-Correcto-Password').style.display = 'inline';
				document.getElementById('Icono-Validar-Incorrecto-Email').style.display = 'none';
				document.getElementById('Icono-Validar-Incorrecto-Password').style.display = 'none';	
				window.location.href = "repartidores.php";
			}
		}).catch(error => {
			console.error(error);
		});
	}else if(tipoSesion == "Administrador"){
		console.log("Entro aqui mero admin");
		axios({
			method: 'POST',
			url: urlLoginAdministradores,
			responseType: 'json',
			data: dataUsuario
		}).then(respuesta => {
			console.log(respuesta.data);
			if(!respuesta.data){
				console.log(respuesta.data);
				document.getElementById('Id-Span-Invalido').classList.add('Span-Error-Login-Show');
				document.getElementById('Input-Individual-Email').classList.remove('Validar-Correcto');
				document.getElementById('Input-Individual-Password').classList.remove('Validar-Correcto');
				document.getElementById('Input-Individual-Email').classList.add('Validar-Incorrecto');
				document.getElementById('Input-Individual-Password').classList.add('Validar-Incorrecto');
				document.getElementById('Icono-Validar-Incorrecto-Email').style.display = 'inline';
				document.getElementById('Icono-Validar-Incorrecto-Password').style.display = 'inline';
				document.getElementById('Icono-Validar-Correcto-Email').style.display = 'none';
				document.getElementById('Icono-Validar-Correcto-Password').style.display = 'none';	
			}else{
				document.getElementById('Id-Span-Invalido').classList.remove('Span-Error-Login-Show');
				document.getElementById('Input-Individual-Email').classList.remove('Validar-Incorrecto');
				document.getElementById('Input-Individual-Password').classList.remove('Validar-Incorrecto');
				document.getElementById('Input-Individual-Email').classList.add('Validar-Correcto');
				document.getElementById('Input-Individual-Password').classList.add('Validar-Correcto');
				document.getElementById('Icono-Validar-Correcto-Email').style.display = 'inline';
				document.getElementById('Icono-Validar-Correcto-Password').style.display = 'inline';
				document.getElementById('Icono-Validar-Incorrecto-Email').style.display = 'none';
				document.getElementById('Icono-Validar-Incorrecto-Password').style.display = 'none';	
				window.location.href = "administrativa.php";
			}
		}).catch(error => {
			console.error(error);
		});
	}
}