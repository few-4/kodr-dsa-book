// Q88. Minimum Sum of Four Digit Number After Splitting Digits

let num = 2932
let arr = []
while (num > 0) {
    arr.push(num % 10)
    num = Math.floor(num / 10)
}
arr.sort()
let num1 = arr[0] * 10 + arr[2] //
let num2 = arr[1] * 10 + arr[3]
console.log(num1 + num2)