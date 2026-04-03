// Build Array from Permutation

function buildArray(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[arr[i]]);
    }
    return result;
}

let arr = [0, 2, 1, 5, 3, 4];
console.log(buildArray(arr));