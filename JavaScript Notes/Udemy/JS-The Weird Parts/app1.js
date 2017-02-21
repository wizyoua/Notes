

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

//4.33 functions are objects

function greet(){
	console.log("hi");
}
greet.language = 'english';
//property attached to the object
console.log(greet.language);