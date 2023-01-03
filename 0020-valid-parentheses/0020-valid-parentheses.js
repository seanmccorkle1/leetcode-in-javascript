var isValid = function(string) {
    
    const stack = []
    
    // must be even length
    if (string.length %2===1){
        return false
    }
    
    for (let index =0; index < string.length; index++) {
        
        let bracket = string[index]
        
        // "(" must be matched by a ")"
        if (bracket == "("){
            stack.push(")") 
            stack
        }

        else if (bracket == "{"){            
            stack.push("}")
            stack
        }

        else if (bracket == "["){
            stack.push("]")
            stack
        }

        else {
            
            closingBracket  = string[index]
             correctClosingBracket = stack.at(-1)
            
            stack.pop()
            
            if (closingBracket != correctClosingBracket){
                return false
            }
        }
    }
    
    // check if all the closing brackets were popped    

    // if its []
    
    if (stack.length == 0) {
        return true
    }
    
    else if(stack.length != 0) {return false}
}


console.log(isValid("[([])]"), true)

// console.log(isValid("[([])]]"), false, "theres an extra ] at the end")
// console.log(isValid("[["), false, "no closing brackets")