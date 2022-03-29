const expresiones = {
	username: /^[a-zA-Z0-9\_\-]{4,16}$/,
	password: /^.{4,20}$/,
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{8}$/,
}

const detalles = {
	username: false,
	email: false,
	password: false,
	//telefono = false,
}

let formulario = '';
let inputsForm = '';

const btnSubmitValidaciones = () => {
	formulario.addEventListener('submit', (e) => {
		e.preventDefault();
	})
	const detalles2 = Object.values(detalles);
	const buscar = detalles2.find(item => item === false);
	if(buscar == false){
		console.log('Llene las ondas chiki');
	} else{
		console.log('Esa onda compa');
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
	const detalles2 = Object.values(detallesRepartidores);
	const buscar = detalles2.find(item => item === false);
	if(buscar == false){
		console.log('Llene las ondas chiki');
	} else{
		console.log('Esa onda compa');
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
		case "telefono":
			if (expresiones.telefono.test(e.target.value)) {
				document.getElementById('Input-Individual-Telefono').classList.remove('Validar-Incorrecto');
				document.getElementById('Input-Individual-Telefono').classList.add('Validar-Correcto');
				document.getElementById('Icono-Validar-Incorrecto-Telefono').style.display = 'none';
				document.getElementById('Icono-Validar-Correcto-Telefono').style.display = 'inline';
				detalles['email'] = true;
			}else{
				document.getElementById('Input-Individual-Telefono').classList.remove('Validar-Correcto');
				document.getElementById('Input-Individual-Telefono').classList.add('Validar-Incorrecto');
				document.getElementById('Icono-Validar-Correcto-Telefono').style.display = 'none';
				document.getElementById('Icono-Validar-Incorrecto-Telefono').style.display = 'inline';
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