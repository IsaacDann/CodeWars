// Given an integer n and two other values, build an array of size n filled with these two values alternating.




function alternate(n, firstValue, secondValue){
    let arr = []
    for(let i= 0; i <n; i++){
        if(!(i % 2)){
            arr.push(firstValue)
        }else{
            arr.push(secondValue)
        }
        
        
       
    }
    return arr
  }

  alternate(8, 'red', 'blue')
