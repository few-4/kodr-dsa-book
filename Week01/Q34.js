// Q34	Separate each digit of a number and print it on a new line (Ex - 123 -> OP: 3, 2, 1)

let num = Number(prompt("Give me a number: "));

while (num>0) {
    rem = num % 10;
    num = Math.floor(num / 10);
    console.log(rem)
}