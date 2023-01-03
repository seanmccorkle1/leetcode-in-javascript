var isValid = function(string) {

    const stack = []

    for (const char of string) {
        
        // "(" must be matched by a ")"
        if (char == "("){
            stack.push(")") 
            stack
        }

        else if (char == "{"){            
            stack.push("}")
            stack
        }

        else if (char == "["){
            stack.push("]")
            stack
        }

        else {

            const closingBracket  = char
            const correctClosingBracket = stack.at(-1)

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