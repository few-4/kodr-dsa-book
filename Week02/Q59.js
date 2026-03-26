// Q59	Take n integer inputs from user and store them in an array. Now, copy all the elements into another array in reverse order and print it.

let arr = new Array(5);
let i = 0;

while (i < arr.length) {
    arr[i] = Number(prompt("Give number to store in array: "));
    i++;
}
let newArr = new Array(arr.length);

for (let i = 0; i < arr.length; i++) {
    newArr[i] = arr[arr.length - 1 - i]
}

console.log(newArr)