// Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.

// Division by zero should return NaN.

function remainder(n, m){
    let arr = [n, m]
    arr.sort((a, b)=> a - b)
    return arr[1] % arr [0]
  }