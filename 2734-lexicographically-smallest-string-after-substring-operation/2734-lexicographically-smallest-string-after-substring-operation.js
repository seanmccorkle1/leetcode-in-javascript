var smallestString = function (string) {
    
    let index = 0
    const array = [...string]

    while (string[index] == "a"){
        ++index
    }
    
    const everyLetterIsA = index == string.length ? true: false


    if (everyLetterIsA) {
        return string.slice(0, string.length - 1) + "z"
    }
    
    
    while (index < array.length) {

        const letter = array[index]

        if (letter == "a") {
            break
        }

        array[index] = String.fromCharCode(letter.charCodeAt() - 1)
        index++
    }

    return array.join("")
}

// smallestString("cbabc") // "baabc"
// smallestString("acbbc") // "abaab"

// smallestString("aab") // "aaa"

// smallestString("aa") // "az"
// smallestString("aaa") // "aaz"