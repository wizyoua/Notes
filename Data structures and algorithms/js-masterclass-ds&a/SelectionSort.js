// selection sort is similar to bubble sort, but instead of first placing large values into sorted position, it places small values into sorted position
function selectSort(arr) {
    let min;
    for (let i = 0; i < arr.length; i++) {
        min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
            if (i !== min) {
                let temp = array[i];
                arr[i] = arr[min];
                arr[min] = temp;
            }
        }
    }
    return arr;
}

selectSort([5, 3, 4, 1, 2]);