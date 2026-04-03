// Maximum Number of Pairs in Array
// Input:  nums = [1,3,2,1,3,2,2]
// Output: [3,1]

function numberOfPairs(nums) {
    let map = new Map();

    for (let num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }

    let pairs = 0;
    let leftovers = 0;

    for (let freq of map.values()) {
        pairs += Math.floor(freq / 2);
        leftovers += freq % 2;
    }

    return [pairs, leftovers];
}

let arr = [1, 3, 2, 1, 3, 2, 2];
console.log(numberOfPairs(arr));