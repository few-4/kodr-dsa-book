// Q93. Transpose Matrix

let matrix = [[1,2,3],[4,5,6],[7,8,9]]

let transpose = []
for(let i = 0; i < matrix.length; i++) {
    transpose.push([])
    for(let j = 0; j < matrix[i].length; j++) {
        transpose[i].push(matrix[j][i])
    }
}

console.log(transpose)