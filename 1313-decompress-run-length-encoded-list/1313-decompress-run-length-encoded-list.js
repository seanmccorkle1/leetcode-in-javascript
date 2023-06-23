
var decompressRLElist = function(array) {

    let expandedArray = []

    for (let index = 1; index < array.length; index += 2){
    
        let frequency = array[index - 1]
        let value = array[index ]
        

            while (frequency >= 1){
                expandedArray.push(value)
                frequency -= 1
            }
        

    }

    return expandedArray
    return expandedArray.join("").split("").map(n => Number(n))
}

decompressRLElist([42,39])
// console.log(decompressRLElist([8,1,9,2]))