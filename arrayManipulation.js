// arrayManipulation.js

function processArray(arr) {
    return arr.map(num => {
      if (num % 2 === 0) {
        return num * num;
      } else {
        return num * 3;
      }
    });
  }
  
  function formatArrayStrings(stringArr, numArr) {
    return stringArr.map((str, index) => {
      if (numArr[index] % 2 === 0) {
        return str.toUpperCase();
      } else {
        return str.toLowerCase();
      }
    });
  }
  
  // Example usage:
  let strings = ['Hello', 'World', 'JavaScript', 'is', 'fun'];
  let numbers = [1, 2, 3, 4, 5];
  let processedNumbers = processArray(numbers);
  let formattedStrings = formatArrayStrings(strings, processedNumbers);
  console.log(formattedStrings); // Output: ["hello", "WORLD", "javascript", "IS", "fun"]