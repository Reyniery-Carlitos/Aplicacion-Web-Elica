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
		disponibilidad: "Disponible",
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
		disponibilidad: "No disponible",
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
		disponibilidad: "En proceso",
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
		disponibilidad: "Disponible",
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
		disponibilidad: "No disponible",
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
		disponibilidad: "En proceso",
		ordenesEntregadas: [
			"ord2",
			"ord4"
		],
		imagen: "assets/img/1.webp"
	}	
];

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
	const usuarios = [...repartidores, ...clientes, ...administradores];
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
				const emailIngresado = document.getElementById('Input-Individual-Email').value;
				const emailFiltrado = usuarios.some(emailUsuario => emailUsuario.email === emailIngresado);

				if(emailFiltrado === true){
					document.getElementById('Input-Individual-Email').classList.remove('Validar-Correcto');
					document.getElementById('Input-Individual-Email').classList.add('Validar-Incorrecto');
					document.getElementById('Icono-Validar-Correcto-Email').style.display = 'none';
					document.getElementById('Icono-Validar-Incorrecto-Email').style.display = 'inline';
					detalles['email'] = false;
				}else{
					document.getElementById('Input-Individual-Email').classList.remove('Validar-Incorrecto');
					document.getElementById('Input-Individual-Email').classList.add('Validar-Correcto');
					document.getElementById('Icono-Validar-Incorrecto-Email').style.display = 'none';
					document.getElementById('Icono-Validar-Correcto-Email').style.display = 'inline';
					detalles['email'] = true;
				}
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
	const usuarios = [...repartidores, ...clientes, ...administradores];
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
				const emailIngresado = document.getElementById('Input-Individual-Email').value;
				const emailFiltrado = usuarios.some(emailUsuario => emailUsuario.email === emailIngresado);

				if(emailFiltrado === true){
					document.getElementById('Input-Individual-Email').classList.remove('Validar-Correcto');
					document.getElementById('Input-Individual-Email').classList.add('Validar-Incorrecto');
					document.getElementById('Icono-Validar-Correcto-Email').style.display = 'none';
					document.getElementById('Icono-Validar-Incorrecto-Email').style.display = 'inline';
					detalles['email'] = false;
				}else{
					document.getElementById('Input-Individual-Email').classList.remove('Validar-Incorrecto');
					document.getElementById('Input-Individual-Email').classList.add('Validar-Correcto');
					document.getElementById('Icono-Validar-Incorrecto-Email').style.display = 'none';
					document.getElementById('Icono-Validar-Correcto-Email').style.display = 'inline';
					detalles['email'] = true;
				}
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

const validacionLogin = () => {
	const formulario = document.getElementById('Formulario');
	const usuarios = [...clientes, ...administradores, ...repartidores];

	const emailLogin = document.getElementById('Input-Individual-Email').value;
	const passwordLogin = document.getElementById('Input-Individual-Password').value;

	const usuarioValidado = usuarios.some(usuario => usuario.email === emailLogin && usuario.password === passwordLogin);
	if(usuarioValidado === true){
		document.getElementById('Id-Span-Invalido').classList.remove('Span-Error-Login-Show');
		document.getElementById('Input-Individual-Email').classList.remove('Validar-Incorrecto');
		document.getElementById('Input-Individual-Password').classList.remove('Validar-Incorrecto');
		document.getElementById('Input-Individual-Email').classList.add('Validar-Correcto');
		document.getElementById('Input-Individual-Password').classList.add('Validar-Correcto');
		document.getElementById('Icono-Validar-Correcto-Email').style.display = 'inline';
		document.getElementById('Icono-Validar-Correcto-Password').style.display = 'inline';
		document.getElementById('Icono-Validar-Incorrecto-Email').style.display = 'none';
		document.getElementById('Icono-Validar-Incorrecto-Password').style.display = 'none';	
	}else{
		document.getElementById('Id-Span-Invalido').classList.add('Span-Error-Login-Show');
		document.getElementById('Input-Individual-Email').classList.remove('Validar-Correcto');
		document.getElementById('Input-Individual-Password').classList.remove('Validar-Correcto');
		document.getElementById('Input-Individual-Email').classList.add('Validar-Incorrecto');
		document.getElementById('Input-Individual-Password').classList.add('Validar-Incorrecto');
		document.getElementById('Icono-Validar-Incorrecto-Email').style.display = 'inline';
		document.getElementById('Icono-Validar-Incorrecto-Password').style.display = 'inline';
		document.getElementById('Icono-Validar-Correcto-Email').style.display = 'none';
		document.getElementById('Icono-Validar-Correcto-Password').style.display = 'none';	
	}

	formulario.addEventListener('submit', (e) => {
		e.preventDefault();
	})
}