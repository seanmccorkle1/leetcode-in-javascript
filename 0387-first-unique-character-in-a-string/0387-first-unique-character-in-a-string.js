

var firstUniqChar = function (string) {
    
    const array = [...string]
    
    let firstFind = array.find(letter => string.indexOf(letter )== string.lastIndexOf(letter))
    
    return firstFind ? array.indexOf(firstFind) : -1
    if (string.length == 1){
        return 0
    }
    
    for (let index = 0; index < string.length; index++) {

        const letter= string[index]
        
        const stringOnlyHas1Index = string.indexOf(letter) == string.lastIndexOf(letter)
        
        if (stringOnlyHas1Index) {
            return index
        }
    }
    
    return -1
}

console.log(firstUniqChar("leitcode"), 0, "'l' is the first unique")