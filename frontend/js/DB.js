let clientes2 = [
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

let productos2 = [
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

let empresas2 = [
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
		disponibilidad: "Disponible",
		ordenesEntregadas: [
			"ord2",
			"ord4",
			"ord3"
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

let ordenes2 = [
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

const categorias2 = [
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
		// Repartidor
		stats: 'Disponible',
		statsColor: '#35CF00'
	},
	{
		// Repartidor
		stats: 'No disponible',
		statsColor: 'red'
	},
	{
		// Repartidor
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
	}
];

const statusOrdenes = [
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