/* Variables */

// const myName = 'Komgrit' ;
// let height = 175 ;
// let isMale = true ;
// let city = null ;
// let bigNumber = 10n ;

// console.log(myName, height, isMale, city, bigNumber);

/* Object */

// const person = {
//   name: "Komgrit",
//   height: 175,
//   city: "Bangkok",
// };

// console.log(person); //การเข้าถึง object
// console.log(person.name); //การเข้าถึง property ใน object

// person.height = 180; //การเปลี่ยนค่า property
// console.log(person);

// person.weight = 70; //การเพิ่มค่าเข้าไปใน object
// console.log(person);

/* Array */

// const number = [5, 10, 15, 20]; // การสร้าง Array
// console.log(number);
// console.log(number[2]); //การเข้าถึง index ใน array

// number.push(2); //การเพิ่มค่าใน Array
// console.log(number);

/* Conditions */

let passwords = "";

// 1 Conditions
// if (passwords.length >= 8) {
//   console.log("password is valid");
// } else {
//   console.log("password is invalid");
// }

// 2 Conditions
// if (passwords.length >= 8 && passwords.length <= 12) {
//     console.log("password is valid");
//   } else {
//     console.log("password is invalid");
//   }

// Check value is null

if (passwords === "") {
  console.log("password is required");
} else if (passwords.length >= 8 && passwords.length <= 12) {
  console.log("password is valid");
} else {
  console.log("password is invalid");
}
