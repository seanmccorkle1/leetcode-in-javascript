var detectCapitalUse = function(str){
    
    if (str == str.toUpperCase()){
        return true
    }

    if (str === str.toLowerCase()){
        return true;
    }
    
    let firstLetter = str.at(0)    
    if (firstLetter == firstLetter.toUpperCase()){
        
        let rest = str.slice(1)
        
        if (rest.match(/[A-Z]/) == null){
            return true
        }

    }
    
    return false
}
