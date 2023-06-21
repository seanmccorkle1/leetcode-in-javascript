var evenOddBit = function (num) {

    evenOddBit

    let bitstring = num.toString(2)

    let array = [0,0]

    let evenArray = []
    let oddArray = []

    let evenIndex = bitstring.length - 1

    while (evenIndex >= 0){

        if (bitstring[evenIndex] == 1){
            evenArray.push(bitstring[evenIndex])
        }

        evenIndex -= 2
    }

    let oddIndex = bitstring.length - 2

    while (oddIndex >= 0){

        if (bitstring[oddIndex] == 1){
            oddArray.push(bitstring[oddIndex])
        }

        oddIndex -= 2
    }

    evenArray
    oddArray    


    return [evenArray.length, oddArray.length]

    for (let index=bitstring.length - 1; index >= 0; index--) {

        const bit = bitstring[index]

        if (index %2==0 && bit == 1){
            array[0]++
        }

        else if (index %2 == 1 && bit == 1){
            array[1]++
        }
    }
    return array
}

console.log(evenOddBit(2), [0, 1])
console.log(evenOddBit(17),  [2, 0])