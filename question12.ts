//Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

let names: string[]=['Hasma','Mehwish','Anaya','Aman','Ali'];

//loop through each name in array;

for (let name of names)

{
    //print a personalize message for each friend;

    console.log(`Hello ${name},hope you are doing well these days.`);

}