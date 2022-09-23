//how to use function currying with bind method
let multiply = function (x,y) {
    console.log(x * y);
}

let  multiplyByTwo = multiply.bind(this, 2);
multiplyByTwo(5);

let  multiplyByThree = multiply.bind(this, 3);
multiplyByThree(5);



//use function currying with closures
//what is closure? A closure is an inner function that has access to the outer (enclosing) function's variables
let multiplyNew = function (x) {
    return function(y){
        console.log(x * y);
    }
}

let  multiplyByTwoNew = multiplyNew(2);
multiplyByTwoNew(5);
