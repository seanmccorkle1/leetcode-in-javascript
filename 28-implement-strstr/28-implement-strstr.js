var strStr = function (bigString, substring) {

    // first occurence of ("") is at 0
    if (substring === "") {
        return 0
    }
    
    // main index doesnt go on the substring
    
    for (let savedIndex = 0; savedIndex < bigString.length; savedIndex++) {

        let index = savedIndex
        let index2 = 0

        savedIndex

        // avoid infinite loop, index < string.length
        while (bigString[index] === substring[index2] && index2 < substring.length ){//&& index2 < substring.length) {
            ++index
            ++index2
        }
                
        // index = 1 is one letter, so index = 3 is 3 letters
        if (index2 == substring.length) {
            return savedIndex // saved from 5 loops ago
        }
    }
    return -1 // an index of -1 means it doesnt exist
}
