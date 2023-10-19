var backspaceCompare = (string1: string, string2: string): boolean => {

    let fixedString1 = recursive_stringToString(string1)
    let fixedString2 = recursive_stringToString(string2)

    if (fixedString1 == fixedString2) {
        return true
    }
    return false
}

const recursive_stringToString = (string: string): string => {

    let stack: string[] = []
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
