// Q37	Accept a number and check if it is a palindromic number (If number and its reverse are equal, Ex: 12321 - Reverse - 12321)

let num = Number(prompt("Give me a number: "));
let originalNum = num;
let rev = Number(0);

while (num > 0) {
    let rem = num % 10;
    rev = rev * 10 + rem;
    num = Math.floor(num / 10);
}

if (originalNum === rev) {
    console.log("Palindromic Number")
} else {
    console.log("Not Palindromic")
}