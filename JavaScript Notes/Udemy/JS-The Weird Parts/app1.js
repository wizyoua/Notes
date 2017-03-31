

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



//4.40 don't worry about functional overloading, this pattern is easier to use library.
function greet(firstname, lastname, language){
	language = language || 'en';

	if(language === 'en') {
		console.log('hello'+ firstname+ ' ' + lastname);
	}

	if(language === 'es'){
		console.log('hola' + firstname + ' '+ lastname);
	}
}

function greetEnglish(firstname, lastname) {
	greet(firstname,lastname,'en');
}
function greetEnglish(firstname, lastname) {
	greet(firstname,lastname,'es');
}

greetEnglish('Jogn', 'Doe');
greetSpanish('Jogn', 'Doe');


//4.42
function getperson() {
	return {
		firstname: 'Tony'
	}
}

//undefined because look at the return line, we put the data in a new line so JS added a semicolon.
console.log(getperson());



//4.43

var 
	//comment
	firtsname,
	//comment
	lastname,
	//comment
	language;

//will work because is code is the same syntax parser will ignore whitespace

var person = {
	firstname: 'John',
	lastname: 'Doe'
}




//4.44

//function statement
function greet(name){
	console.log('Hello' + name);
}

greet('john');

//using a function expression
var greetFunc = function(name) {
	console.log('hello' + name);
};

greetFunc('john');

//using IIFE
var greeting = function(name) {
	console.log('hello' + name);
}();//invokes the function immediately after created

// when you want function expression rather than statement
var firstname = 'john';

(function(name) {
	var greeting = 'hello';
	console.log(greeting + name);
}(firstname)); // immediately invoked function expression

//Closures

function greet(what) {
	return function(name) {
		console.log(what + ' ' + name);
	}
}

var sayHi = greet('HI');
sayHi('Tony');



//4.47 closures part 2
function buildFunctions(){
	var arr=[];
	for (i = 0; i < 3; i++) {
		arr.push(
			function(){
				console.log(i);
			}
		)
	}
	return arr;
}

var fs = buildFunctions;
fs[0]();
fs[1]();
fs[2]();
//will output 3, 3 times

//4.48 function factory - Extremely useful
function makeGreeting(lanugage){

	return function(firstname, lastname) {
		if(language === 'en'){
			console.log("hi");
		}
		if (language === 'es'){
			console.log("hi");
		}
	}
}

var greetEnglish = makeGreeting('en');

greetEnglish('john', 'doe');


//4.49 Closures and Callbacks
function sayHi(){
	 var greeting = 'Hi!';

	 setTimeout(function(){
	 	console.log(greeting);
	 }, 3000); 
}

sayHi();

//Callbackfunction
function tellme(callback){
	var a = 1000;
	callback();
}

tellme(function(){
	console.log('all done');
});


//4.50 call, apply, bind

var person = {
	firstname: 'john',
	lastname: 'doe',
	getName : function (){
		var fullname = this.firstname + ' ' + this.lastname;
		return fullname;
	}
}

var logName = function(lang1, lang2){
	console.log('logged' : this.getName());
}
var logName = logName.bind(person);
logName();




//4.51 Functional Programming
	function mapForEach(arr, fn){
		var newArr = [];

		for (var i=0; i < arr.length; i++){
			newarr.push(
				fn(arr[i])
			)
		};
		return newarr;
	}



	var arr1 = [1,2,3];
	console.log(arr1);

	var arr2 = mapForEach(arr1, function(item){
		return item * 2;
	});
	console.log(arr2);
	
//5. understanding prototype

var person = {
	firstname : 'default',
	lastname: 'default',
	getFullName: function () {
		return this.firstname + ' ' + this.lastname;
	}
}

var john = {
	firstname : 'john',
	lastname: 'Doe'
}
//don't do this ever!!!!!!!!!
john.__proto__ = person; 
console.log(john.getFullName());
console.log(john.firstname);
//this will go down protoype chain and find

var jane = {
	firstname : 'jane'
}

jane.__proto__ = person;
console.log(jane.getFullName());

//4.49 everything is objects

var a = []
a.__proto__.__proto__ = object

// 4.56 using extends

var jane = {
	addy: '1111 main',
	getFormalFullName: function(){
		return this.lastname + ', ' + this.firstname;
	}
}

var jim = {
	getFirstName: function(){
		return firstname;
	}
}
_.extend(john,jane,jim); //this combines these objects this places the properties into the john property 

//4.57 Constructing objects - Right way to create objects adding properties and methods

function Person(firstname, lastname){
	this.firstname = firstname;
	this.lastname = lastname;
}

var john = new Person('John', 'Doe');
console.log(john);


//4.58 function constructors and .prototype - this is what you should use


function Person(firstname, lastname){
	this.firstname = firstname;
	this.lastname = lastname;
}
//where the protoype point chains
Person.protoype.getFullname = function () {
	return this.firstname + ' ' + this.lastname;	
}
var john = new Person('John', 'Doe');
console.log(john);



//6.60 Built in Function Constructors 
//this is the power of prototypal inheritence
String.protoype.isLengthGreaterThan = function(limit){
	return this.length > limit;
}

console.log("John".isLengthGreaterThan(3));











