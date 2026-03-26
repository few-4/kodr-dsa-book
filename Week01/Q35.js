// Q35	Sum of digits of a number (Ex: 936 = 18)

let num = Number(prompt("Give me a number: ")); //936

let total = 0;

while (num>0) {
    let rem = num % 10; 
    num = Math.floor(num / 10); 
    total += rem; 
}
console.log(total)