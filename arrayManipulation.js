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
  
  // Example usage:
  let numbers = [1, 2, 3, 4, 5, 6];
  let result = processArray(numbers);
  console.log(result); // Output: [3, 4, 9, 16, 15, 36]