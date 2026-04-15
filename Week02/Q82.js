//Smallest Index With Equal Value

// Input: nums = [0,1,2,2,5,6], index = 0
// Output: 2

function smallestEqual(nums, index) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === i) {
            return i;
        }
    }
    return -1;
}

let nums = [0, 1, 2, 2, 5, 6];
let index = 0;
console.log(smallestEqual(nums, index));