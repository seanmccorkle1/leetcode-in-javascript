/**
 * @param [0,1,2]
 * @return 0
 */


var smallestEqual = function(array) { 

    for (let index=0; index<array.length; index += 1){

        const num = array[index]

        // if `num` is outside the range of [0-9], just continue
        // because (index % 10) prevents any number being >=10
        // modulo operator  is too heavy
        
        //  (index % 10) === 11 is impossible

        if (num >= 10){
            continue
        }
            
        let indexMod10 = index % 10

        if (indexMod10 === num){
            return index
        }
    }
    return -1
}

console.log(smallestEqual([0, 1, 2]))