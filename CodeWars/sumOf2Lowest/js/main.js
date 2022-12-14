// Given an array, create a function that returns the sum of the two lowest integers.


function sumTwoSmallestNumbers(numbers) {  
  let sorted = numbers.sort((a, b) => a- b)
  return sorted[0] + sorted[1]
}