var makeSmallestPalindrome = function (string) {
    
    if (string.length == 1) {
        return string
    }
    let palindromeString = ""

    for (let index = 0; index < string.length; index++) {

        let backIndex = (string.length - index) - 1

        let currLetter = string[index]
        let backLetter = string[backIndex]

        if (currLetter != backLetter) {

            if (currLetter.charCodeAt() > backLetter.charCodeAt()) {
                currLetter = backLetter
            }

        }

        palindromeString += currLetter
    }

    return palindromeString
}

makeSmallestPalindrome("abcd") // "abba")