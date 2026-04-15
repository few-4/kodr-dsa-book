const prompt = require("prompt-sync")()

//Q87 Find the Highest Altitude

let gain = [1, -2, 3, 4, -5, 6, -7, 8, -9, 10]
let max = 0
let sum = 0
for (let i = 0; i < gain.length; i++) {
    sum += gain[i]
    if (sum > max) {
        max = sum
    }
}
console.log(max)