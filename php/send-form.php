<?php

require_once "connect-db.php";
require_once "utils.php";


$fileTmpPath = $_FILES['transcript']['tmp_name'];
$fileName = $_FILES['transcript']['name'];
$fileSize = $_FILES['transcript']['size'];
$fileType = $_FILES['transcript']['type'];
$fileNameCmps = explode(".", $fileName);
$fileExtension = strtolower(end($fileNameCmps));
$newFileName = md5(time() . $fileName) . '.' . $fileExtension;
$uploadFileDir = './transcripts/';
$dest_path = $uploadFileDir . $newFileName;

move_uploaded_file($fileTmpPath, $dest_path);

$student = json_decode($_POST["student"]);
$query = "INSERT INTO ncaadmit_students("
	. " `name`, `parent1`, `parent2`, `phone`, `email`, `grade`,"
	. " `transcript`, `date`, `essay`"
	. ") VALUES ("
	. "'" . mysqli_real_escape_string($conn, $student->name) . "', "
	. "'" . mysqli_real_escape_string($conn, $student->parent1) . "', "
	. "'" . mysqli_real_escape_string($conn, $student->parent2) . "', "
	. "'" . mysqli_real_escape_string($conn, $student->phone) . "', "
	. "'" . mysqli_real_escape_string($conn, $student->email) . "', "
	. "'" . mysqli_real_escape_string($conn, $student->grade) . "', "
	. "'" . mysqli_real_escape_string($conn, $newFileName) . "', "
	. "'" . mysqli_real_escape_string($conn, $student->date) . "', "
	. "'" . mysqli_real_escape_string($conn, $student->essay) . "') ";
mysqli_query($conn, $query);
die(print_op_success());

?>
