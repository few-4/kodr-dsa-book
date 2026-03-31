// Q. 64: Move all the negative elements on the left side and positive elements on the right side O(n).

let arr = [2, -3, 4, -9, 6, -1]

console.log(MoveNegatives(arr))

function MoveNegatives(arr) {
    let s = 0, e = arr.length - 1;
    while (s <= e) {
        if (arr[s] < 0) {
            s++ 
        } else if (arr[e] >= 0) {
            e--
        } else {
            //swap
            [arr[s], arr[e]] = [arr[e], arr[s]];
            s++;
            e--;
        }
    }
    return arr;
}