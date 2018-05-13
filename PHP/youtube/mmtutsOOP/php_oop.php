
<?php 
	include('includes/newclass.inc.php');

?>
<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
<?php 
	

	$user = new Users("john","doe","brown","blue" );
	echo $users->fullName();

	

?>
</body>
</html>