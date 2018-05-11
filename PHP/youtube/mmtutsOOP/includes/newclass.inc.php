<?php 

class newClass {
	
	public $data ="I am a property";
	public $error = "This is the class called new class!"

	public function __construct(){
		echo "This class has been instantiated";

	}

	public function _toString(){
		echo "toString method: ";
		return $this->error;
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

