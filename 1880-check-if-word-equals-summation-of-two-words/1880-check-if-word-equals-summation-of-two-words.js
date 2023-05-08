var isSumEqual = function(firstWord, secondWord, targetWord) {
  
    let firstWordDigitString = ""
    let secondWordDigitString = ""
    let targetDigitString = ""

    let array = new Array(10).fill("a").map(e => [])
    array = array.map((subarray, index) => [String.fromCharCode(97+index), index])

    const obj=array.reduce((sum, curr) => ({...sum, [curr[0]]: curr[1]}), {})
    
    // const obj = {"a" : '0', "b" : '1', "c" : '2', "d" : '3', "e" : '4', "f" : '5', "g" : '6', "h" : '7', 'i' : '8', "j" : '9'}
      
      
      const greaterLength= Math.max(firstWord.length, secondWord.length, targetWord.length)
      
      for (let index=0; index < greaterLength; index++) {
          
          let firstWordLetter = firstWord[index]
          let secondWordLetter = secondWord[index]
          let targetLetter = targetWord[index]
          
          let stringDigit1 = obj[firstWordLetter] ?? ""
          let stringDigit2 = obj[secondWordLetter] ?? ""
          let targetDigit = obj[targetLetter] ?? ""
          
          firstWordDigitString += stringDigit1
          secondWordDigitString+= stringDigit2
          targetDigitString += targetDigit
      }
      
      let twoWordSum = Number(firstWordDigitString) + Number(secondWordDigitString)
      const targetSum = Number(targetDigitString)
  
      if (twoWordSum == targetSum){
          return true
      }
      return false
      
  }
  
  console.log(isSumEqual("acb", "cba", "cdb"), true)