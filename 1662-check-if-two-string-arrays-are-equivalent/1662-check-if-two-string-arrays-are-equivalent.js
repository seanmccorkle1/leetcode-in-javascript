/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */

var arrayStringsAreEqual = (s1, s2) => {
    let string1=s1.join("")
    let string2=s2.join("")
    if (string1.length !=string2.length){
        return false
    }
    return string1==string2
    // return s1.join("")==s2.join("")
}