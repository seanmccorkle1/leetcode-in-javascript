

var replaceDigits = function(s) {    
    let array = s.trim().split("")
    let index = 1
    
    while (index < array.length){
        
        let charCodeOfLeftLetter = array[index - 1].charCodeAt()
        let  shift = Number(array[index])        
        
        let shiftAsLetter = String.fromCharCode(charCodeOfLeftLetter + shift)
        
        array[index ]= shiftAsLetter
        index+=2
    }
    return array.join("")
}

console.log(replaceDigits("a1c1e1"), "abcdef")