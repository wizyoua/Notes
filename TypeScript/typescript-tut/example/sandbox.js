"use strict";
let character = 'Mario';
let age = 30;
let isBlackBelt = false;
character = 'luigi';
age = 40;
isBlackBelt = true;
const cir = (diameter) => {
    return diameter * Math.PI;
};
console.log(cir(20));
// array of names
const names = ['mario', 'luigi', 'toad'];
names.push('bowser');
let mixed = ['mario', 30, true];
mixed.push('ryu');
mixed.push(31);
mixed[0] = 3;
//objects - works just like arrays where TS won't allow you to change the type of a property. You also can't add properties to an object.
let ninja = {
    name: 'mario',
    belt: 'black',
    age: 30
};
//override the entire object
ninja = {
    name: 'ryu',
    belt: 'black',
    age: 30
};
//Explicit types
let character2;
let age2;
let isBlackBelt2;
//arrays
let ninjas = [];
ninjas = ['mario', 'luigi', 'toad'];
//union types - can be used on variables or arrays, ect...
let mixed2 = [];
mixed2.push('mario');
mixed2.push(23);
//objects
// let ninjaOne: object;
// ninjaOne = { name: 'mario', age: 29 };
// let ninjaTwo: {
//     name: string,
//     age: number
//     beltColor: string
// };
// ep 6. Dynamic Types: any
// let age: any = 25;
// age = true;
// console.log(age);
// age = 'hello';
// console.log(age);
let mixedNew = [];
mixedNew.push(5);
mixedNew.push('mario');
mixedNew.push(false);
console.log(mixedNew);
let ninjaNew;
ninjaNew = { name: 'blah', age: 29 };
//ep 7. Better  workflow-moving to  a new  scalable project from here...bye bye.
//ep  8: Functions in TS
let greet = () => {
    console.log('hello, world');
};
const add = (a, b, c = 10) => {
    console.log(a + b);
    console.log(c);
};
add(1, 3, 20);
const minus = (a, b) => {
    //the result below is inferred from the function to be a number
    //we can add : number to paren  above to show devs what type is returned from this function.
    return a + b;
};
let result = minus(10, 7);
const greet9 = (user) => {
    console.log(`${user.name} says hello`);
};
greet9({ name: 'mario', uid: 1 });
//ep 10: Function Signatures
let greet10;
greet10 = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
//example 2 - function signature
let calc;
calc = (numOne, numTwo, action) => {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
//example 3 - function signature with type alias
let logDetails;
logDetails = (ninja) => {
    console.log(`${ninja.name} is ${ninja.age} years old`);
};
