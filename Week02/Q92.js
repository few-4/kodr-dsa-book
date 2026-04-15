// Q92. Matrix Diagonal Sum

let mat = [[1,2,3],[4,5,6],[7,8,9]]

let sum = 0
for(let i = 0; i < mat.length; i++) {
    sum += mat[i][i]
    sum += mat[i][mat.length - 1 - i]
}

if(mat.length % 2 === 1) {
    sum -= mat[Math.floor(mat.length / 2)][Math.floor(mat.length / 2)]
}

console.log(sum)