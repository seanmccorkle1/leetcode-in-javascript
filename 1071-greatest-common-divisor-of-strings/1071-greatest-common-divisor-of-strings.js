const gcd = (string1Length, string2Length) => {

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

    let endLength = gcd(string1.length, string2.length)
    return string1.slice(0, endLength)
    
}

console.log(gcdOfStrings("ABCABC", "ABC"), "ABC")
// console.log(gcdOfStrings("ASD", "XYZ"), "")