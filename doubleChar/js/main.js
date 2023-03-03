// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

function doubleChar(str) {
    let doubleChar = ""
    
    for(let i = 0; i < str.length; i++){
      doubleChar += str[i] + str[i]
    }
    return doubleChar
  }
  