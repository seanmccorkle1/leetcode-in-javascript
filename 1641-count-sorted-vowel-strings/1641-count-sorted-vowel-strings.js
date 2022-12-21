/**
 Many question are incorrectly labeled, but I think less than 10 min for easy, 20 min for medium, and 40 min for hard 
 is a good strategy. How many - depend on your schedule, but I think the number isnt really important. Learning from the question youve solved is indeed more essential.
* 
*/


//// 1.6-6.4mg/kg of agmatine, taken orally (for cognitive performance).


var countVowelStrings = function(num) {

    let aCount=1
    let eCount=1
    let iCount=1
    let oCount=1
    let uCount =1

    while (num >= 2){
        
        aCount = aCount+ eCount+iCount+oCount+uCount
        eCount=  eCount+iCount+oCount+uCount
        iCount = iCount + oCount+uCount
        oCount = oCount  + uCount

        num -= 1
    }

    return [aCount, eCount, iCount,oCount].reduce((sum,curr) => sum + curr, 1)
    
}

console.log(countVowelStrings(1), 5, ["a","e","i","o","u"], "there are 5 vowel strings of length 1")

// console.log(countVowelStrings(2), 15, ["aa", "ae", "ai", "ao", "au", "ee", "ei", "eo", "eu", "ii", "io", "iu", "oo", "ou", "uu"], " `u` can never come first except in `uu` because it has to be lexicographically sorted ")
// console.log(countVowelStrings(3), 35)