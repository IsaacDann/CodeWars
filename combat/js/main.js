// Create a combat function that takes the player's current health and the amount of damage recieved, and returns the player's new health. Health can't be less than 0.

function combat(health, damage) {
    let x = health - damage
    if(x > 0){
      return x
    }else{
      return 0
    }
  }