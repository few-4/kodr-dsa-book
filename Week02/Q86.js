// Count Hills and Valleys in an Array

function countHillsAndValleys(nums) {
    let count = 0;

    for (let i = 1; i < nums.length - 1; i++) {
        if ((nums[i] > nums[i - 1] && nums[i] > nums[i + 1]) ||
            (nums[i] < nums[i - 1] && nums[i] < nums[i + 1])) {
            count++;
        }
    }

    return count;
}

let nums = prompt("Enter the array elements: ").split(" ").map(Number);
console.log(countHillsAndValleys(nums));