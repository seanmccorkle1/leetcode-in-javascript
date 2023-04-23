var simplifyPath = function (pathArray) {

    const stack = []
    
    pathArray = pathArray.split('/')

    
    pathArray = pathArray.filter(element => element != ".")
        .filter(element => element != "")
    
    pathArray    

    
    for (let index = 0; index < pathArray.length; index++) {

        const currDirectory = pathArray[index]
        
        // double slash becomes an empty string on the .split("/")
        // one period just means "current directory", it doesnt do anything
        
        // remove the current directory and go up to the most recent one
        // currString is an array element, not a letter

        if (currDirectory == '..') {
            stack
            stack.pop()
            continue
        }
        
        stack.push(currDirectory)
        stack
    }
    
    stack
    return "/" + stack.join("/")
}

// console.log(simplifyPath("/C:/users/../Program files"), "/C:/Program files", "at 'users', go up to C")

console.log(simplifyPath("/a/./b/../../c/"), "/c")

// console.log(simplifyPath("/C:/users/./Program files"), "/C:/users/Program files")
// console.log(simplifyPath("/home//foo/"), "/home/foo")