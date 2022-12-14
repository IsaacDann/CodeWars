
let arr1 = [2, 4, 6, 8, 10]
let arr2 = [1, 3, 5, 7, 9]


function arrayPlusArray(arr1, arr2) {
    let sum = arr1.concat(arr2).reduce((acc, cur) => acc + cur);
    console.log(sum)
  }