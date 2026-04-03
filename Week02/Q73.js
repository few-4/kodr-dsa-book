//Given an array of integers, update every element with the multiplication of previous and next elements with the following exceptions: a) The First element is replaced by the multiplication of the first and second. b) The last element is replaced by multiplication of the last and second last. (Ex: Input : arr[] = {2, 3, 4, 5, 6}, Output : arr[] = {6, 8, 15, 24, 30})

function updateArray(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (i === 0) {
            result.push(arr[i] * arr[i + 1]);
        } else if (i === arr.length - 1) {
            result.push(arr[i] * arr[i - 1]);
        } else {
            result.push(arr[i - 1] * arr[i + 1]);
        }
    }
    return result;
}

let arr = [2, 3, 4, 5, 6];
console.log(updateArray(arr));