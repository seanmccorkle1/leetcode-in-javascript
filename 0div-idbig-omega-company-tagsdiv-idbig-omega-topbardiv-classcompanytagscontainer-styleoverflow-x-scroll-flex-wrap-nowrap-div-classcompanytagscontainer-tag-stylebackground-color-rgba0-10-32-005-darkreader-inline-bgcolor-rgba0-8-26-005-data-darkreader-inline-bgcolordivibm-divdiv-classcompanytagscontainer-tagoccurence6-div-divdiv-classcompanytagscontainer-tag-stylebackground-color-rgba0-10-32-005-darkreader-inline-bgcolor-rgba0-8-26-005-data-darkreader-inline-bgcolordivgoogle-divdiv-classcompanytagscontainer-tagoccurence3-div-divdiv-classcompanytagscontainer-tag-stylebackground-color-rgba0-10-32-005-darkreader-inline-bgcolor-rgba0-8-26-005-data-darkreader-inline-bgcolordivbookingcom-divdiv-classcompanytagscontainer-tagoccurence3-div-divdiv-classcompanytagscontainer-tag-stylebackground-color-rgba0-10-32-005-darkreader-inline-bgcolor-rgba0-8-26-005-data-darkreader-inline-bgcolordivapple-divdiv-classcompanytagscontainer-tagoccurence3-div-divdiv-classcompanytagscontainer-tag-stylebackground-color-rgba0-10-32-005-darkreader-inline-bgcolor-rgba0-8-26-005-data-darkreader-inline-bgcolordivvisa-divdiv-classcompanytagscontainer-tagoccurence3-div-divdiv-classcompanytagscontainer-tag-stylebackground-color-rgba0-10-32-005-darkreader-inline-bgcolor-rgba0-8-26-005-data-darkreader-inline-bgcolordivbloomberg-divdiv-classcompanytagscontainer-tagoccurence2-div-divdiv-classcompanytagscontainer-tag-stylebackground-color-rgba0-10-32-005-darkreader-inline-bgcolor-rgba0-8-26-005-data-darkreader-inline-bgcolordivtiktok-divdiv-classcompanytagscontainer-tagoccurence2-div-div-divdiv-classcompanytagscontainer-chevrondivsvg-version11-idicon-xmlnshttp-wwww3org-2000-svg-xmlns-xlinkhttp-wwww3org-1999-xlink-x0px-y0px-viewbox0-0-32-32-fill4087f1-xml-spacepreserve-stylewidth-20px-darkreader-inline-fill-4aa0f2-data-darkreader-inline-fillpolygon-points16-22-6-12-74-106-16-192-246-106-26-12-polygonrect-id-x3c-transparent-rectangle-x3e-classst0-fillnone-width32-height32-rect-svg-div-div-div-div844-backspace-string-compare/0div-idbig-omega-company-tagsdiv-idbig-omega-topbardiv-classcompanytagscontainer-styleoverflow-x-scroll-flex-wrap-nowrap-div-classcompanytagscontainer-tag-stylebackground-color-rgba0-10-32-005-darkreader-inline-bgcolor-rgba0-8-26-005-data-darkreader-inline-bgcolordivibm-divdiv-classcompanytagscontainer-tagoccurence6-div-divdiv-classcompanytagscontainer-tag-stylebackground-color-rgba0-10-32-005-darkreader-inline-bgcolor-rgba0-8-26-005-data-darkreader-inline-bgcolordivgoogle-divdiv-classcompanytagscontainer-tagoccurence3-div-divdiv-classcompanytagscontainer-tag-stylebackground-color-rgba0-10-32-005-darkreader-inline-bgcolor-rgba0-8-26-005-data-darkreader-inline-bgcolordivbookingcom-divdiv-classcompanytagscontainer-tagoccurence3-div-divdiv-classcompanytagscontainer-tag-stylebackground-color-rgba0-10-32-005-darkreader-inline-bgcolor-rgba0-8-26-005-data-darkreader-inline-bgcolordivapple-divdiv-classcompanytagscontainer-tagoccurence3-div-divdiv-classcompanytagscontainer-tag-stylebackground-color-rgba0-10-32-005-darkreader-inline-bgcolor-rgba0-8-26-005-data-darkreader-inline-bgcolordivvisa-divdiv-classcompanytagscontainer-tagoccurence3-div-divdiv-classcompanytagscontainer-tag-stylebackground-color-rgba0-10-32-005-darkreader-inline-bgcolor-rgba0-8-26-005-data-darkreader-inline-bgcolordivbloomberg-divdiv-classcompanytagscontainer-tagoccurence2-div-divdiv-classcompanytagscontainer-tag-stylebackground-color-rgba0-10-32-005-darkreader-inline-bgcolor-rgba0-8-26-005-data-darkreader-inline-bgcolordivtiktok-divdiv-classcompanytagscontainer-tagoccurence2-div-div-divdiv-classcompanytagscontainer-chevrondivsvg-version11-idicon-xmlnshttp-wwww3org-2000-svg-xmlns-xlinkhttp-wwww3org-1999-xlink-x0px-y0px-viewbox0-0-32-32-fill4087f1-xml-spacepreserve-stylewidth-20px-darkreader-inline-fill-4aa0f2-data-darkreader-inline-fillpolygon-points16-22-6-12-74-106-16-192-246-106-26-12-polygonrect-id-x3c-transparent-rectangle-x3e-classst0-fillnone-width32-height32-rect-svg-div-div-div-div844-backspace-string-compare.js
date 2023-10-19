var backspaceCompare = function (string11, string2) {

    let fixedString1 = recursive_stringToString(string11)
    let fixedString2 = recursive_stringToString(string2)

    if (fixedString1 == fixedString2) {
        return true
    }
    return false
}

const recursive_stringToString = string => {

    let stack = []
    for (let letter of string) {

        if (letter == "#") {
            stack.pop()
        } 
        else if (letter != "#") {
            stack.push(letter)
        }
    }

    let passBack = stack.join("")
    return passBack
}
console.log(backspaceCompare("ab#c", "ad#c"), "both become ac", true,
    backspaceCompare("ab##", "c#d#"), true)