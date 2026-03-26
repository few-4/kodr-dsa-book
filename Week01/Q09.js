// Q9	Accept the three sides of triangle and calculate the area using Heron's formula

let side1 = Number(prompt("Give 1st side of the triangle "))
let side2 = Number(prompt("Give 2nd side of the triangle "))
let side3 = Number(prompt("Give 3rd side of the triangle "))

let semiParameter = (side1 + side2 + side3) / 2;

let area = Math.sqrt(semiParameter*(semiParameter - side1)*(semiParameter - side2)*(semiParameter - side3));

console.log(area.toFixed(2))