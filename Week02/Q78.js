// Divide Array Into Equal Pairs

function divideArrayIntoEqualPairs(arr) {
    let leftSum = [];
    let rightSum = [];
    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
        leftSum.push(arr[i]);
    }
    for (let i = Math.floor(arr.length / 2); i < arr.length; i++) {
        rightSum.push(arr[i]);
    }
    return arr = [[...leftSum], [...rightSum]];
}

let arr = [1, 2, 1, 5, 6, 7, 8, 9, 2, 1, 3, 4];
console.log(divideArrayIntoEqualPairs(arr));