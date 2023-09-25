/**
 Great Magicians: Start with a copy of your program from Exercise 41. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
 */


//array of magician's name

const magicians:string[] = ["Hery potter", "Elvish","David Copperfield","Ron Weasly"];

function show_magicians(magicians:string[]):void{
    magicians.forEach((magician:string)=>{
        console.log(magician);
    });
}

function make_great(magician:string[]):string[] {
    const greatMagicians:string[] = magicians.map(magician => `the great ${magician}.`)
    return greatMagicians;
}

//modify the array to add "the great" to each magician's name

const greatMagicianNames:string[] =make_great(magicians)

//call the function to show orignal magician's names
console.log("Orignal Magicians")
show_magicians(magicians);

//call the function to know great magicians name
console.log("\nGreat Magicians")
show_magicians(greatMagicianNames)


