// Take a number as input and print its table (Ex: 5 * 1 = 5 ... up to 10 terms)

let n = Number(prompt("Give a number: "));

for (let index = 1; index <= 10; index++) {
    console.log(n*index)
}