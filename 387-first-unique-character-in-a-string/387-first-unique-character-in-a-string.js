/**
 * @param {string} s
 * @return {number}
 */

var firstUniqChar = function (string) {

    for (let index = 0; index < string.length; index++) {

        const letter = string[index]

        if (string.indexOf(letter) === string.lastIndexOf(letter)) {
            return index
        }
    }
    return -1
}