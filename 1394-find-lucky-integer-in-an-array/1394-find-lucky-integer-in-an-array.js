var findLucky = function(array) {

    // const map = new Map();
    const obj = {}

    let max = -1

    for (const num of array){

        obj
        const numExists = (obj[num] != undefined)
        
        if (numExists) {
            obj[num]  += 1
        }
        
        else if (!numExists) {
            obj[num] = 1
        }

        obj
    }
        
    obj    

    // filter out the ones that arent lucky numbers

    array = array.filter(num => {

        let frequency = obj[num]
        const isLuckyNumber =  num == frequency
        return isLuckyNumber == true 
    })


    // new Set(arrayLike)
    const set = new Set(array)

    array =  [...set]

    const noLuckyNumbers = array.length == 0

    if (noLuckyNumbers){
        return -1
    }

    array

    max = Math.max(...array)    
    return max
}

// findLucky([1,1,2,2,2,3,3,3,3])
console.log(findLucky([0,1,2,2,3,3,3]), 3, "find the largest")