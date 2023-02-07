console.log('hello')

function XO(str) {
    let xS = []
    let oS = []
    let arr = str.toLowerCase().split('')
    arr.forEach(element => {
        if(element === 'x'){
            xS.push(element)
        }else if(element === 'o'){
            oS.push(element)
        }
    });
    return(xS.length === oS.length)
 }


XO('helloxoxoxxx')