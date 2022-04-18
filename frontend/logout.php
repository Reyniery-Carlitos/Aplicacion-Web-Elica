<?php
	session_start();
	session_destroy();
	setcookie("token", '', time() -1, "/");
	setcookie("id", '', time() -1, "/");
	setcookie("username", '', time() -1, "/");
	setcookie("email", '', time() -1, "/");

	header("Location: index.html");
?>