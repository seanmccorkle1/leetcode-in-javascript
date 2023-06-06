
var repeatedCharacter = function(s) {
    
    const array=[]
    
    const obj = {}
    
    for (var index=0; index<s.length; index++){
        
        const letter = s[index]
        obj[letter] ? obj[letter]++ : obj[letter] = 1
        
        if (Object.entries(obj).some(subarray => subarray[1] >= 2)) {
          break
        }
        
        // if (s.indexOf(letter) != s.lastIndexOf(letter)){
        //     array.push(s.lastIndexOf(letter))
        // }
    }
  
  console.log(index)
  return s[index]
    return s[Math.min(...array)]
}
  
console.log(repeatedCharacter( "abccbaacz"))