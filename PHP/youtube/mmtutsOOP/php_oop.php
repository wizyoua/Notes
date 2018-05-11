
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
	$object = new newClass;
	unset($object);
	echo $object->getProperty();

?>
</body>
</html>