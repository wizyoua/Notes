//binary search onl works on sorted arrays
//if you have unordered list you have to first sort it which would be O(n log n)
//average case is O(log n) worst case is O(log n)
function binarySearch(arr, target){
    let l = 0;
    let r = arr.length - 1;

    while(l <= r){
        let mid = Math.floor((l + r)/2);
        if(arr[mid] === target){
            return mid;
        }else if(arr[mid] < target){
            l = mid + 1;
        }else{
            r = mid - 1;
        }
    }
}

const arr = [1,2,3,4,5,6,7,8,9,10];

console.log(binarySearch(arr, 5));