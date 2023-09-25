"use strict";
/*Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
*/
Object.defineProperty(exports, "__esModule", { value: true });
let favouriteTransportation = [];
favouriteTransportation.push(["motercycle", "Honda"]);
favouriteTransportation.push(["car", "Audii"]);
favouriteTransportation.push(["bicycle", "Soharb"]);
//console.log(favouriteTransportation);
//I would like to own my Honda motorcycle.
//using for each loop to print a series of statements
favouriteTransportation.forEach(([transport, brand]) => { console.log(`I would like to own a ${brand} ${transport} .`); });
