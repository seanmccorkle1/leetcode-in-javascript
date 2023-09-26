var findTheDifference = function(string, stringPlusLetter) {
    
    let smallCharSum=string.split("").reduce((sum,curr)=>sum + curr.charCodeAt(), 0)

    let bigCharSum=stringPlusLetter.split("").reduce((sum,curr)=>sum + curr.charCodeAt(), 0)
    
    let difference= bigCharSum - smallCharSum
    
    let missingLetter=String.fromCharCode(difference)    
    return missingLetter 
}



