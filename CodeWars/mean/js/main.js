var findAverage = function (nums) {
    let sum = nums.reduce((a, c) => a + c, 0)
    return sum/nums.length
  }