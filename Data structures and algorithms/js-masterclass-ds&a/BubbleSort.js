//what is bubble sort? it is a sorting algorithm where the largest values bubble up to the top

function bubbleSort(array) {
    for (let i = array.length - 1; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }

        }
    }

    return array;
}

bubbleSort([27, 81, 91, 104])