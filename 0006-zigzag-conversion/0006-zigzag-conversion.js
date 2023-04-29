var convert = function(s, numRows) {
    
    // return original string if you can't zigzag
    
    if (numRows == 1 || s.length < numRows) {
        return s
    }
    
    let converted = ''
    let reverse = false
    
    let count = 0
    
    
    const rows = new Array(numRows).fill(">").map(e => [])

    
    // reverse the push flow when reaching turning points
    
    for (let i = 0; i < s.length; i++) {
        
        const currLetter = s[i]
        const currArray = rows[count]

        currArray.push(currLetter)
        
        reverse ? count -= 1 : count+=1
        
        if (count == numRows - 1) {
            reverse = !reverse
        }
        
        if (count == 0){
            reverse = !reverse
        }
    }
    
    let zigzagString = rows.reduce((string, subarray) => string + subarray.join(""), "")
    
    return zigzagString
}

console.log(convert("PAYPALISHIRING", 3), "PAHNAPLSIIGYIR")