var isHappy = function(number){

    // while(true) just means keep looping until a return statement stops it

    while (true){
     // reset the sum on each loop
     let sum = 0

      number = number.toString()
      for (const digit of number){
        sum += Math.pow(digit, 2)
    }
    if (sum === 1) {
        return true
    }
    // sum == 0 is not needed because the input is 1 or greater
    if (sum == 58) {
        return false
      }
      
      number = sum
    }
}