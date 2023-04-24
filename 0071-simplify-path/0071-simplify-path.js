var simplifyPath = function (pathString) {

    const stack = []

    // double slash becomes an empty string on the .split("/")
    // one period just means "current directory", it doesnt do anything
    
    pathString = pathString.replace(/[/]+/g, "/")
    if (pathString[0] == "/"){
        pathString = pathString.slice(1)
    }
    
    if (pathString.at(-1) == "/"){
        pathString = pathString.slice(0, pathString.length-1)
    }
    
    let pathArray =pathString.split("/") 
    pathArray = pathArray.filter(string => string.trim() != ".")
    
    // pathArray = pathArray.filter(string => string.trim() != "")
    
    pathArray

    for (let index = 0; index < pathArray.length; index++) {

        const currDirectory = pathArray[index]

        // if its "..", pop (remove) the current directory from the stack a
        // and go up to the most recent directory

        // "most recent" == stack

        const directoryIsDoublePeriod = currDirectory.trim() ==".."
        
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

// console.log(simplifyPath("/C:/users/../Program files"), "/C:/Program files", "at 'users', go up to C")

// console.log(simplifyPath("/a/./b/../../c/"), "/c")

// console.log(simplifyPath("/C:/users/./Program files"), "/C:/users/Program files")
console.log(simplifyPath("/home//foo/"), "/home/foo")