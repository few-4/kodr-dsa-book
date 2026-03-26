// Print the sum of all even & odd numbers in a range separately.

let range = Number(prompt("Give a range: "))
let odd = 0; 
let even = 0; 

for (let i = 1; i <= range; i++) {
    if (i % 2 === 0) even += i;
    else odd += i;
}

console.log(`Total of even numbers ${even}`, `Total of odd numbers ${odd}`)