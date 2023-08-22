var convertToTitle = function(columnNum) {

    let columnString =""
    
    while (columnNum >= 1) {
        
        let flooredDivision = ~~(columnNum / 26)
        let remainder = columnNum % 26
        
        // 51 gets floored to 1 
        // 52 should also get floored to 1 because its "AZ", not "BA"
        // 53 or "BA" gets floored to 2
        
        if (remainder == 0){
            columnString = "Z" + columnString
            flooredDivision -= 1 
            // remainder = 26
        }
        
        else if (remainder != 0) {
            const letter = String.fromCharCode(64 + remainder)
            columnString = letter + columnString
        }
        
        columnNum = flooredDivision
    }
    
    return columnString
}


// console.log(convertToTitle(1), "A")

// console.log(convertToTitle(26), "Z")

// console.log(convertToTitle(27), "AA")
// console.log(convertToTitle(28), "AB")

console.log(convertToTitle(52), "AZ")
// console.log(convertToTitle(53), "BA")