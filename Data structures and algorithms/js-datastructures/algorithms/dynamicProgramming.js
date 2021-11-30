//Dynamic Programming
    //combine recursion with memoization(stored data)
    //memoization is a technique to speed up the recursive process
    // recursion + memoization = DP

//Fibonacci function using dynamic programming
//New Time Complexity: O(n) because it will go through once and store which then we can lookup again
//and we con't have to go through the whole process again
//Space Complexity: O(n) because we are storing the values in the memo object

function fib(n, memo){
    let result;
    if(memo[n]){
        return memo[n];
    }

    if(n === 0 || n === 1){
         result = 1;
    }else{
        result = fib(n - 1, memo) + fib(n - 2, memo);
    }

    memo[n] = result;

    return result;
}

fib(5, {});