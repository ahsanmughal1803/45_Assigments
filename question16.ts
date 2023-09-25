/*More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list
*/
let guestlist: Array<string> = [
    "Aman",
    "Hassan",
    "Ali"
];


//Exercise 16 Solution

//step 1. informating people that you found a big dinner table.
for (let guest of guestlist)
{
    console.log(`Hello ${guest}, we found a bigger dinner table.`);
}
//Step 2.Add new guest for the beginning of Array.
let newGuestAtBeginning: string= "Faiza"
guestlist.unshift(newGuestAtBeginning)

console.log(guestlist);




//Step 3. Add one guest to the middle of array.
let newGuestInMiddle: string="Kamran"
let middleIndex: number= Math.floor(guestlist.length/2)
guestlist.splice(middleIndex, 0, newGuestInMiddle)

console.log(guestlist);

// Step 4.Use append()to add new guest to the end of your list

let newGuestAtEnd:string= "laiba"
guestlist.push(newGuestAtEnd)

console.log(guestlist)

//Final step.Print a new set of invitation message.

console.log("New set of invitation message:")

for(let guest of guestlist)
{
    console.log(`Dear ${guest}, you are invited to a dinner.`)
}
