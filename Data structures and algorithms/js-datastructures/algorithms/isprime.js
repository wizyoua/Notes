//Need to try and divide number by all smaller numbers and return true if it is divible by itself and 1
//Time O(N)  Space O(1)
function isPrime(num) {
    for( let i = 2; i < num; i++){
      if( num % i === 0){
        return false;
      }
    }
    return true;
}

console.log(isPrime(5));
console.log(isPrime(9));

//improved version, it really doesn't improve for the most part since we always default to worst case
//Time O(sqrt(N)) Space O(1)
function isPrime(num) {
    for( let i = 2; i < Math.sqrt(num); i++){
      if( num % i === 0){
        return false;
      }
    }
    return true;
}