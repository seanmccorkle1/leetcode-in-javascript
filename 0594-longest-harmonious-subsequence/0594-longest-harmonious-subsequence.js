var findLHS = function(array) {
    
    const obj = {}
    let longestSubsequenceThatDiffersBy1 = 0

    for (let num of array){
      obj[num] = ~~obj[num] + 1
    }
    
    console.log(obj)
    
    for (const subarray of Object.entries(obj)) {

      let num = Number(subarray[0])
      let num2= num + 1
      
    //   let frequencyOfNum1 = obj[num]
    //   let frequencyOfNum2 = obj[num2]

      const numPlusOneExists = obj[num2] !== undefined ? true : false
      console.log(`num2: ${num2}`)
      
      console.log(obj[2])
      
      if (numPlusOneExists) {
                    
          let harmoniousSubsequence = array.filter(n => n == num || n == num2)
          console.log(harmoniousSubsequence)


        //   let combinedFrequencies = frequencyOfNum1 +frequencyOfNum2
          
          if (harmoniousSubsequence.length > longestSubsequenceThatDiffersBy1){
            longestSubsequenceThatDiffersBy1 = harmoniousSubsequence.length  
          }

          console.log(`longest: ${longestSubsequenceThatDiffersBy1}`)
      }
      
    }
    
  return longestSubsequenceThatDiffersBy1
}

console.log(findLHS([1,1,1,1]))
// console.log(findLHS([1,3,2,2,5,2,3,7]),  5, "the longest harmonious subsequence is [3,2,2,2,3]")