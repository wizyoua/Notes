//Big O Time: of merge sort is O(n log n) - log n is the number of times we have to split the array
//Big O Space: O(n) - we are creating a new array each time we merge

function merge(arr1, arr2) {
    let combined = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            combined.push(arr1[i]);
            i++;
        } else {
            combined.push(arr2[j]);
            j++;
        }
    }

    while (i < arr1.length) {
        combined.push(arr1[i]);
    }

    while (i < arr2.length) {
        combined.push(arr2[i]);
    }

    return combined;
}

merge([1, 10, 50], [2, 14, 99, 100]);

function mergeSort(arr) {
    if (arr.length === 1) return arr;

    let mid = Math.floor(arr.length / 2);

    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    return merge(mergeSort(left), mergeSort(right));
}