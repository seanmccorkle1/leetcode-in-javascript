var findLHS = function(array) {
    
    const obj = {}
    let longestSubsequenceThatDiffersBy1 = 0

    for (let num of array){
      obj[num] = ~~obj[num] + 1
    }
    
    console.log(obj)
    
    for (let stringKey in obj) {
        
      let num = Number(stringKey)
      let num2= num + 1
      
      const numPlusOneExists = obj[num2] !== undefined ? true : false
      
      if (numPlusOneExists) {
                    
          let harmoniousSubsequence = array.filter(n => n == num || n == num2)
          console.log(harmoniousSubsequence)
          
          if (harmoniousSubsequence.length > longestSubsequenceThatDiffersBy1){
            longestSubsequenceThatDiffersBy1 = harmoniousSubsequence.length  
          }

          console.log(`longest: ${longestSubsequenceThatDiffersBy1}`)
      }
      
    }
    
  return longestSubsequenceThatDiffersBy1
}

console.log(findLHS([1,3,2,2,5,2,3,7]),  5, "the longest harmonious subsequence is [3,2,2,2,3]")

// console.log(findLHS([1,1,1,1]), 0, "need 2 distinct numbers")