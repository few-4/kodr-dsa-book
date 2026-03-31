// Q63. Binary Search. If element found print the index, else -1

let arr = [12, 23, 34, 45, 56, 67, 78, 89, 90];

let target = Number(prompt("Give a target value to find: "));

binarySearch(arr, target) == -1 ? console.log("Target not found") : console.log("Target found")

function binarySearch(arr, target) { 
    let s = 0, e = arr.length - 1;

    while (s <= e) {
        let mid = Math.floor((s + e) / 2);
        if (arr[mid] == target) return mid;
        else if (arr[mid] > target) {
            e = mid - 1;
        } else s = mid + 1;
    }
    return -1;
}