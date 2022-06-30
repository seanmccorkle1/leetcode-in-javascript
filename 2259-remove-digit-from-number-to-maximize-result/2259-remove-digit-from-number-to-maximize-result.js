var removeDigit=function(stringNum, targetDigit){
    let max=0
    const stringArray=[]
    for (let index = 0; index < stringNum.length; index++) {

        if (stringNum[index] == targetDigit){
            let slice = stringNum.slice(0, index) + stringNum.slice(index + 1)
            stringArray.push(slice)        
        }
    }
    // get max number by sorting ascending and getting the last number
    return stringArray.sort()[stringArray.length - 1]
}