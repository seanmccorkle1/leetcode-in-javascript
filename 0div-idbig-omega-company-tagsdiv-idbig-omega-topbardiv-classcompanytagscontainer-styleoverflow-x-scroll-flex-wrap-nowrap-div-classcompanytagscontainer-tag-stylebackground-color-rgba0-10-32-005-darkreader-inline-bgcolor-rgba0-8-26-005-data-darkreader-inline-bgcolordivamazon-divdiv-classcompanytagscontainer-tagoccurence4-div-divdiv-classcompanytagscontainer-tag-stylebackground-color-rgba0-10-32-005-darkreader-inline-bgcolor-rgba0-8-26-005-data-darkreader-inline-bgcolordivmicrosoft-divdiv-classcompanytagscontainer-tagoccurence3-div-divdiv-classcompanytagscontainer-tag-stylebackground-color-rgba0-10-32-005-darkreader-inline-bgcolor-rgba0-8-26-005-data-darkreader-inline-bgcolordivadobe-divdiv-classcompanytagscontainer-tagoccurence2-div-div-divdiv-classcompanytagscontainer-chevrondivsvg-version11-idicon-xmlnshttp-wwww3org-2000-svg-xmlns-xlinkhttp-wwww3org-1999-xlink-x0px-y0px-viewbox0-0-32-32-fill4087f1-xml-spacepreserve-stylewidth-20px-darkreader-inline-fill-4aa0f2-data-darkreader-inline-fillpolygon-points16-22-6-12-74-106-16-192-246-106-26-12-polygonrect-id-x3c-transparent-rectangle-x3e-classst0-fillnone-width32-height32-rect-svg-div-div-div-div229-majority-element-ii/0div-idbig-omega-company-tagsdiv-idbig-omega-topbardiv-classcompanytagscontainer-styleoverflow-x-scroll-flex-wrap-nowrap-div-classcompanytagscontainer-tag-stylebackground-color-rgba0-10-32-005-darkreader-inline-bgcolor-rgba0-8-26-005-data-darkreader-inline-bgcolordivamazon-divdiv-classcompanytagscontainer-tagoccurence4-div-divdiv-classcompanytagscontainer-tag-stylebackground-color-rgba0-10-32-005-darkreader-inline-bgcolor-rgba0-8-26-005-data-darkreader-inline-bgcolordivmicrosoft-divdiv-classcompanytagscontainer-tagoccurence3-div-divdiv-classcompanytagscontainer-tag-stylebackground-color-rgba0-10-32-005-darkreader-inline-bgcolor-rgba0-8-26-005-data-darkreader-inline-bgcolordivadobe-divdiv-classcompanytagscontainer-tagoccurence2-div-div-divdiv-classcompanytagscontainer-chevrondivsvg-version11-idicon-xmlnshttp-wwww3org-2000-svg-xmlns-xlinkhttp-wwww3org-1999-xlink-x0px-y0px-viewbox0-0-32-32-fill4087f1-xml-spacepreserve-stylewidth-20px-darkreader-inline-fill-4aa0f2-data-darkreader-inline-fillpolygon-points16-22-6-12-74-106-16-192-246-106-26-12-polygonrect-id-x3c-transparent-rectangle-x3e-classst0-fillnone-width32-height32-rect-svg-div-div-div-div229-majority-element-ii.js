var majorityElement = function(array){

    const greaterThanThresholdNums= []
    const object = {}

    if (array.length <= 2){
        return [...new Set(array)] // return uniques
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
        let num = Number(stringnum)
        
        if (frequency > threshold) {
            greaterThanThresholdNums.push(num)
        }
    }
    
    return greaterThanThresholdNums
}
