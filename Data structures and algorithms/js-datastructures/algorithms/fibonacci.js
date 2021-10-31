//algo needs to do 2 things, 1. calculate the sequence up to the el we are looking for, return that el
//O(N) O(1)
function fib(n) {
    const numbers = [1,1];
    for(let i = 2; i < n + 1; i++){
        numbers.push(numbers[i - 2] + numbers[i - 1]);   
    }

    return numbers[n];
}

console.log(fib(4));
console.log(fib(5));