

var topKFrequent = function (array, kMostFrequent) {

  const freqMap = new Map()
  const setArray = [] // array of sets
  const kMostFrequentArray = [] 

  for (const number of array) {
    freqMap.set(number, (freqMap.get(number) || 0) + 1) // frequency + 1
  }
    
  // there cant be two 5's in the map but there can be two numbers with a frequency of 5 each

for (let [number, frequency] of freqMap) { // existing set || new Set()
    setArray[frequency] = (setArray[frequency] || new Set()).add(number)  // set.add returns the new set  
  }

// Higher frequency means a higher index, start from the back to get the most frequent
// no sorting is why it looks like this
  
  setArray  

  for (let backIndex = setArray.length - 1; backIndex >= 0; backIndex--) {

     const setElement = setArray[backIndex]

  if (setElement  !== undefined) {
    
    // kMostFrequent-- doesnt work because it could be 2 or 3 numbers pushed at once in the set
    // it would need to be -= 2 or -=3 then
   
 
        kMostFrequentArray.push(...setElement)   // push the set as normal values
    }
    
    if (kMostFrequentArray.length == kMostFrequent) {
        return kMostFrequentArray
        // break
    }
  }
  // return kMostFrequentArray
}