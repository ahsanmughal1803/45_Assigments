/*
 Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

• If the alien’s color isn’t green, print a statement that the player just earned 10 points.

• Write one version of this program that runs the if block and another that runs the else block.
*/
//Version 1 (run the if block)
console.log(`\n1st version of code`)
let aline_color: string='green'

if(aline_color === 'green'){
    console.log('Congratulations! You just earned 5 points for the shooting aline.');
}else{
    console.log('Congratulations! You just earned 5 points for the shooting aline.');
}

//version 2 (run the else block)
console.log(`\n2nd version of code`)
aline_color='blue'

if(aline_color === 'green'){
    console.log('Congratulations! You just earned 5 points for the shooting aline.');
}else{
    console.log('Congratulations! You just earned 5 points for the shooting aline.');
}
export{};