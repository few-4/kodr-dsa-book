// Count Operations to Obtain Zero

let num1 = prompt("Enter the first number: ");
let num2 = prompt("Enter the second number: ");

function countOperations(num1, num2) {
    let count = 0;

    while (num1 !== 0 && num2 !== 0) {
        if (num1 >= num2) {
            count += Math.floor(num1 / num2);
            num1 = num1 % num2;
        } else {
            count += Math.floor(num2 / num1);
            num2 = num2 % num1;
        }
    }

    return count;
}

console.log(countOperations(num1, num2));