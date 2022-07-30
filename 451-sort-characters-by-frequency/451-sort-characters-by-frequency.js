


function frequencySort(string){

    const obj = {}
    let currString = ""


    for (let letter of string){
        obj[letter] ?obj[letter]++ : obj[letter] = 1
    }
 
  // highest frequency first 
  const letterArray = Object.keys(obj).sort((a, b) => obj[b] - obj[a])

  for (const letter of letterArray){
    currString += letter.repeat(obj[letter])
    }
    
//     Object.keys(obj).sort((a, b) => obj[b] - obj[a]).forEach(letter => {
//         currString += letter.repeat(obj[letter])
//     })
    return currString
}

console.log(frequencySort("tree"), "eert")
