var frequencySort = function(string){
    
    const obj = {}
    let currString = ""

    for (let letter of string){
        obj[letter] ?obj[letter]++ : obj[letter] = 1
    }
    
    Object.keys(obj).sort((a, b) => obj[b] - obj[a]).forEach(letter => currString+=letter.repeat(obj[letter]))
    return currString
}
