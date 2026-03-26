// Q43	Question 22 using Switch (Check Consonant or Vowel using Switch)

let char = prompt("Give a character between A-Z: ").trim().toLowerCase()

if (char.length !== 1 || !/[a-zA-Z]/.test(char)) {
    console.log("Wrong input, enter 1 alphabet")
} else {
    switch (char) {
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
            console.log("Vowel")
            break;

        default:
            console.log("Consonant")
            break;
    }
}