var reverseWords = function(s) {
    let arrayOfReversedWords= s.split(" ").map(word => word.split("").reverse().join(""))
    return arrayOfReversedWords.join(" ")
}
