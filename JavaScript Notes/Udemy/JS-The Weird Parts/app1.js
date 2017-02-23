

//are on the global object
b();
console.log(a);

var a = "hello world";
function b(){
	console.log("called b!");
}


//chapter 3 Lecture 25

console.log(1 < 2 < 3); //true



//chapter 4 objects

//4,30 - not preffered way to create object
var person = new Object();

person["firstname"] = "Tony";
person["lastname"] = "alice";

var firstnameProperty = "firstname";

console.log(person);
console.log(person[firstnameProperty]);

console.log(person.firstname);
console.log(person.lastname);

person.address = new Object();
person.address.street = "11 Main St";
person.address.city = "new york";

console.log(person.address.street);



//4.31 - object and object literals
var person1 = {
	firstname: 'tony',
	lastname: 'alice',
	address: {
		street: '111 main st',
		city: 'newyork',
		state: 'ny'
	}
};


function greet(person){
	console.log("hi" + person.firstname);
}

greet(Tony);

greet({
	firstname: 'Mary', 
	lastname: 'Doe'
});

Tony.address2 = {
	street: '333 street'
}

console.log(person);

//4.34 functions are objects

function greet(){
	console.log("hi");
}
greet.language = 'english';
//property attached to the object
console.log(greet.language);

//4,35
//can call greet because of hoisting remember 
greet();

function greet() {
	console.log("Hi");
}

//fucntions are objects, we are setting it to that variable
var anonGreet = function(){
	console.log("hi");
}

//invoke the code
anonGreet();


function log(a){
	//how to run thefunction that is passed to log
	a();
	console.log(a);
}
log(3);
//passing function a function
log(function(){
	console.log("hi");
});




//4.36 
// by value (primitives)
var a = 3;
var b;
//this line copied a first before a changed to 2 from 4 (by value)
b = a;
a = 2; 


//by reference (all objects including functions) - 
var c = {greeting: 'hi'};
var d;

//d will point to same address as c
d = c;
c.greeting = 'hello'; // mutate

console.log(c);
console.log(d);


//by reference (even as parameters)
function changeGreeting(obj){
	obj.greeting = 'hola';//muatte
}
changeGreeting(d);
console.log(c);
console.log(d);

//equal operator sets up new memory space (new address)
c = {greeting: 'howdy'};
console.log(c);
console.log(d);



//4.37
console.log(this);// show window/global object

function a(){
	console.log(this); // will point to gloabl object
	this.newvariable = 'hello';
}

a();

console.log(newvariable);// crashing into global namespace

var b = function(){
	console.log(this);
}

b();


var c = {
	name: 'C',
	log: function(){
		var self = this;

		self.name = 'updated c object';
		console.log(self);

		var setname = function(newname){
			self.name = newname;
		}
		setname('updates again! c object');
		//will points to global object again
		console.log(self)
	}
}

c.log();


//4.38
//arrays can hold anything because of dynamic typing
var arr = [
	1,
	false,
	{
		name: 'tony',
		addy: '111 street'
	},
	function (name) {
		 var greeting = 'Helo';
	}
];

arr[3]arr([2].name);



//4.39
function greet(firstname, lastname, language) {

	//set up default peramets if no argument is sent through
	language = language || 'en';

	if(arguments.l === 0) {
		console.log('Missing params');
		return;
	}

	console.log(firstname);
	console.log(lastname);
	console.log(language);
	console.log(arguments);
	console.log(arguments[0]);
	console.log('-----');

	//arguments will become depracated in the futue, the next thing is spread parameter uses ... to insert any extra arguments into auto array
}

greet();
greet('john');
greet('john','doe');
greet('john','doe','english');






















