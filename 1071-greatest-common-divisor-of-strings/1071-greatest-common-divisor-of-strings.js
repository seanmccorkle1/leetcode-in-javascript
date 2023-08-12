const gcd = (string1Length, string2Length) => {

    string1Length
    string2Length

    // mod = 0 means a perfect fit, which is necessary for a GCD
    // mod will always reach 0, otherwise it wouldve returned ""

    if (string2Length == 0) {
        return string1Length
    }

    else if (string2Length != 0) {
        let mod = string1Length % string2Length
        return gcd(string2Length, mod) // swap
    }
}

var gcdOfStrings = function (string1, string2) {

    if (string1 == string2) {
        return string1
    }

    let concat = string1 + string2
    let backwardsConcat = string2 + string1

    if (concat != backwardsConcat) {
        return ""
    }

    string1.length
    string2.length

    let gcdNum = gcd(string1.length, string2.length)
    // return string1.slice(0, gcdNum)
    return string2.slice(0, gcdNum)
}

// console.log(gcdOfStrings("ABCABC", "ABC"), "ABC")
console.log(gcdOfStrings("ABABAB", "ABAB"), "AB", "GCD of 6 and 4 is 2, not 4.")

// console.log(gcdOfStrings("ABCDABCD", "ABCD"), "ABCD")
// console.log(gcdOfStrings("ASD", "XYZ"), "")