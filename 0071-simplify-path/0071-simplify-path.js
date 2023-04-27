var simplifyPath = function (pathString) {
    
    const stack = []
    
    // double slash becomes an empty string on the .split("/")
    // one period just means "current directory", it doesnt do anything
    
    // periods dont go in the result
    // it has to be both NOT a period and NOT an empty string
    
    const pathArray =
          pathString.split("/") 
            .filter(directory => directory != "." && directory != "")
    
    pathArray
    
    for (let index = 0; index < pathArray.length; index++) {
        
        const currDirectory = pathArray[index]
        
        // if its "..", pop (remove) the current directory from the stack a
        // and go up to the most recent directory

        // "most recent" == stack

        const directoryIsDoublePeriod = currDirectory ==".."
        
        if (directoryIsDoublePeriod) {
            stack.pop()
            stack
        }
        
        else if (!directoryIsDoublePeriod)  {
            stack.push(currDirectory)
            stack
        }
        stack
    }
    
    stack
    
    let joinedPath = stack.join("/")
    return "/" + joinedPath
}

console.log(simplifyPath("/C:/users/../seans"), "/C:/seans")
// console.log(simplifyPath("/C:/users/./seans"), "/C:/users/seans")

// console.log(simplifyPath("/home//foo/"), "/home/foo")