// Q.67 Strong number using methods.

let num = 145;
let ans = 0;

function extractDigits(num) {
    let temp = num; //146
    while (temp > 0) {
        let digit = temp % 10;
        temp = Math.floor(temp / 10);
        ans += factorial(digit);
    }
}
extractDigits(num);


function factorial(digit) {
    let fact = 1;
    for (let i = 1; i <= digit; i++) {
        fact *= i;
    }
    return fact;
}

if (ans == num) console.log("Strong Number")
    else console.log("Not a strong number")