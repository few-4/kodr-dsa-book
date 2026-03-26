// Q.6 Accept two numbers from user and swap their values (Part 2 - Swap without using third variable)

let a = Number(prompt("Enter a value: "))
let b = Number(prompt("Enter b value: "))
    [a, b] = [b, a]
    console.log(a, b)