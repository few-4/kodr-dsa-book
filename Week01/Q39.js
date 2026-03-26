// Q39	Automorphic number (Ex: 5 = 25 = 625 = 390625, 6=36, 76 = 5776)

let num = Number(prompt("Give a number: ")); //6
let sq = num*num

let digits = 0; //1
let tempVal = num;
while (tempVal > 0) {
    tempVal = Math.floor(tempVal / 10);
    digits++
}

let remove = Math.pow(10, digits);

if (sq % remove === num) {
    console.log(num+ " is an automorphic number")
} else {
    console.log(num + " is not an automorphic number")
}