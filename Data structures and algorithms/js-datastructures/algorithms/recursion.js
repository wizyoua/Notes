//recursion
// always combine recursion with a base case
function fact(num){

    //base case
    if(number === 1) return 1;

    //recursive call
    fact(number - 1);
}

console.log(fact(3)); //3 * 2 * 1 = 6
console.log(fact(4)); //4 * 3 * 2 * 1 = 24
console.log(fact(5)); //5 * 4 * 3 * 2 * 1 = 120

//recursive fibonacci
function fib(num){
    if(num === 0 || num === 1) return 1;
    

    return fib(num - 1) + fib(num - 2);
}
console.log(fib(3)); //2
console.log(fib(4)); //3