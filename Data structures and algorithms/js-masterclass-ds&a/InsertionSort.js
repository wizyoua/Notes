//Insertion sort - builds up the sort by gradually creating a larger left half which is always sorted
// Big O of insertion sort is O(n^2) worst case
// what about if something was almost sorted? then it would be O(n) best case

function insertionSort(arr) {
    let temp;

    for (let i = 1; i < arr.length; i++) {
        temp = arr[i];

        for (var j = i - 1; arr[j] > temp && j > -1; j--) {
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = temp;
    }
    return arr;
}

insertionSort([2, 1, 9, 76, 4]);