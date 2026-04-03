// Sort First half in Ascending and Second half in descending order in an array

function sortHalf(arr) {
    let firstHalf = arr.slice(0, Math.floor(arr.length / 2));
    let secondHalf = arr.slice(Math.floor(arr.length / 2));
    firstHalf.sort((a, b) => a - b);
    secondHalf.sort((a, b) => b - a);
    return [...firstHalf, ...secondHalf];
}

let arr = [1, 2, 1, 2, 1, 3];
console.log(sortHalf(arr));