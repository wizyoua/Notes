//what is a factorial? 4! = 4 * 3 * 2 * 1 = 24

function factorial(n) {
    if (n === 1) return 1;
    return n * factorial(n - 1);

}