var numMatchingSubseq = function (str1, strArray) {
    
    let count = 0
    
    for (let word of strArray){
        
        let index1 = 0
        let index2 = 0
        
        word
        
        while (index1 < str1.length && index2 < word.length) {
            
            if (word[index2] == str1[index1]) {
                index2++
                index1++
            }
            
            else {
                index1++ // index1 (str1) is the bigstr here
            }
        }
        
        if (index2 == word.length){
            count++
        }
    }
    
    return count
}

console.log(numMatchingSubseq("abcde", ["a","bb","acd","ace", "aed"]))