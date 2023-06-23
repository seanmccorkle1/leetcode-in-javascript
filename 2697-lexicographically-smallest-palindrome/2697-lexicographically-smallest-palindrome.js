var makeSmallestPalindrome = function (string) {

    let currString = ""

    for (let index = 0; index < string.length; index++) {

        let backIndex = (string.length - index) - 1

        let firstLetter = string[index]
        let lastLetter = string[backIndex]

        if (firstLetter != lastLetter) {

            if (firstLetter.charCodeAt() > lastLetter.charCodeAt()) {
                firstLetter = lastLetter
            }

        }

        currString += firstLetter
    }
    return currString
}
makeSmallestPalindrome("abcd") // "abba"