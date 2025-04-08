// Solution for Q1

// A packing list for a journey using JavaScript arrays
let travelItems = ["passport", "camera", "sunscreen", "hat"];

// Currently, sunglasses are being appended to the list.
travelItems.push("sunglasses");
// TODO: Your task is to add them at index 2 instead.
travelItems.splice(2, 0, "sunglasses");
console.log("Updated travel items:", travelItems);

// Solution for Q2

// TODO: Start by creating an array representing suitcase items
let suitcase = ["shirt", "shorts", "toothbrush", "shoes"];

// TODO: Let's add "sunglasses" at the end of our suitcase
suitcase.push("sunglasses");

//TODO: Oops! We forgot socks. Let's insert socks at index 2
suitcase.splice(2, 0, "socks");
console.log("Updated suitcase: ", suitcase);

// TODO: Now, let's get the first and the last item from the suitcase
let firstItem = suitcase[1]; // 'shirt'
let lastItem = suitcase[suitcase.length - 1]; // 'sunglasses'
console.log(firstItem + " " + lastItem);

// TODO: Finally, let's remove "toothbrush" as we prefer to buy a new one at our destination
let indexOfToothbrush = suitcase.indexOf("toothbrush");
if (indexOfToothbrush > -1) {
  suitcase.splice(indexOfToothbrush, 1);
}
console.log("Final suitcase contents: ", suitcase);
// Expected output:
// Final suitcase contents: ["shirt", "shorts", "socks", "shoes", "sunglasses"]

// solution for Q3

// Let's simulate packing a bag for travel with Arrays and explore some operations!

let bag = ["t-shirt", "shorts", "sandals"];

// TODO: Add "sunglasses" to our bag at the end
bag.push("sunglasses");

// TODO: Insert "hat" into the bag at the position right after "t-shirt"
let indexOfTshirt = bag.indexOf("t-shirt");
bag.splice(indexOfTshirt + 1, 0, "hat");
// Printing out our bag to see all items packed
console.log(bag);
// Expected output with TODOs completed: ['t-shirt', 'hat', 'shorts', 'sandals', 'sunglasses']

// Solution for Q4

// Travel Packing List and Replacement
const packingList = ["clothes", "toothbrush", "passport", "camera"];

const itemToCheck = "passport";
const replacementItem = "sunglasses";

// TODO: Find the index of itemToCheck in the packingList
let indexOfPassport = packingList.indexOf(itemToCheck);
// TODO: Replace itemToCheck with replacementItem in the packingList using the index found
packingList.splice(indexOfPassport, 1, replacementItem);
// Print out the results
console.log("Updated Packing List: " + packingList);

// Expected output: "Updated Packing List: ['clothes', 'toothbrush', 'sunglasses', 'camera']"

// Solution for Q5
// Initialize an empty array named 'suitcase'
const suitcaseOne = [];

// TODO: Add items to your suitcase
suitcaseOne.splice(0, 0, "laptop", "t-shirt", "pants");

// Declare a string variable for your goodbye message

// TODO: Assign a farewell message to the variable
let message = "I am going for a holiday, will be back in 2 months";

// Access the first and last item in your suitcase
// TODO: Print the first item
console.log(suitcaseOne[0]);
// TODO: Print the last item
console.log(suitcaseOne[suitcaseOne.length - 1]);

// Send off with a farewell in uppercase
// TODO: Convert and print the farewell message in uppercase
console.log(message.toUpperCase());

// Expected output:
// laptop
// pants
// I AM GOING FOR A HOLIDAY, WILL BE BACK IN 2 MONTHS

// Solution for Q6
// Given mission name
const missionName = "Sort";

// TODO: Print the original first and last character of the mission name
console.log(missionName.charAt(0));
console.log(missionName[missionName.length - 1]);

// TODO: Create a new string with the first letter as 'P' and last letter as 'k', the other letters should remain unchanged.
let newMissionName = `P${missionName.slice(1, -1)}k`;

// TODO: Print the updated mission name
console.log(newMissionName);
// Make sure it prints "Pork"
