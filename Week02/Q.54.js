
// Q. Accept size n from user and create an n size array then take n inputs into it and finally print the sum & average of all elements.

let size = Number(prompt("Give size of the array: "));
let arr = new Array(size);

let sum = 0;

for (let i = 0; i < arr.length; i++) {
    arr[i] = Number(prompt(`Give index ${i} value: `));
    sum += arr[i];
}

console.log("Sum is: ", sum, "Average is: ", (sum / size));