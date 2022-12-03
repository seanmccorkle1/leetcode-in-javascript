


function frequencySort(string){

    const obj = {}
    let currString = ""

    for (let letter of string){
        obj[letter] ?obj[letter]++ : obj[letter] = 1
    }

    // highest frequency first
    //  2 - 1

    obj
    Object.keys(obj)

    obj["e"]

    const a=Object.keys(obj)
    a

 // "e" is represented as 2, "r" is represented as 1
 // object keys are unique, so "e" will always be 2
 // .sort(a,b) with numbers

 const letterArray =
    Object.keys
    (obj).sort((a, b) => obj[b] - obj[a])


    for (let letter of letterArray){
        currString

        // "ee" += "t".repeat(1) is "eet"
        currString += letter.repeat(obj[letter])
    }
    return currString
}

console.log(frequencySort("tree"), "eert")
