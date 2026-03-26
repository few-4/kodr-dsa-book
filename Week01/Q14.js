// Q14	Extend the previous program and handle the wrong inputs. Print Good Morning Sir for input m or M & Good morning Ma'am for input F or f, else print Wrong Input.

let gender = prompt("Enter your gender: ").toLowerCase()

console.log(gender === "m" ? "Good morning Sir!" : gender === "f" ? "Good morning Mam!" : `Wrong input ${gender}`)