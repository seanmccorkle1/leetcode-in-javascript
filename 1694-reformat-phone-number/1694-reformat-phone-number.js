
var reformatNumber = function(phoneNumString) { 
  
    phoneNumString =phoneNumString.replace(/[\s\-]/g, "")
    
    const array  =[]
    let returnString = ""
    
    let index=0
    
    while (index < phoneNumString.length){
      
      let threeDigits = phoneNumString.slice(index, index + 3)

      if (threeDigits.length == 1){

          let secondToLastDigit =returnString.at(-2)
          let lastDigit = threeDigits
          let lastBlock  = secondToLastDigit + lastDigit

          let majorityOfPhoneNum = returnString.slice(0, returnString.length - 2)
          
          return `${majorityOfPhoneNum}-${lastBlock}`
          return returnString.slice(0, returnString.length - 2) + "-" +secondToLastDigit + lastDigit 
      }
      returnString += (threeDigits+"-")
      index += 3
    }
  
  returnString = returnString.slice(0, returnString.length-1)
  return returnString
}

console.log(reformatNumber("12345"), "123-45")
 

console.log(reformatNumber("123 4-56"), "123-456")
// console.log(reformatNumber("1234567"), "123-45-67")