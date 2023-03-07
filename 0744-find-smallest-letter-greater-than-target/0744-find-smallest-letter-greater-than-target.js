

var nextGreatestLetter = (letterArray, targetLetter)=> {
let n=Math.min(...letterArray.map(letter => letter.charCodeAt()).filter(charCode=>charCode > targetLetter.charCodeAt()))

return n == Infinity? letterArray[0]: String.fromCharCode(n)

}

console.log(nextGreatestLetter(["c", "b"], "a"), "b", "the smallest letter thats greater than `a` in the array is `b`")
console.log(nextGreatestLetter(["m", "c"], "z"), "x", "return letterArray[0] since theres no letter greater than z")