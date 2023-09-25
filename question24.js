"use strict";
/*
More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array
*/
Object.defineProperty(exports, "__esModule", { value: true });
//Tests for equality and inequality with strings.
const str1 = "Hello";
const str2 = "hello";
console.log(str1 === str2); // false
console.log(str1 !== str2); //true
//Tests using the lower case function.
const text1 = "Hello World";
const text2 = "hello world";
console.log(text1.toLowerCase() === text2); //true
//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
const num1 = 10;
const num2 = 5;
console.log(num1 === num2); // false
console.log(num1 !== num2); // true
console.log(num1 > num2); // true
console.log(num1 < num2); // false
console.log(num1 >= num2); // true
console.log(num1 <= num2); // false
//Tests using "and" and "or" operators
const x = 10;
const y = 15;
const z = 20;
console.log(x < y && y < z); //true both
console.log(x < y || y < z); //true , at leat one
console.log(x > y && y > z); //false both
console.log(x > y || y > z); //false , at leat one
//Test whether an item is in a array
const fruits = ["apple", "banana", "orange"];
console.log(fruits.includes("banana")); // true
console.log(fruits.includes("kiwi")); //false
//Test whether an item is not in a array
const colours = ["red", "green", "blue"];
console.log(!colours.includes("purple")); // true
console.log(!colours.includes("green")); //false
