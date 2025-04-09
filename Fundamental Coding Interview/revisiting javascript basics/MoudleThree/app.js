// break statement ends the loop where as continue statement skips the loop for the current iteration

const temperatures = [25, 30, 18, 22, 30, 35];

// TODO: break the loop when encountering a temperature under 20
for (let temp of temperatures) {
  if (temp < 20) {
    console.log("It is very cold");
    break;
  } else if (temp > 25) {
    console.log("It is warm outside.");
    continue;
  }
  console.log("Might be chilly, dress appropriately.");
}

// this was a quick fix with while using continue

let i = 0;
const listSize = temperatures.length;

while (i < listSize) {
  if (temperatures[i] > 20) {
    console.log(`Temperature ${temperatures[i]} is greater than 20.`);
    i++;
    continue;
  }
  console.log(`Temperature ${temperatures[i]} might require a jacket.`);
  i++;
}

// here are understanding the skipping of some code using continue

// Loop through the temperatures to suggest clothing
for (const temp of temperatures) {
  if (temp < 15) {
    console.log("Wear warm clothes.");
  } else if (temp >= 20) {
    // TODO: Print a suggestion to wear light clothes.
    console.log("Wear a light clothes");
    // TODO: Add a line here that will skip the final print statement when it's warm enough for light clothes.
    continue;
  }
  console.log("Consider a light jacket."); // Suggestion for in-between temperatures
}

// another one
for (let temp of temperatures) {
  // TODO: Print "It's really hot." and exit the loop if temperature is above 30
  if (temp > 30) {
    console.log("It's really hot");
    break;
  } else if (temp < 20) {
    console.log("It's quite chilly");
    continue;
  }
  // TODO: Print "It's quite chilly." and skip to the next iteration if temperature is below 20
  console.log("Lovely weather.");
}

// final

// TODO: Define an array of temperatures
// done at the top
// TODO: Write a loop to go through each temperature in the array
for (let temperature of temperatures) {
  // TODO: Add an 'if' statement to check if the temperature is over 30
  // TODO: Print a message for being really hot and then exit the loop
  if (temperature > 30) {
    console.log("It's really hot");
    break;
  } else if (temperature < 15) {
    // TODO: Add an 'else if' condition before the general temperature message to check if the temperature is below 15
    // TODO: For temperatures that are too cold, print a specific message and skip to the next one
    console.log("It's really cold, Stay Indoor");
    continue;
  }

  // TODO: Print a message saying the temperature is nice for all other cases
  console.log("It's a lovely weather out there today");
}
