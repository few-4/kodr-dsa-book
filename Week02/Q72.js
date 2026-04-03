// You are given two arrays of **equal length**: An **integer array** A[] and a **character array** B[], where each character is one of 'a', 'b', or 'c'. Find the **minimum** value of the expression: min(sum of values linked with 'a' + sum of values linked with 'b', sum of values linked with 'c').

function minExpression(A, B) {
    let sumA = 0;
    let sumB = 0;
    let sumC = 0;

    for (let i = 0; i < A.length; i++) {
        if (B[i] === 'a') {
            sumA += A[i];
        } else if (B[i] === 'b') {
            sumB += A[i];
        } else {
            sumC += A[i];
        }
    }

    return Math.min(sumA + sumB, sumC);
}

let A = [1, 2, 3, 4];
let B = ['a', 'b', 'c', 'a'];
console.log(minExpression(A, B));