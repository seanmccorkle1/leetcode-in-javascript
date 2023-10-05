var majorityElement = function(array){

    const returnArray= []
    const object = {}

    if (array.length <= 2){
        return [...new Set(array)]
    }
    
    for (let index = 0; index < array.length; index++){

        let number = array[index]
        
        object[number]
        ? object[number] += 1 
        : object[number] = 1
    }
    
    object
    
    for (let [stringnum, frequency] of Object.entries(object)){
        
        stringnum
        frequency
        
        let threshold = array.length / 3
        
        if (frequency > threshold) {
            returnArray.push(stringnum)
        }
    }
    
    return returnArray.map(stringnum=>Number(stringnum))
}
