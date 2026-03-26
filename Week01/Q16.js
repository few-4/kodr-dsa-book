// Q16	Accept name and age from the user. Check if the user is a valid voter or not. (Valid - Hello Shery, You are a valid voter. Invalid - Sorry Shery, you can't cast the vote. Part 2 - Print after how many years the user will be eligible)

let name = prompt("Enter your name: ")
let age = Number(prompt("Enter your age: "))

console.log(age >= 18 ? `Hello ${name}, You are a valid voter.` : `Invalid - Sorry ${name}, you can't cast the vote.`, age<18 && `You will be eligible for voting after ${18-age} years`)