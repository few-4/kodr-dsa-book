// Array Reverse Without Using Extra space

let arr = [1, 2, 3, 4, 5];

let j = arr.length - 1;

for (let i = 0; i < j; i++) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;

    j--;
}

console.log(arr)