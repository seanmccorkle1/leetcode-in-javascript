var maxDepth = function(string) {

    let maxParenthesesDepth = 0
    let count = 0
    
    for (const character of string){
        if (character == "("){
            count++
        }
        else if (character == ")"){
            count--
        }

        maxParenthesesDepth = Math.max(count,maxParenthesesDepth)
    }
    return maxParenthesesDepth
}

maxDepth("(1+(2*3)+((8)/4))+1") // 3