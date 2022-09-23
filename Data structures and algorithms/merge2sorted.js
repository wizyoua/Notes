//Merge 2 sorted arrays and cut to length k
//Time Complexity: O(n)
//Space Complexity: O(n)

let arr1 = [1, 3, 5, 7, 9];
let arr2 = [2, 4, 6, 8, 10];
let k = 8;

function mergeArrays(arr1, arr2, k){
    if(arr1.length === 0 && arr2.length === 0) return [];
    if(k === 0) return [];

    let res = [];
    let i = 0;
    let j = 0;

    while(i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            res.push(arr1[i]);
            i++;
        } else {
            res.push(arr2[j]);
            j++;
        }
    }

    while(i < arr1.length){
        res.push(arr1[i]);
        i++;
    }

    while(j < arr2.length){
        res.push(arr2[j]);
        j++;
    }

    //return length k using splice
    //return res.splice(0, k);
    return res.slice(0, k);
}

console.log(mergeArrays(arr1, arr2, k));