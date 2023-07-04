var buddyStrings = function (string, goalString) {

    if (string.length != goalString.length) {
        return false
    }

    const twoIndexArray = []

    for (let index = 0; index < string.length; index++) {

        let letter = string[index]
        let goalStringLetter = goalString[index]

        if (letter != goalStringLetter) {
            twoIndexArray.push(index)
            twoIndexArray
        }

        // return check at the end of the loop
        if (twoIndexArray.length >= 3) {
            return false
        }
    }

    const stringsAreTheSame = twoIndexArray.length == 0 ? true : false

    if (stringsAreTheSame) {

        let set = [...new Set(string)]

        string
        set

        const duplicateLettersExist = string.length != [...new Set(string)].length ? true : false

        if (duplicateLettersExist) {
            return true
        }

        return false

        // if (string.length != new Set(string).size) {
        //     return true
        // }

    }

    let [index, index2] = twoIndexArray
    twoIndexArray

    string
    goalString

    // check only two letters
    if (string[index] == goalString[index2] && string[index2] == goalString[index]) {
        return true
    }

    return false
}

// console.log(buddyStrings("ab", "ba"), true)
// console.log(buddyStrings("ab", "ab"), false)

console.log(buddyStrings("aa", "aa"), true)
// console.log(buddyStrings("ab", "ab"), false)