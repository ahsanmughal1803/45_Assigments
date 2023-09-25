/*
Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
 */
//array of magician's name

const magicians:string[] = ["Hery potter", "Elvish","David Copperfield","Ron Weasly"];

function show_magicians(magicians:string[]):void{
    magicians.forEach((magician:string)=>{
        console.log(magician);
    });
}

//call the function to show the magician's name

show_magicians(magicians);