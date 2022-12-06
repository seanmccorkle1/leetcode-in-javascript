var nextGreatestLetter = function(stringArray, targetLetter) {
    return stringArray.find(letter => letter > targetLetter) ? stringArray.find(letter => letter > targetLetter) : stringArray[0]
    
}
