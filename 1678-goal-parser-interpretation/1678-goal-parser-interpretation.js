var interpret = function(inputString) {
    let string = ""
    let index = 0


    while (index < inputString.length){


        let character = inputString[index]
        let nextCharacter = inputString[index + 1]

        if (character == "(" && nextCharacter == ")" ){
            string += "o"  // () is "o"
            index += 2
        } 
        else if (character == "(" && nextCharacter == "a" ){
            string += "al"
            index += 4
    }
        else {
            string += "G"
            index++
        }
    }
    return string
}


