function findElement(arr, el){
    //find element in array
    for(const [i,item] of arr){
        if(item === el){
            return i;
        }
    }
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(findElement(arr, 5));