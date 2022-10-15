//we measure time complexity in terms of how many operations the computer has to perform
//we measure space complexity in terms of how much memory is used

//Omega is the best case scenario
//Theta is the average case scenario
//Omicron/Big O is the worst case scenario

//Drop constants - O(2n) -> O(n)

//O(1) - constant time
function logFirstItem(n) {
    console.log(n[0]);
}
//O(n) - linear time
function logItems(n) {
    for (let i = 0; i < n.length; i++) {
        console.log(n[i]);
    }
}

//O(n^2) - quadratic time
function logItems2(n) {
    for (let i = 0; i < n.length; i++) {
        for (let j = 0; j < n.length; j++) {
            console.log(n[i], n[j]);
        }
    }
}

//O(n^3) - cubic time
function logItems3(n) {
    for (let i = 0; i < n.length; i++) {
        for (let j = 0; j < n.length; j++) {
            for (let k = 0; k < n.length; k++) {
                console.log(n[i], n[j], n[k]);
            }
        }
    }
}

//O(n) with different inputs: O(a + b)
function logItems4(a, b) {
    for (let i = 0; i < a.length; i++) {
        console.log(a[i]);
    }
    for (let j = 0; j < b.length; j++) {
        console.log(b[j]);
    }
}

//drop non dominants: O(n + n^2) -> O(n^2)

//O(log n) - logarithmic time - divide and conquer
//we need to have sorted data since we are reducing the search space by half
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function binarySearch(arr, val) {
    let min = 0;
    let max = arr.length - 1;
    while (min <= max) {
        let middle = Math.floor((min + max) / 2);
        let currentElement = arr[middle];
        if (currentElement < val) {
            min = middle + 1;
        } else if (currentElement > val) {
            max = middle - 1;
        } else {
            return middle;
        }
    }
    return -1;
}

//O(n log n) - linearithmic time if we are sorting multiple items

//Arrays: insertion - O(n), removal - O(n), searching - O(n), access - O(1)
let myArr = [1, 2, 3, 4, 5];
myArr.push(6); //O(1)
myArr.pop(); //O(1)
myArr.shift(); //O(n) - remove first item in array
myArr.unshift(0); //O(n) - add first item in array
myArr.splice(1, 0, 99); //O(n) - add item to middle of array

//searching by value - O(n)
//searching by index - O(1)