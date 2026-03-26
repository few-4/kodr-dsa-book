const prompt = require("prompt-sync")()

// Q56	Find the greatest element (Ex: {2, 96, 69, 77, 145, 20} = Max element = 145 found at 4 index)

// [1, 2, 3, 4, 5, 0] // Output should be 5 at index 4;

let arr = [10, 22, 32, 2, 14, 66, 8, 15, 6];
let max = arr[0];
let index = 0;

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
        index = i;
    }
}

console.log(`Max number is ${max}, index is ${index}`);