const validateStackSequences = function(pushed, popped) {
    
    let index = 0
    const stack = []
    
    for (const currPushNum of pushed) {
        
        stack.push(currPushNum)
        stack
        
        let currPopNum = popped[index] 
        var stackIsntEmpty = stack.length >= 1
        
        while (stack.length >= 1 && stack.at(-1) == currPopNum) {
            
            stack.pop()
            stack
            
            index += 1
            currPopNum = popped[index]
            
        }
    }
    
    pushed
    index

    if (pushed.length == index){
        return true
    }
    else {
        return false
    }
    
}

console.log(validateStackSequences([1,2,3,4,5], [4,5,3,2,1]), true)