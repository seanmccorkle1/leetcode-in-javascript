var simplifyPath = function (pathArray) {

    const stack = []
    
    pathArray = pathArray.split('/')
    
    pathArray = pathArray.filter(element => element != ".")
        .filter(element=> Boolean(element) == true)
        //.filter(element => element != "")
    
    pathArray    
    
    for (let index = 0; index < pathArray.length; index++) {

        const currString = pathArray[index]
        
        // double slash becomes an empty string on the .split("/")
        // one period just means "current directory", it doesnt do anything
        
        // avoid pushing "." which does nothing

        // also avoid pushing the empty string which comes form
        // `//` being in the string
        
        // if (currDirectory=='.' || currDirectory== "") {
        //     continue 
        // }

        // remove the current directory and go up to the most recent one
        // currString is an array element, not a letter

        if (currString == '..') {
            stack
            stack.pop()
        } 

        else {
            stack.push(currString)
            stack
        }
    }
    
    stack
    return "/" + stack.join("/")
}

// console.log(simplifyPath("/C:/users/../Program files"), "/C:/Program files", "at 'users', go up to C")

console.log(simplifyPath("/a/./b/../../c/"), "/c")

// console.log(simplifyPath("/C:/users/./Program files"), "/C:/users/Program files")
// console.log(simplifyPath("/home//foo/"), "/home/foo")