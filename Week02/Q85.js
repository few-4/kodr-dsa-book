// Make Array Zero by Subtracting Equal Amounts

function makeArrayZero(nums) {
    let count = 0;

    while (nums.some(num => num !== 0)) {
        let min = Math.min(...nums.filter(num => num !== 0));
        count++;

        for (let i = 0; i < nums.length; i++) {
            nums[i] -= min;
        }
    }

    return count;
}

let nums = prompt("Enter the array elements: ").split(" ").map(Number);
console.log(makeArrayZero(nums));