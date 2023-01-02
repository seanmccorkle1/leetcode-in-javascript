/**
 *
 * @params {@patternString @wordArray }
 * @return @boolean 
 * 
 * @function patternMatch(["abba", ["dog", "cat", "dog", "rocketship"])
 * @return false
 * 
 * @explain
 */




var countBits = function(num){

    const array = []

    for (let index=0; index <= num; index++){

        index
        let onesOnly = index.toString(2).match(/[1]/g)

        if (onesOnly== null){
            array.push(0)
        }
        
        else {
            array.push(onesOnly.length)
        }
    }
    return array 

}


console.log(countBits(5),  [0,1,1,2,1,2])