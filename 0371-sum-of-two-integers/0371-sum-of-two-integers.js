var getSum = function(num1, num2) {

    let carry;
    
    while((num1 & num2) != 0){
        
        carry = (num1 & num2) << 1

        num1 ^= num2
        // num1 = num1 ^ num2
        num2 = carry
      }
      return num1 ^ num2
}
