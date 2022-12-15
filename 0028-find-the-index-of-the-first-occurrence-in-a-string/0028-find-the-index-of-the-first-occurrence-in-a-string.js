const strStr = function (bigString, substring) {

    if (substring.length > bigString.length) {
        return -1
    }
    if (substring === "") {
        return 0 // "" starts at index 0 
    }

    for (let savedIndex = 0; savedIndex < bigString.length; savedIndex++) {

        // reset
        let index = savedIndex
        let index2=0

        savedIndex
        index
        index2

        // they have to be the same letter or the while loop wont work
        while (bigString[index] == substring[index2]){
                index++
                index2++

                if (index2 === substring.length){
                    return savedIndex
                }
        }
    }
    return -1
}
