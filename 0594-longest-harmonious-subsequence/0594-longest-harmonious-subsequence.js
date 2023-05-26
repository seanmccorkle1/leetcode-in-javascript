var findLHS = function(array) {
    
    const obj = {}
    let LHSLength = 0
    
    for (let num of array){
      let frequency = ~~obj[num]
      obj[num] = frequency + 1
    }
  
  console.log(obj)

  
  for (let num in obj){
      
      num = Number(num)
      const nextElementIsHarmonious = obj[num + 1] ? true : false
      
      console.log(nextElementIsHarmonious)
      
      
      if (nextElementIsHarmonious) {
        let frequencyOfNum1 = obj[num]
        let frequencyOfNum2 = obj[num + 1]
        
        let combinedFrequencies = frequencyOfNum1 +frequencyOfNum2
        
        
        LHSLength = Math.max(combinedFrequencies, LHSLength)
        console.log(`longest: ${LHSLength}`)
      }
      
    }
  
  return LHSLength
}

console.log(findLHS([1,3,2,2,5,2,3,7]),  5)