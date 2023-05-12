var firstUniqChar = function (string) {
    
    const array = [...string]
    
    let firstUniqueLetter = array.find(letter => string.indexOf(letter )== string.lastIndexOf(letter))
    
    if (firstUniqueLetter){
        let indexOfFirstUnique = array.indexOf(firstUniqueLetter)
        return indexOfFirstUnique
    }
    
    return -1
}
console.log(firstUniqChar("leitcode"), 0, "'l' is the first unique")