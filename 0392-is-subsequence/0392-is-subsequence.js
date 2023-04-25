var isSubsequence = function(subsequence, bigString){ 
    
    if (subsequence==null || bigString==null){
        return false
    }
    
    if (subsequence.length > bigString.length){
        return false
    }
    
    if (subsequence == ""){
        return true
    }
    
    if (subsequence == bigString) {
        return true
    }
    
    let index =0
    let index2 =0
    
    while (index2 < Math.max(bigString.length,subsequence.length)) { 

        if (subsequence[index] == bigString[index2]){ 

            index += 1
            
            if (index == subsequence.length){
                return true
            }
            
        }
        
        index2++ 
    }
    
    return false
} 

console.log(isSubsequence("letcod", "leetcode"), true) 

// console.log(isSubsequence("string", ""), false)
// console.log(isSubsequence("", "string"), true)
// console.log(isSubsequence("nqrstring", "newstring"), false) 