/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(string1, string1Plus1Letter) {
    

    let charSum1=string1.split("").reduce((sum,curr)=>sum + curr.charCodeAt(), 0)
    let charSum2=string1Plus1Letter.split("").reduce((sum,curr)=>sum + curr.charCodeAt(), 0)
    
    let difference=charSum2-charSum1
    return String.fromCharCode(difference)
    
}