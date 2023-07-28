var isMatch = function (string, patternString) {

    // early return when patternString is empty

    // returns true when string and patternString are empty
    // returns false when string contains chars with empty patternString

    if (patternString == "" && string == "") {
        return true
    }

    if (patternString == "" && string.length != "") {
        return false
    }
    
    if (patternString.includes(".*") && !patternString.includes("\.*")){
        return true
    }

    patternString
    string

    const firstLetterOfSliceMatches  = (patternString[0] == string[0]) || (patternString[0] == ".")
    const firstLetterMatches = firstLetterOfSliceMatches && Boolean(string)

    // Track when the next character * is next in line in the patternString

    // if next patternString match (after *) is fine with current string, then proceed with it (s, p+2).  That's because the current patternString may be skipped.
    // Otherwise check firstLetterMatches. That's because if we want to proceed with the current patternString, we must be sure that the current patternString char matches the char


    // If firstLetterMatches is true, then do the recursion with next char and current patternString (s+1, p).
    // That's because current char matches the patternString char.

    if (patternString[1] === '*') {
        return (isMatch(string, patternString.slice(2)) ||
            (firstLetterMatches && isMatch(string.slice(1), patternString)))
    }

    // now we know for sure that we need to do 2 simple actions
	// check the current patternString and string chars
	// if so, then can proceed with next string and patternString chars (s+1, p+1)

        if (firstLetterMatches) {
            let bool = isMatch(string.slice(1), patternString.slice(1))
            return bool
        }

        // fell through
        return false

        // return firstLetterMatches ? isMatch(string.slice(1), patternString.slice(1)) : false;
}

console.log(isMatch("asd", "c*asd"), true)
// console.log(isMatch("asd", "sd"), false)

// console.log(isMatch("asd", ".*"), true)