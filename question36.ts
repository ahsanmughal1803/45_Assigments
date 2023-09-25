/*
T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.

 */
//Definig a function that accept the size and text of message that should be printed on shirt.
const make_shirt =(size:string , message:string):void =>
{
    console.log(`Size: ${size}, Message: ${message}`)
}

//call the function;

//call the function with size and message;
let size:string ="medium"
let message:string="itx Mughal."
make_shirt(size,message);

//directly call the function:
make_shirt("large", "stay away from me");
