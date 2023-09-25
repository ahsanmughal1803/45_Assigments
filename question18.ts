/*
Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.

• Print your array in its original order.

• Print your array in alphabetical order without modifying the actual list.

• Show that your array is still in its original order by printing it.

• Print your array in reverse alphabetical order without changing the order of the original list.

• Show that your array is still in its original order by printing it again.

• Reverse the order of your list. Print the array to show that its order has changed.

• Reverse the order of your list again. Print the list to show it’s back to its original order.

• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

*/

//Step 1.Creat an array to store Travle destination.

let travleDestinations: string[] = ["Tokyo","Paris","Dubai","Malta"]

//step 2. Print your array in its original order.
console.log("Orignal Order")
console.log(travleDestinations)

//step 3.Print your array in alphabetical order without modifying the actual list.

console.log("\n Alphabatical order without modifying the actual list.")
console.log([...travleDestinations].sort())

//Step 4.Show that your array is still in its original order by printing it.

console.log("\n Showing array is stilled in the orignal order.")
console.log(travleDestinations)

//Step 5 .Print your array in reverse alphabetical order without changing the order of the original list.
console.log("\n Reverse alphabetical order without modifying actual list.")
console.log([...travleDestinations].sort().reverse())

//Step 6. Show that your array is still in its original order by printing it again.
console.log("\n Showing array is still in its orignal order.")
console.log(travleDestinations)

//Step 7.Reverse the order of your list. Print the array to show that its order has changed.
console.log("\n Reverse order.")
travleDestinations.reverse()
console.log(travleDestinations)

//step 8.Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("\n Back to orignal")
travleDestinations.reverse()
console.log(travleDestinations)

//Step 9.Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("\n Change to Alphabatical order")
travleDestinations.sort()
console.log(travleDestinations)

//Step 10.• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("\n Change to reverse Alphabatical order")
travleDestinations.sort().reverse()
console.log(travleDestinations)































