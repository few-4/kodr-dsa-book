// Q41	Make a choice based calculator using do while

let choice;
let num1;
let num2;

do {
    
    choice = Number(prompt(
        "Choose operation: 1. Add 2. Subtract 3. Multiply 4. Divide 5. Exit: "
    ));

    if (choice !== 5 && choice<=5) {
        num1 = Number(prompt("Enter first number: "));
        num2 = Number(prompt("Enter second number: "));
    }
    

    switch (choice) {
        case 1:
            console.log("Result:", num1 + num2);
            break;

        case 2:
            console.log("Result:", num1 - num2);
            break;

        case 3:
            console.log("Result:", num1 * num2);
            break;

        case 4:
            if (num2 !== 0) {
                console.log("Result:", num1 / num2);
            } else {
                console.log("Cannot divide by 0");
            }
            break;

        case 5:
            console.log("Exiting calculator...");
            break;

        default:
            console.log("Invalid choice");
    }

} while (choice !== 5);