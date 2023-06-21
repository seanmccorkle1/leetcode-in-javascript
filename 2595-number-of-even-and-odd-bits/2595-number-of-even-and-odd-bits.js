var evenOddBit = function (num) {

    evenOddBit

    let bitstring = num.toString(2)

    let array = [0,0]

    let evenArray = []
    let oddArray = []

    let evenIndex = bitstring.length - 1

    while (evenIndex >= 0){

        if (bitstring[evenIndex] == 1){
            evenArray.push("hot")
        }

        evenIndex -= 2
    }

    let oddIndex = bitstring.length - 2

    while (oddIndex >= 0){

        if (bitstring[oddIndex] == 1){
            oddArray.push("hot")
        }

        oddIndex -= 2
    }

    evenArray
    oddArray
    
    return [evenArray.length, oddArray.length]
    
}

console.log(evenOddBit(2), [0, 1])
console.log(evenOddBit(17),  [2, 0])