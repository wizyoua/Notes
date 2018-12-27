//4 pillars of object oriented programming

//Encapsulation: groupf related functions and variables together. reduce complexity + increase reusability 

	let baseSalary = 30_000;
	let overtime = 10;
	let rate = 20;

	function getWage(baseSalary, overtime, rate){
		return baseSalary + (overTime * rate);
	}

	//variables on one side and functions on the other is procedural programming, simple. The above code is procedural.

	let employee = {
		baseSalary: 30_000,
		overtime: 10,
		rate: 20,
		getWage: function() {
			return this.baseSalary + (this.overtime * this.rate );
		}
	};

	employee.getWage();
	//when you write OOP code, your functions will have fewer parameters.



//Abstraction - helps reduce impact of change and makes interface simpler. isolates impact of changes  in code

//Inheritance - helps eliminate redundant code


//Polymorphism - Many forms. IN OOP helps you get rid of long switch statements

//oop you have to understand objects

	// Object literal: {key:value} is not a good way to create object and duplicate if they have 1 or more methods. 
	// factory/constructor function: 