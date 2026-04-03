//We are given an array of Integers. We have to perform the following operation on the array until it is fully exhausted: Select the max number in the array and delete that number including all the numbers to its right side in the array. Repeat this step for the left elements of the array i.e select the maximum element in the left elements and delete it including all numbers to its right. Our task is to simulate the above procedure and return the number of steps that will be taken until the first element (index 0) of the array is also deleted and the array is exhausted. (Ex: Array = [2, 3, 5, 4, 1], Output : Steps Taken: 3)

function stepsTaken(arr) {
    let steps = 0;
    while (arr.length > 0) {
        let max = Math.max(...arr);
        let index = arr.indexOf(max);
        arr.splice(index, arr.length - index);
        steps++;
    }
    return steps;
}

let arr = [2, 3, 5, 4, 1];
console.log(stepsTaken(arr));