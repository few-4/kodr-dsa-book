// Q42	Print Weekday using Switch

let num = Number(prompt("Give a number: "))

switch (num) {
    case 1:
        console.log("Sunday")
        break;
    case 2:
        console.log("Monday")
        break;
    case 3:
        console.log("Tuesday")
        break;
    case 4:
        console.log("Wednesday")
        break;
    case 5:
        console.log("Thursday")
        break;
    case 6:
        console.log("Friday")
        break;
    case 7:
        console.log("Saturday")
        break;

    default:
        console.log("Invalid number, please enter number b/w 1-7")
        break;
}