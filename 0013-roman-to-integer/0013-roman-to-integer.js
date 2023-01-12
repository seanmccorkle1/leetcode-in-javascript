/**
 Many question are incorrectly labeled, but i think less than 10 minutes for easy, 20 minutes for medium, and 40 minutes for hard problems is a good strategy. How many depends on your schedule, but i think the num isn't really important. Learning from the question you've solved is more important.
* 
*/

var romanToInt = function(string){

    const letterObj = {
        "I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000
    }

    let romanSum = 0

    for (let index = 0; index < string.length; index++){

        let currValue = letterObj[string[index]]
        let rightValue = letterObj[string[index + 1]]

        if (currValue < rightValue){
            romanSum -= currValue
        }
        
        // always add the last letter normally
        else if (currValue >= rightValue || rightValue == undefined){
            romanSum += currValue
        }

        // letters[string[index]] < letters[string[index + 1]] ? romanSum -= letters[string[index]] : romanSum += letters[string[index]]
    }
    return romanSum
}

console.log(romanToInt("LVIII"), 58, "50 + 5 + 1 + 1 + 1 = 58")
// console.log(romanToInt("MCMXCIV"), 1994)