<?php 
error_reporting(E_ALL);
ini_set('display_errors', 'On');


spl_autoload_register(function($class_name){
	include $class_name . '.php';
});

// include 'foo.php';
// include 'bar.php';

$foo = new Foo;
$bar = new Bar;

$bar->sayHello();

?>