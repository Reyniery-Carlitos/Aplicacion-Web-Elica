<?php
	if (isset($_FILES['file'])) {
		$file = $_FILES['file'];
		$filename = $file['name'];
		$filetype= $file['type'];

		$tiposPermitidos = array("image/jpg", "image/jpeg", "image/png", "image/webp");
		if(!in_array($filetype, $tiposPermitidos)){
			echo "Archivo no valido";
		}

		if(!is_dir("frontend/assets/img")){
			mkdir("frontend/assets/img", 0777);
		}

		move_uploaded_file($file["tmp_name"], "frontend/assets/img/".$filename);
	}

?>