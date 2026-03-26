// Q45	Project - Restaurant v1.0
let choice;
let bill = 0;
do {
    choice = Number(prompt("Select your choice: \n1. Dessert \n2. Snacks \n3. South Indian \n4.North Indian \n5. Bill \n6. Exit"))
    switch (choice) {
        case 1:
            let dessert;
            do {
                dessert = Number(prompt("Select dessert: \n1. Rasgulla \n2. Gulab Jamun \n3. Exit"))
                if (dessert == 1) {
                    bill += 100;
                } else if(dessert == 2){
                    bill += 200;   
                }
            } while (dessert!==3);
            break;
        case 2:
            let snacks;
            do {
                snacks = Number(prompt("Select snacks: \n1. Chips \n2. Kurkure \n3. Exit"))
                if (snacks === 1) {
                    bill += 100;
                } else if(snacks === 2){
                    bill += 200;   
                }
            } while (snacks!==3);
            break;
        case 3:
            let southIndian;
            do {
                southIndian = Number(prompt("Select southIndian dish: \n1. Idli \n2. Dosa \n3. Exit"))
                if (southIndian === 1) {
                    bill += 100;
                } else if(southIndian === 2){
                    bill += 200;   
                }
            } while (southIndian!==3);
            break;
        case 4:
            let northIndian;
            do {
                northIndian = Number(prompt("Select northIndian dish: \n1. Daal Baati \n2. Aalu paratha \n3. Exit"))
                if (northIndian === 1) {
                    bill += 100;
                } else if(northIndian === 2){
                    bill += 200;   
                }
            } while (northIndian!==3);
            break;
        case 5:
            console.log(bill)
            break;
    
        case 6:
            console.log("Exiting...");
            break;

        default:
            console.log("Invalid choice");
    }
    
} while (choice !== 6);