var twoSum = function(array, targetNumber) {

    // const returnArray = [...array]

    for (let index=0; index < array.length; index += 1){
        let number=array[index]

        let difference = targetNumber - number
        let indexOfDifference = array.indexOf(difference)

        if (index !== indexOfDifference && indexOfDifference > -1){
            return [index, indexOfDifference]
        }
    }

}