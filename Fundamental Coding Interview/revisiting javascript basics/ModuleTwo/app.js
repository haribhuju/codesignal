// solution for q5
// Define a string named 'word' to represent the phrase we'll work with
let word = "FRUIT Salad";

// TODO: Initialize a counter to hold the number of non-vowel characters
let numberOfNonVowel = 0;

// TODO: Use a for loop to iterate over each character in the string
// TODO: Inside the loop, write a condition to check if the character is not a vowel or a space
// Don't forget to consider both lowercase and uppercase characters

// TODO: If the condition is true, increase the counter for non-vowel characters

for (let i = 0; i < word.length; i++) {
  let wordI = word[i].toLowerCase();

  if (
    wordI === "a" ||
    word[i] === "e" ||
    wordI === "i" ||
    wordI === "o" ||
    wordI === "u" ||
    wordI === " "
  ) {
    continue;
  }
  numberOfNonVowel++;

  // let vowelsAndSpace = "aeiou ";
  // if (!vowelsAndSpace.includes(wordI)) {
  //     numberOfNonVowel++;
  // }
}

// TODO: Finally, print out the count of non-vowel characters
console.log(numberOfNonVowel);
