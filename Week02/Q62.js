// Q62. Linear Search an array - If element found print the index, else -1

let arr = [10, 60, 90, 40, 50, 80, 70];
let target = Number(prompt("Give a number: "));
let index = -1;


for (let i = 0; i < arr.length; i++) {
    if (arr[i] == target) {
        index = i;
        break;
    }
}

index === -1 ? console.log("Element not found") : console.log(`Element found at index: ${index}`)