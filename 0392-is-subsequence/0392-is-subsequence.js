var isSubsequence = function (subsequence, bigString) {


    if (subsequence == null || bigString == null) {
        return false
    }


    if (subsequence.length > bigString.length) {
        return false
    }


    if (subsequence == "") {
        return true
    }


    if (subsequence == bigString) {
        return true
    }


    let substringIndex = 0
    let bigStringIndex = 0


    while (bigStringIndex < bigString.length) {


        if (subsequence[substringIndex] == bigString[bigStringIndex]) {


            substringIndex += 1


            if (substringIndex == subsequence.length) {
                return true
            }


        }


        bigStringIndex++
    }


    return false
}


console.log(isSubsequence("nwstrng", "newstring"), true)
// console.log(isSubsequence("nqstrng", "newstring"), false) 


// console.log(isSubsequence("string", ""), false)
// console.log(isSubsequence("", "string"), true)