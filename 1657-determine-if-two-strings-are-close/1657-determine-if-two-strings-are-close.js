/**
 Many question are incorrectly labeled, but I think less than 10 min for easy, 20 min for medium, and 40 min for hard 
 is a good strategy. How many - depend on your schedule, but I think the number isn't really important. Learning from the question you've solved is indeed more essential.
* 
*/
var closeStrings = function (string1, string2) {

    if (string1.length != string2.length) {
        return false
    }

    if (string1 === string2) {
        return true
    }
    
    // 0 frequency at start
    const string1Array = new Array(26).fill(0)
    const string2Array = new Array(26).fill(0)

    const string1Obj ={}
    const string2Obj={}

    let charCode=97

    // loop through alphabet (26 loops)

    for (let index=0; index < 26; index++){
        let letter = String.fromCharCode(charCode)  

        string1Obj[letter] = 0
        string2Obj[letter] = 0

        charCode += 1
    }

    string1Obj
    
    // loop through string (6 loops)

    for (let index = 0; index < string1.length; index += 1) {

        let letter1=string1[index]
        let letter2=string2[index]

        let letter1Index = letter1.charCodeAt() - 97
        let letter2Index = letter2.charCodeAt() - 97

        string1Array[letter1Index] += 1
        string2Array[letter2Index] += 1

        // obj["m"] += 1 

        string1Obj[letter1] += 1
        string2Obj[letter2] += 1
    }


    // loop through a-z again


    // .includes() is bad practice because it scales with N (string length)
    // instead use this constant loop of (index < 26)

    for (let [letter, frequency] of Object.entries(string1Obj)){

        letter
        frequency

        // freq is the value
        let frequency2 = string2Obj[letter]

        const existsInS1= frequency >= 1 ? true : false
        const existsInS2= frequency2 >= 1 ? true: false


        if (existsInS1 && !existsInS2){
            return false
        }

        if (!existsInS1 && existsInS2){
            return false
        }
    }

    string1Obj

    // for (let index = 0; index < 26; index += 1) {
            
    // const letterInString1 = string1Array[index] >= 1 ? true : false
    // const letterInString2 = string2Array[index] >= 1 ? true : false


    //     if (letterInString1 && !letterInString2) {
    //         return false
    //     }
        
    //     // return false for "abz" here
    //     if (!letterInString1 && letterInString2) {
    //         return false // not a close string
    //     }
    // }

    string1Array
    string2Array

    let sorted1 = string1Array.sort((a, b) => a - b).join("")
    let sorted2 = string2Array.sort((a, b) => a - b).join("")

    console.log(sorted1)
    console.log(sorted2)

    let sortedFrequencies1=Object.values(string1Obj).sort((a,b) =>a-b).join("")
    let sortedFrequencies2=Object.values(string2Obj).sort((a,b)=>a - b).join("")

    if (sortedFrequencies1===sortedFrequencies2){
        return true
    }
    else return false

}
console.log(closeStrings("abc","bca"), true)

// console.log(closeStrings("xxxd", "dddx"), true, "the frequencies of [3, 1] are symmetric and can be rearranged")

// console.log(closeStrings("xxdd", "xxxd"), false, "the frequencies are asymmetric")
// console.log(closeStrings("abc", "abz"), false, "letters are different")