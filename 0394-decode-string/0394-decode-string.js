var decodeString = function(string) {

    // ([a-z]+) is (acc) in 1 group, (acc).repeat(3)
    //([a-z])+ is [a-z][a-z]([a-z]), only goes on the last group
    
    const regex = /(\d+)\[([a-zA-Z]+)\]/g        
    const replaceFunction = (match,number,letter) => letter.repeat(number)

          while (string.includes("]")){
        
        string
    
        string.replace(regex, replaceFunction)
        // string.replace(regex, (match,number,letter) => letter.repeat(number))
        
        string = string.replace(/(\d+)\[([a-zA-Z]+)\]/g, (match,number,letter) => letter.repeat(number) )
    }
    
    return string
}

