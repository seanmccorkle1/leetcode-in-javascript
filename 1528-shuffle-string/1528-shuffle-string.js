function restoreString(str, indexArray){

    let emptyCharArray = new Array(indexArray.length);
    
    for (let i = 0; i < indexArray.length; i++){
        
        const currLetter = str[i] 
        let newIndex = indexArray[i]
        
        emptyCharArray[newIndex] = currLetter
  }
    
    let shuffledString = emptyCharArray.join("")
    return shuffledString
}

console.log(restoreString("codeleet", [4,5,6,7,0,2,1,3]))