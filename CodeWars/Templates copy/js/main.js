// Get the mean of an array rounded down to nearest whole number
function getAverage(marks){
    let length = marks.length
    let sum = marks.reduce((a, c)=> a + c)
    let avg = sum / length
    return Math.floor(avg)
  }
