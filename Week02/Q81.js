// Keep Multiplying Found Values by Two

// Input: nums = [5,3,6,1,12], original = 3
// Output: 24

function findFinalValue(nums, original) {
    let set = new Set(nums);
    while (set.has(original)) {
        original *= 2;
    }
    return original;
}

let nums = [5, 3, 6, 1, 12];
let original = 3;
console.log(findFinalValue(nums, original));