<?php

require_once "connect-db.php";
require_once "utils.php";

$query = "SELECT * FROM ncaadmit_students";
$result = mysqli_query($conn, $query) or die("cheger again abo");
$students = [];

while($row = mysqli_fetch_assoc($result)) {
	$row = (object) $row;
	array_push($students, (object) [
		"name" => $row->name,
		"grade" => $row->grade,
		"parent1" => $row->parent1,
		"parent2" => $row->parent2,
		"phone" => $row->phone,
		"email" => $row->email,
		"essay" => $row->essay,
		"date" => $row->date,
		"transcript" => $row->transcript,
	]);
}

mysqli_close($conn);
die(print_data_success($students));

?>
