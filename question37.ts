/*
T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.*/

function make_shirt(size :string ="Large",message :string ="itx Mughal"):void 
{
   return console.log(`Size ${size}, Message ${message}`);
}
//Large shirtwith defult message
make_shirt()//Output: Size: Large , Message:'itx Mughal'

//Medium shirt with deafult message
make_shirt("Medium")//Output: Size: Large , Message:'itx Mughal'

//costum shirt with different message
make_shirt("small", "Hello World")//Output: Size: small , Message:'Hello World'