const arr1 = [1, 3, 5, 7, 9];
const arr2 = [5,5,3, 10, 11, 12, 13];

const mergeSortedArrays = (arr1, arr2) => {
    //check if both arrays are empty
    if (arr1.length === 0 && arr2.length === 0) return [];
    
    const res = [];
    let i = 0;
    let j = 0;

    while(i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            res.push(arr1[i]);
            i++;
        }else {
            res.push(arr2[j]);
            j++;
        }
    };

    while(i < arr1.length){
        res.push(arr1[i]);
        i++;
    }

    while(j < arr2.length){
        res.push(arr2[j]);
        j++;
    }

    return res;

}

console.log(mergeSortedArrays(arr1, arr2));
