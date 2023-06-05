var countAsterisks = function(s) {
    
    s= s.split("|")
    
    let index = 0
    let count = 0
    
    // start from evens, [0-1], [2-3], [4-5]
    // [[0-1], [1-2], [2-3], [3-4]]
    
    while (index < s.length){
        
        let string = s[index]
        let array=string.match(/[\*]/g)
        
        console.log(array)
        if (array !== null){
            count += array.length
        }
        
        index += 2
    }
    return count
}

// console.log(countAsterisks("l|*e*et|c**o|*de|"))

console.log(countAsterisks("yo|uar|e**|b|e***au|tifu|l"))