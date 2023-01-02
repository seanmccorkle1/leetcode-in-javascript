var detectCapitalUse = function(str){
    
    if (str == str.toUpperCase()){
        return true
    }

    if (str === str.toLowerCase()){
        return true;
    }
    
    let firstLetter = str.at(0)    
    if (firstLetter == firstLetter.toUpperCase()){
        
        let body = str.slice(1)
        let lowercaseBody = body.toLowerCase()
        if (body==lowercaseBody) {
            return true
        }

    }
    
    return false
}
