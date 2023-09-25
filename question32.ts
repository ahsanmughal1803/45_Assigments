/*
Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

• Make sure your comparison is case insensitive. If ' has been used, ' should not be accepted.
*/ 
//step 1 arrays
const current_users: string[] = ["Anaya","Hasma","Mehwish"];
const new_users:string[] = ["anaya","hasma","mehwish"];


//step2 functions

function checkUserNames(current_users:string[],new_users:string[]): void
{
//1st step function
    const lowercasedCurrentUsers= current_users.map(user =>user.toLowerCase());
//2nd step function
    for(const newUsers of new_users){
        const lowercasedNewUser = newUsers.toLowerCase();
        if(lowercasedCurrentUsers.includes(lowercasedNewUser)){
            console.log(`UserName "${newUsers}" is already taken.
            Please enter a new userName.`);
        }else{
            console.log(`userName "${newUsers}" is avalible.`);
        }

    }
}
//console.log(current_Users)

//test function

checkUserNames(current_users,new_users);