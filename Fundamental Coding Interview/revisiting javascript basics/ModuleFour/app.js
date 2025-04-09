// find the number of uppercase,lowercase and non-alphabetic characters in a string as well as change lowercase characters to uppercase and vice versa

const text = "JavaScript is awesome!";
// TODO: Modify the loop to count the number of lowercase characters
let cleanedText = "";
let numberOfLowerCase = 0;
let numberOfUppercase = 0;
let numberOfNonAlphabet = 0;

for (let i = 0; i < text.length; i++) {
  let c = text[i];
  if (c === c.toLowerCase() && c !== c.toUpperCase()) {
    cleanedText += c.toUpperCase();
    numberOfLowerCase++;
  } else if (c === c.toUpperCase() && c !== c.toLowerCase()) {
    cleanedText += c.toLowerCase();
    numberOfUppercase++;
  } else {
    // Keep non-alphabetical characters unchanged
    cleanedText += c;
    numberOfNonAlphabet++;
  }
}

// This should print the count of lowercase characters
console.log(cleanedText); // Initially outputs: "jAVAsCRIPT IS AWESOME!"
console.log(numberOfLowerCase);
console.log(numberOfUppercase);
console.log(numberOfNonAlphabet);

//keeping only alphabetical characters and making them uppercase

function processText(text) {
  let newText = "";
  for (let i = 0; i < text.length; i++) {
    let c = text.charAt(i);

    if (/[a-zA-Z]/.test(c)) {
      newText += c.toUpperCase();
    }
  }
  console.log("Processed Text:", newText);
}

processText("Happy Coding, Friends!");

// Output: Processed Text: HAPPYCODINGFRIENDS

// encoding the string

function encryptString(text) {
  let encrypted = "";
  for (let i = 0; i < text.length; i++) {
    let c = text.charAt(i);
    // TODO: Check if `c` is a letter and it is not the letter 'z' or 'Z'.
    //  TODO: If the letter is 'z', change it to 'a'. If it is 'Z', change it to 'A'.
    if (c === "z") {
      encrypted += "a";
    } else if (c === "Z") {
      encrypted += "A";
    } else if (/[a-yA-y]/.test(c)) {
      // TODO: If it is a letter other than 'z' or 'Z', shift its value by 1 in the ASCII table.
      let charCodeOfC = c.charCodeAt() + 1;
      encrypted += String.fromCharCode(charCodeOfC);
    } else {
      //TODO:  If `c` is not a letter, append it unchanged to the encrypted string.
      encrypted += c;
    }
  }
  return encrypted;
}

console.log("The encrypted text is: " + encryptString("Hello, Java!")); // Should print out "Ifmmp, Kbwb!"

// caesar cipher

// Simple text encryption using Caesar Cipher technique
// The Caesar Cipher for `shift = 3` cyclically shifts every letter of the word by 3 positions:
// a -> d, b -> e, c -> f, ..., x -> a, y -> b, z -> c

// Implement the encryption logic by shifting each alphabet character
function encryptText(text) {
  let encrypted = "";
  for (let i = 0; i < text.length; i++) {
    let c = text[i];
    if (/[a-zA-Z]/.test(c)) {
      // check if the character is a letter
      let shift = 3;
      // TODO: Use correct calculations to shift the character within the alphabet
      if (/[a-z]/.test(c)) {
        encrypted += String.fromCharCode(
          ((c.charCodeAt(0) - 97 + shift) % 26) + 97
        );
      } else {
        encrypted += String.fromCharCode(
          ((c.charCodeAt(0) - 65 + shift) % 26) + 65
        );
      }

      // Hint: 'A' = 65, 'a' = 97
      // Hint 2: You can use the modulo (%) operator to wrap around the alphabet
    } else {
      encrypted += c; // keep non-letter characters unchanged
    }
  }
  return encrypted;
}

// Example text to encrypt
let originalText = "Hello, JavaScript!";
// The encryptText function call and console.log statement should remain the same as the solution
let encryptedText = encryptText(originalText);
console.log(encryptedText); // Correct output after TODO should be 'Khoor, MdydVfulsw!'

// counting the digits

// TODO: Define a function to count digits in the given text
// The function should take one parameter: a string inputText
// TODO: Initialize a count variable to 0

// TODO: Implement a loop that goes through each character in the string

// TODO: If the character is a digit, increment the count

// TODO: Return the count of digits

// TODO: Call the function with a sample string and log the output
function countDigits(inputText) {
  let count = 0;
  for (let i = 0; i < inputText.length; i++) {
    let char = inputText[i];
    if (/[0-9]/.test(char)) {
      count++;
    }
  }
  return count;
}

console.log(countDigits("Hello123, JavaScript World 1232023!"));
