var areAlmostEqual= function(string1, string2){

    let diffCount = 0
    let twoLettersArray = []
    
    if (string1 === string2){
        return true
    }
    
    for (let index = 0; index < string1.length; index++) {
 
        let currString1Letter = string1[index]
        let currString2Letter = string2[index]

        if (currString1Letter === currString2Letter) {
          continue // no difference, dont do diffCount++
        }
 
        diffCount++
 
        // if (diffCount >= 3) {
        //     return false
        // }
      
        if (twoLettersArray.length === 0) {
            twoLettersArray = [currString1Letter, currString2Letter]
            continue
    }
 
    let prevString1Letter = twoLettersArray[0]
    let prevString2Letter = twoLettersArray[1]
 
 
    if (prevString1Letter === currString2Letter && prevString2Letter === currString1Letter) {
        continue   // dont return false
    }
    return false
}
  
    // diffCount 0 means theyre the same
    // need 2 letters to swap
  
   if (diffCount === 2){
        return true
    }
    else return false
}
 
