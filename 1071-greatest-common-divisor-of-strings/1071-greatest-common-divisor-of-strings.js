var gcdOfStrings = function(string1, string2) {   
    let concat = string1+string2
    let reverseConcat = string2+string1
    
    if (concat != reverseConcat ) {
        return ""
    }
    
  const gcd = (length1, length2) => {
      
      if (length2 == 0){
          return length1
      }
      else {
          return gcd(length2, length1 % length2) 
      }
  }
  
  // (length2 == 0? a : gcd(b, a % b))
  
  const endLength =gcd(string1.length, string2.length) 
  return string1.slice(0, endLength)
}
