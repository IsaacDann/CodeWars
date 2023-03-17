// Write a function which calculates the average of the numbers in a given list.

function findAverage(array) {
    if(array.length === 0){
      return 0
    }else{
      return array.reduce((a, c) => a + c, 0) / array.length
    } 
  }