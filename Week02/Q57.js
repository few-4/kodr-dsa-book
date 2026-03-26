const prompt = require("prompt-sync")()

// Q57	Find the second greatest element (Ex: {2, 96, 69, 77, 145, 20} = Second greatest element = 96)

let arr = [23, 37, 82, 76, 54, 8, 19, 55, 88, 13, 46];
let max = Math.max(arr[0], arr[1]);
let smax = Math.min(arr[0], arr[1]);

for (let i = 2; i < arr.length; i++) {
    if (arr[i] > max) {
        smax = max;
        max = arr[i];
    } else if (arr[i] > smax) {
        min = arr[i];
    }
}

console.log(smax)