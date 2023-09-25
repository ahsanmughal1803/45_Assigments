"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
Q: 3; //Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let PersonName = "Faiza Mughal";
//step:1 person's name in lower case;
let lowercaseName = PersonName.toLowerCase();
console.log(lowercaseName);
//step:2 person's name in uppercase;
let uppercaseName = PersonName.toUpperCase();
console.log(uppercaseName);
//step:3 person's name in titlecase;
let words = PersonName.split(" ");
let titlecaseName = " ";
for (let i = 0; i < words.length; i++) {
    titlecaseName += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase() + " ";
}
console.log(titlecaseName);
