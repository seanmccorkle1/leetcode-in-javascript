var smallestString = function (string) {

    let index = 0

    while (string[index] == "a"){
        ++index
    }

    const array = [...string]


    while (index < array.length) {

        const letter = array[index]

        if (letter == "a") {
            break
        }

        array[index] = String.fromCharCode(letter.charCodeAt() - 1)
        index++
    }

    const everyLetterIsA = array.join("") == string

    if (everyLetterIsA) {
        return string.slice(0, string.length - 1) + "z"
    }

    return array.join("")
}

// smallestString("cbabc") // "baabc"
// smallestString("acbbc") // "abaab"

// smallestString("aab") // "aaa"

// smallestString("aa") // "az"
// smallestString("aaa") // "aaz"