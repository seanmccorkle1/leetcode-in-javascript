var simplifyPath = function (path) {

    const stack = []
    const pathArray = path.split('/')

    pathArray
    
    for (let index = 0; index < pathArray.length; index++) {

        const currDirectory = pathArray[index]

        // double slash becomes an empty string on the .split("/")
        // one period just means "current directory", it doesnt do anything

        if (currDirectory=='.' || currDirectory== "") {
            continue // avoid pushing periods and empty elements
        }

        // remove the current directory and go up to the most recent one
        // currString is an array element, not a letter

        if (currDirectory == '..') {
            stack.pop()
        } 

        else {
            stack.push(currDirectory)
            stack
        }
    }

    stack
    return '/' + stack.join('/')
}

console.log(simplifyPath("/C:/users/../Program files"), "/C:/Program files", "at 'users', go up to C")

// console.log(simplifyPath("/C:/users/./Program files"), "/C:/users/Program files")
// console.log(simplifyPath("/home//foo/"), "/home/foo")