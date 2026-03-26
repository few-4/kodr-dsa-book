// Q44	Project - Guess Game

let random = Math.floor(Math.random() * 100) + 1;
let guess = 5;

while (guess !== random) {
    guess = Number(prompt("Guess a number: "));
    if (isNaN(guess) || guess < 1 || guess > 100) {
        console.log("Invalid input, try again between number 1-100");
        continue;
    }
    if (guess > random) {
        console.log("Too High, try again")
    } else if (guess < random) {
        console.log("Too low, try again")
    } else {
        console.log("Hurray! you got it right. The number was " + random)
    }
}