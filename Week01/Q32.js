// Check if the number is Prime or not.

let num = Number(prompt("Give a number: "))

function checkPrime(num) {
    if (num <= 1) return "Not Prime";
    if (num === 2) return "Prime Number";
    if (num % 2 == 0) return "Not Prime";
    for (let i = 3; i <= Math.floor(Math.sqrt(num)); i+=2) {
        if (num % i == 0) {
            return "Not Prime"
        }
    }
    return "Prime Number"
}
console.log(checkPrime(num))