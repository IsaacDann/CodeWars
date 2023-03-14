// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

var capitals = function (word) {
	let w2 = word.split('')
  let caps = []
  for(let i = 0; i < w2.length; i++){
    if(w2[i] == w2[i].toUpperCase()){
      caps.push(i)
    }
  }
  return caps
};