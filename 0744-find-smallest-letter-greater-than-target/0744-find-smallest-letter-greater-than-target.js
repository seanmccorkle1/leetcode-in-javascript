

var nextGreatestLetter = (a, t) => {
    const ccArray =a.map(l => l.charCodeAt()).filter(cc => cc > t.charCodeAt())
    return ccArray==false ? a[0]: String.fromCharCode(Math.min(...ccArray))
}

console.log(nextGreatestLetter(["c", "b"], "a"), "b", "the smallest letter thats greater than `a` in the array is `b`")
console.log(nextGreatestLetter(["m", "c"], "z"), "x", "return letterArray[0] since theres no letter greater than z")
