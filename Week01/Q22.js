// Accept an English alphabet from user and check if it is a consonant or a vowel.

let vowel = ["a", "e", "i", "o", "u"];
let input = prompt("Enter a alphabet: ")


// let f = vowel.some(v => v === input)
// let f = vowel.find(v => v === input)
// if (f) {
//     console.log("Vowel")
// } else {
//     console.log("Consonant")
// }

switch (input) {
    case "a":
        console.log("Vowel")
        break;
    case "e":
        console.log("Vowel")
        break;
    case "i":
        console.log("Vowel")
        break;
    case "o":
        console.log("Vowel")
        break;
    case "u":
        console.log("Vowel")
        break;

    default:
        console.log("Consonant")
        break;
}