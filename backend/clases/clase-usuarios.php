<?php
	class Usuario{
		private $username;
		private $email;
		private $password;
		private $telefono;
		private $ciudad;
		private $imagen;

		function __construct($username, $email, $password, $telefono = 0, $ciudad="", $imagen = ""){
			$this->username = $username;
			$this->email = $email;
			$this->password = $password;
			$this->telefono = $telefono;
			$this->ciudad = $ciudad;
			$this->imagen = $imagen;
		}
	}
	
?>