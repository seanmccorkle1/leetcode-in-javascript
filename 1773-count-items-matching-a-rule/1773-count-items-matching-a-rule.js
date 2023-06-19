var countMatches = function (array, ruleKey, ruleValue) {
    
    if (ruleKey == "type"){
        array = array.map(subarray => subarray[0])
    }
    
    else if (ruleKey == "color"){
        array = array.map(subarray => subarray[1])
    }
    
    else if (ruleKey == "name"){
        array = array.map(subarray => subarray[2])
    }
    
    let count=0
    for (let string of array){
        if (string == ruleValue){
           ++count
        }
    }

    return count
}

console.log(countMatches([["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]], 
"color", "silver"))