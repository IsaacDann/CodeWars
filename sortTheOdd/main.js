// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

function sortArray(array) {
    // Create a new array to store the sorted odd numbers
    const sortedOdds = array
      // Filter the array to only include odd numbers
      .filter(num => num % 2 !== 0)
      // Sort the array in ascending order
      .sort((a, b) => a - b);
  
    // Loop through the original array
    return array.map(num => {
      // If the current number is odd, return the next sorted odd number
      if (num % 2 !== 0) {
        return sortedOdds.shift();
      }
      // Otherwise, return the original even number
      return num;
    });
  }
// or
  function sortArray(array) {
    const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
    return array.map((x) => x % 2 ? odd.shift() : x);
  }