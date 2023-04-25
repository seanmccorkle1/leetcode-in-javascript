

var isSubsequence = function(smallString, bigString){ 

    if (smallString == ""){
        return true
    }

    let index =0
    let index2 =0

    while (index2 < bigString.length){ 

        if (smallString[index] == bigString[index2]){ 

            index += 1

            if (index == smallString.length ){
                return true
            }

        } 

        index2++ 
    }

    // needs to hit all letters in str1 
    
    // if (index == smallString.length ){
    //     return true
    // }

    return false
} 

console.log(isSubsequence("letcod", "leetcode"), true) 
console.log(isSubsequence("letcod", ""))
console.log(isSubsequence("", "letcode")) 

//console.log(isSubsequence("nqrstring", "newstring"), false) 