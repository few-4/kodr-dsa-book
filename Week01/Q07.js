// Q.7 Accept the length and width of a rectangle. Calculate & print the area and perimeter.

let length = Number(prompt("Give length of rectangle: "));
let width = Number(prompt("Give width of rectangle: "));

let area = length * width;
let perimeter = 2 * (length + width);
console.log(`Area of rectangle: ${area} and perimeter: ${perimeter}`)