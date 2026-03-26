// Q51	Triangle Pattern
let n = Number(prompt("Give n number: "))
let temp = n;

for (let i = 1; i <= temp; i++) {
    for (let j = 1; j <= temp - i; j++) {
        process.stdout.write(" ")
    }

    for (let k = 1; k <= i; k++){
        process.stdout.write("* ")
    }
    console.log()
}