var majorityElement = function(array){
    const returnArray= []
    const object = {}

    for (let index = 0; index < array.length; index++){

        const number = array[index]

        object[number] 
        ? object[number] += 1 
        : object[number] = 1
    }

    object
    Object.keys(object)

    for (let [stringnum, frequency] of Object.entries(object)){

        stringnum
        frequency

        if (frequency > array.length / 3){
            returnArray.push(Number(stringnum))
        }
    }
    return returnArray
}