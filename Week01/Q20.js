// Q20	Shop discount

let discount = totalAmount <= 500 ? 5
             : totalAmount <= 1000 ? 10
             : totalAmount <= 2000 ? 20
             : 0;

let finalAmount = totalAmount - (totalAmount * discount / 100);

console.log("Amount to be paid", finalAmount);