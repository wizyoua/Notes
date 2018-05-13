<?php 

class newClass {
	
	public $data ="I am a property";
	public $error = "This is the class called new class!";

	//creates public static property inside class
	public static $static = 0;

	public function __construct(){
		echo "This class has been instantiated";

	}

	public function _toString(){
		echo "toString method: ";
		return $this->error;
	}

	//static only refers to other static props and methods
	public static function staticMethod(){
		return self::$static;
	}

	public function setNewProperty($newdata) {
		$this->data = $newdata;
	}

	public function getProperty(){
		return $this->data;
	}

	public function __destruct(){
		echo "This is the end of class";
	}	
}


class Users {
	public $first;
	public $last;
	public $hairColor;
	public $eyeColor;

	public function __construct($first, $last, $hairColor, $eyeColor){
		$this->first = $first;
		$this->last = $last;
		$this->hairColor = $hairColor;
		$this->eyeColor = $eyeColor;

	}

	public function fullName(){
		return $this->first." ". $this->last;
	}

	public function __destruct(){

	}
}