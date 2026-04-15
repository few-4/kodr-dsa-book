// Count Operations to Obtain Zero

// Input: num1 = 2, num2 = 3
// Output: 3

function countOperations(num1, num2) {
    let count = 0;
    while (num1 !== 0 && num2 !== 0) {
        if (num1 >= num2) {
            num1 -= num2;
        } else {
            num2 -= num1;
        }
        count++;
    }
    return count;
}

let num1 = 2;
let num2 = 10;
console.log(countOperations(num1, num2));