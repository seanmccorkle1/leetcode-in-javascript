function restoreString(str, indexArray){

    const shuffledArray = new Array(indexArray.length);
    
    for (let i = 0; i < indexArray.length; i++){
        
        const currLetter = str[i] 
        let newIndex = indexArray[i]
        
        shuffledArray[newIndex] = currLetter
  }
    
    let shuffledString = shuffledArray.join("")
    return shuffledString
}

console.log(restoreString("codeleet", [4,5,6,7,0,2,1,3]))