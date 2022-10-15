class Cookie {
    constructor(color) {
        this.color = color;
    }

    //broad categories of methods in classes are getters and setters
    getColor() {
        return this.color;
    }

    setColor(color) {
        this.color = color;
    }
}

//create a new cookie
let cookieOne = new Cookie('green');

let cookieTwo = new Cookie('blue');

//build linked list class
class LinkedList {
    constructor(value) {

    }

    //push(value){} - add to end of list
    //unshift(value){} - add to beginning of list
    //insert(index, value){} - add to middle of list
    //remove(index){} - remove from end of list
    //pop(){} - remove from end of list
    //shift(){} - remove from beginning of list
}

let myLinkedList = new LinkedList(10);

//Pointers - reference to another object. This is because reference types are stored in JS within a tree but primitives are stored in the stack
let obj1 = { value: 11 }
let obj2 = obj1;

//primitive types
let test1 = 11;
let test2 = test1;
test1 = 12;
//test2 = 11