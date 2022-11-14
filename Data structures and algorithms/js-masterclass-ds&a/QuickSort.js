// Quick Sort is a Divide and Conquer algorithm. It picks an element as pivot and partitions the given array around the picked pivot.
// Big O Time: O(n log n) - best, average, and worst case is O(n^2)
// Big O Space: O(1) in place sorting algorithm
const swap = (arr, idx1, idx2) => {
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}

const pivot = (arr, pivotIndex = 0, endIndex = arr.length - 1) => {
    let swap = pivotIndex;
    for (let i = pivotIndex + 1; i <= endIndex; i++) {
        if (arr[i] < arr[pivotIndex]) {
            swap++;
            swap(arr, swap, i);
        }
    }
    swap(arr, pivotIndex, swap);
    return swap;
}

const quickSort = (arr, left = 0, right = arr.length - 1) => {
    if (left < right) {
        let pivotIndex = pivot(arr, left, right);
        quickSort(arr, left, pivotIndex - 1);
        quickSort(arr, right, pivotIndex + 1);
    }
    return arr;
}

quickSort([4, 8, 2, 1, 5, 7, 6, 3]);