// Q38	Accept a number and check if it is a strong number or not (Sum of factorial of each digit, Ex: 145 = 1! + 4! + 5! = 145)

let num = Number(prompt("Give me a number: "));
let originalNum = num;
let sum = 0;

//Factorial = multiplying every number starting from 1 till the number given - factorial of 5 = 1*2*3*4*5

function factorial(num) {
    let fact = 1;
    for (let i = 1; i <= num; i++) {
        fact = fact * i;
    }
    return fact;
}

while (num > 0) {
    let rem = num % 10;
    sum += factorial(rem);
    num = Math.floor(num / 10);
}

if (sum === originalNum) {
    console.log("Strong Number")
} else {
    console.log("Not a strong number")
}