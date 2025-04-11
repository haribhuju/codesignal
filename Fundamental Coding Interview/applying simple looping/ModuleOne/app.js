/*  Task Statement and Description
Our task today is to form pairs of "opposite" elements in a given array of integers. In an array consisting of n elements, the first and last elements are known as "opposite", the second element and the second-to-last element are considered "opposite", and so on. For an array with an odd length, the middle element is its own "opposite".

You will be provided with an array of n integers. The value of n could range from 1 to 100, inclusive. The task will require you to return an array of String objects. Each String will consist of an element and its "opposite" element joined by a space.

Let's use the example array numbers as [1, 2, 3, 4, 5] to simplify our understanding. In this case, the output of our solution(numbers) function will be ["1 5", "2 4", "3 3", "4 2", "5 1"].
*/

function solution(numbers) {
  let result = [];
  let n = numbers.length;
  for (let i = 0; i < n; i++) {
    result.push(numbers[i] + " " + numbers[n - i - 1]);
  }
  return result;
}

console.log(solution([1, 2, 3, 4, 5]));
// Prints: [ '1 5', '2 4', '3 3', '4 2', '5 1' ]

// You are given an input array consisting of n integers ranging from 0 to 100, inclusive, where n represents the length of the array. Your task is to write a function that returns a new array of strings. Each string should consist of two elements joined by a space: an element from the input array paired with its geometrical mean with the 'opposite' element. The 'opposite' element of any element in the array is defined as the element at the corresponding position from the end of the array.
const number = [1, 2, 3, 4, 5];
function solution(numbers) {
  // TODO: implement this function
  let result = [];
  let n = numbers.length;

  for (let i = 0; i < n; i++) {
    let secondNumber = Math.sqrt(numbers[i] * numbers[n - i - 1]);
    let roundSecondNumber = (Math.round(secondNumber * 100) / 100).toFixed(2);

    result.push(`${numbers[i]} ${roundSecondNumber}`);

    console.log(result);
  }
  return result;
}

//You are provided with a list of n integers, where n ranges from 2 to 200, inclusive. The task is to return a list of pairs, each containing an integer and its reverse counterpart.

function solution(numbers) {
  // TODO: implement solution here
  let result = [];
  let n = numbers.length;

  for (let i = 0; i < n; i++) {
    let reverseNumber = parseInt(
      numbers[i].toString().split("").reverse().join(""),
      10
    );
    if (numbers.includes(reverseNumber)) {
      result.push([numbers[i], reverseNumber]);
    }
  }

  return result;
}

//find the sum of pair composed of an element and its opposite element through the mid point of the array

function solution(numbers) {
  console.log(numbers);
  // TODO: Implement solution here
  let result = [];
  let n = numbers.length;

  for (let i = 0; i < Math.ceil(n / 2); i++) {
    let oppositeNumber = numbers[n - i - 1];
    console.log(oppositeNumber);
    let finalNumber = numbers[i] + oppositeNumber;
    result.push(finalNumber);
  }

  return result;
}
