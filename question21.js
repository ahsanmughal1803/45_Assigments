"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
*/
const bouquet = {
    name: "Spring Delight",
    price: 260,
    description: "Beautiful arrangment of spring flowers."
};
//define an array of objects.
let bouquets = [];
// pushing multiple objects.
bouquets.push(bouquet);
bouquets.push({
    name: "Summer Bliss",
    price: 460,
    description: "Beautiful arrangment of summer flowers."
});
let bouquet3 = {
    name: "Red Hot",
    price: 260,
    description: "Beautiful arrangment of  Red roses."
};
bouquets.push(bouquet3);
//console.log(bouquets);
bouquets.push({ name: "Freshness", price: 190, description: "A beautiful arrangement of white and yellow flowers." });
//console.log(bouquets);
//function to display bouquets.
function displayBouquets(bouquets) {
    for (let i of bouquets) {
        console.log(`title: ${i.name}
            description: ${i.description}
            price: ${i.price}
            _________________\n`);
    }
}
displayBouquets(bouquets);
