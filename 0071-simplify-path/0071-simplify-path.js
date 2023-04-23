var simplifyPath = function (pathString) {

    const stack = []

    // double slash becomes an empty string on the .split("/")
    // one period just means "current directory", it doesnt do anything

    let pathArray = pathString.split('/')

    pathArray = pathArray.filter(string => string.trim() != ".")
    pathArray = pathArray.filter(string => string.trim() != "")

    pathArray

    for (let index = 0; index < pathArray.length; index++) {

        const currDirectory = pathArray[index]

        // if its "..", pop (remove) the current directory from the stack a
        // and go up to the most recent directory

        // "most recent" == stack

        const directoryIsDoublePeriod = currDirectory.trim() ==".."

        if (directoryIsDoublePeriod) {
            stack
            stack.pop()
        }

        else if (!directoryIsDoublePeriod)  {
            stack.push(currDirectory)
        }

        stack
    }

    stack

    pathString =  stack.join("/")
    return "/" + pathString
}

console.log(simplifyPath("/C:/users/../Program files"), "/C:/Program files", "at 'users', go up to C")

// console.log(simplifyPath("/a/./b/../../c/"), "/c")

// console.log(simplifyPath("/C:/users/./Program files"), "/C:/users/Program files")
// console.log(simplifyPath("/home//foo/"), "/home/foo")