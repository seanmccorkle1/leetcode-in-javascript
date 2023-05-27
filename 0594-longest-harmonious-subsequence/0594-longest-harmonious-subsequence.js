var findLHS = function(array) {
    
    const obj = {}
    let longestSubsequenceThatDiffersBy1 = 0
    
    for (let num of array){
      let frequency = ~~obj[num]
      obj[num] = frequency + 1
    }
    
    console.log(obj)
    
    for (const subarray of Object.entries(obj)) {

      let num = Number(subarray[0])
      let num2= num + 1
      
      let frequencyOfNum1 = obj[num]
      let frequencyOfNum2 = obj[num2]
      
      const numPlusOneExists = obj[num2] !== "undefined" ? true : false
      
      if (numPlusOneExists) {
                    
          let harmoniousSubsequence = array.filter(e => e == num2 || e == num)
          console.log(harmoniousSubsequence)
          let combinedFrequencies = frequencyOfNum1 +frequencyOfNum2
          
          if (combinedFrequencies > longestSubsequenceThatDiffersBy1){
            longestSubsequenceThatDiffersBy1 = combinedFrequencies  
          }
          
          console.log(`longest: ${longestSubsequenceThatDiffersBy1}`)
      }
      
    }
  
  return longestSubsequenceThatDiffersBy1
}

console.log(findLHS([1,3,2,2,5,2,3,7]),  5, "the longest harmonious subsequence is [3,2,2,2,3]")