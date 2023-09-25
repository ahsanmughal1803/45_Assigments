"use strict";
/*
 No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed.
 */
//empty array case
Object.defineProperty(exports, "__esModule", { value: true });
let emptyUsersNames = [];
//no_empty array case
const userNames = ["Anaya", "Hasma", "Mehwish"];
//functional case
function greetUsers(username) {
    if (userNames.length === 0) {
        console.log("We need to find some users!");
        return;
    }
}
for (const username of userNames) {
    if (username.toLowerCase() === 'admin') {
        console.log('Hello admin, would you like to see a status report?');
    }
    else {
        console.log(`Hello ${username}, thank you for logging it again.`);
    }
}
console.log(`For non empty username:\n`);
greetUsers(userNames);
// to make array empty we just assinged empty array to usernames
console.log(`\n\n For empty username:\n`);
greetUsers(emptyUsersNames);
