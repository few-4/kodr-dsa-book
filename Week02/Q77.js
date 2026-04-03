// Q. Find sum of minimum absolute difference of the given array

function minAbsDiff(arr) {
    let minDiff = Infinity;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            minDiff = Math.min(minDiff, Math.abs(arr[i] - arr[j]));
        }
    }
    return minDiff;
}

let arr = [1, 2, 7, 10, 13, 16];
console.log(minAbsDiff(arr));