var isValid = function(string) {

    const stack = []

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
            
            let closingBracket  = string[index]
            let correctClosingBracket = stack.at(-1)
            
            stack.pop()
            
            if (closingBracket != correctClosingBracket){
                return false
            }
        }
    }
    
    // check if all the closing brackets were popped    

    if (stack.length == 0){
        return true
    }

    else if (stack.length != 0) {
        return false    
    }
}

console.log(isValid("[([])]"), true)

// console.log(isValid("[([])]]"), false)
// console.log(isValid("[[([])]"), false)
// console.log(isValid("{)"), false)