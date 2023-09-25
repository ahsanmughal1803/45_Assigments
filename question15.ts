/*Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still in your list.
*/


let guestlist: Array<string> = [
    "Aman",
    "Hassan",
    "Ali",
     "Miral",
     "Hasma",
     "Anaya"
];

// Step 1. Print the name of person who can't make it.

let guestHowCantMakeIt : string= "Aman"
console.log(`${guestHowCantMakeIt} can't make it to dinner.`)

// Step 2. Replace the name of guest who can't make it.

let NewGuest: string="Ayesha"
let indexOfguestHowCantMakeIt: number= guestlist.indexOf
(guestHowCantMakeIt)
console.log(indexOfguestHowCantMakeIt);

if (indexOfguestHowCantMakeIt !== -1)
{
    guestlist[indexOfguestHowCantMakeIt] = NewGuest
}
console.log(guestlist[0])

// Step 3. Print a second set of invitation message.
console.log("Second set of invitation message:")
guestlist.forEach((guest:string) =>
{
   console.log(`Dear ${guest}, you are invited to a dinner.`)
})

export{guestlist}
