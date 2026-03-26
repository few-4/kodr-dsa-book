// Q21	Bijli Bill

let units = Number(prompt("Enter total units consumed: ")); 
let amount = 0;

if (units > 400) {
    amount += (units - 400) * 13; 
    units = 400;
}
if (units > 200) {
    amount += (units - 200) * 8;
    units = 200;
}
if (units > 100) {
    amount += (units - 100) * 6;
    units = 100;
}
if (units > 0) {
    amount += units * 4.2;
}

console.log(amount);