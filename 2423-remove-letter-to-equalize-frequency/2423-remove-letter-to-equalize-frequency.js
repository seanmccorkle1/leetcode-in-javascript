var equalFrequency = function(string) {
    
    const obj = {}
    for (let letter of string){
        obj[letter] ? obj[letter]++ : obj[letter] = 1
    }
    
    // [1,1,2] - good
    // [1,1,1] - good
    // [1,2,2] - good
    // [1,3] - good
    
    // [2, 2] - bad
    // [1,1,2,2] - bad
    
   const frequencyArray = [...new Set(Object.values(obj))].sort((a,b) => a-b)
   
   let valueArray = Object.values(obj)
   valueArray.sort((a,b)=> a-b) 
    
   frequencyArray
   valueArray


    let slice = valueArray.slice(0, valueArray.length - 1)

    if ((valueArray.at(-1) - 1 == valueArray.at(-2)) && new Set(slice).size == 1){
        return true
    }
    
    // if (valueArray.at(0) + 1 == valueArray.at(1) &&  new Set(valueArray.slice(1)).size == 1){
    //     return true
    //     }         
    
   if (frequencyArray.length == 1 && frequencyArray[0] == 1){
       return true
   }
   
    if (valueArray.length == 1){
        return true
    }
    
    if (valueArray[0] == 1 && new Set(valueArray.slice(1)).size == 1) {
        return true
    }

    // if (frequencyArray.length == 2 && frequencyArray[0] +1 == frequencyArray[1]){
    //     return true
    // }
     
   // if (frequencyArray.length == 2 && Math.max(...frequencyArray) - 1 == Math.min(...frequencyArray)) {
   //     return true
   // }
        
    return false
}

// console.log(equalFrequency("abcc"), true)
// console.log(equalFrequency("ddaccb"), false)

equalFrequency("aaaabbbbccc")