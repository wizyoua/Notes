//Time O(n) Space: O(1)
function sumNumbers(nums){
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        result += nums[i];
    }
    return result;
}

//Time O(log n) Space:O(1)
function sumNumbers(nums){
    return nums.reduce((sum, curNum, i) => sum + curNum, 0);
}

console.log(sumNumbers([1,2,3,4]));