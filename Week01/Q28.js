// Q28	Factorial of a number

let inp = Number(prompt("Enter a number: "));
let factorial = 1;

for (let index = 1; index <= inp; index++) {
    factorial *= index;
}

console.log(factorial)