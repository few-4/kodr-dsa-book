// Q8	Accept the parameters and calculate the Compound Interest & print it on STDOUT (Use Math class methods)

let p = Number(prompt("Enter principal amount: "));
let r = Number(prompt("Enter rate of interest in percentage: "));
let t = Number(prompt("Enter time in years: "));

let CI = p * Math.pow((1 + r / 100), t);

console.log(CI)