var decodeString = function(string) {
    
    const regex = /(\d+)\[([a-zA-Z]+)\]/g        
    const replaceFunction = (match,number,letter) => letter.repeat(number)
    
    while (string.includes("]")){
        
        let shortened = string.replace(regex, replaceFunction)
        string = shortened
    }
    
    return string
}

