const prompt = require("prompt-sync")()

// Q55	Accept size n from user and create an n size array then take n inputs into it and finally print the sum & average of all elements.

let n = Number(prompt("Give n number value: "))
let arr = new Array(n);
let i = 0
let sum = 0;

while (n > 0) {
    arr[i] = Number(prompt(`Give number for index ${i}: `));
    sum += arr[i];
    i++
    n--;
}

console.log(`Sum is ${sum}`, `Average is ${sum / arr.length}`);