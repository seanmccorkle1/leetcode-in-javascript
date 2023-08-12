const gcd = (a, b) => {

    a
    b

    // mod = 0 means a perfect fit, which is necessary for a GCD
    // mod will always reach 0, otherwise it wouldve returned ""

    if (b == 0) {
        return a
    }

    else if (b != 0) {
        let mod = a % b
        return gcd(b, mod) // b is the next a 
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

    if (string1.length % string2.length == 0){
        return string2
    }
    
    let gcdNum = gcd(string1.length, string2.length)
    return string1.slice(0, gcdNum)
}

gcdOfStrings("TAUXXTAUXXTAUXXTAUXXTAUXX", "TAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXX") //"TAUXX"

// console.log(gcdOfStrings("ABCABC", "ABC"), "ABC")
// console.log(gcdOfStrings("ABABAB", "ABAB"), "AB", "| GCD of 6 and 4 is 2, not 4.")