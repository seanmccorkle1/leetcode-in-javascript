var nextGreatestLetter = function (letterArray, targetLetter) {


    const filteredCharCodeArray = letterArray.map(letter=>letter.toLowerCase()).filter(letter => letter > targetLetter)
    .map(letter => letter.charCodeAt())

    // if its []
    if (filteredCharCodeArray.length == 0){
        return letterArray[0]
    }

    let minCharCode = Math.min(...filteredCharCodeArray)
    return String.fromCharCode(minCharCode)
}

console.log(nextGreatestLetter(["b", "c"], "a"), "b", "b is the smallest letter that is greater than `a`")
console.log(nextGreatestLetter(["c", "b"], "a"), "b")

// console.log(nextGreatestLetter(["x","y","y","y"], "z"),   "x", "return letterArray[0] since theres no letter greater than z")