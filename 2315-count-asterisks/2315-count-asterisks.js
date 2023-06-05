var countAsterisks = function(s) {
    
    s= s.split("|")
    
    let index = 2
    let count = 0
    
    if (s[0].includes("*")){
        s[0]  = s[0].replace(/[^\*]/g, "")
        count += s[0].length
        // count += s[0].match(/[\*]/g).length
    }
    
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