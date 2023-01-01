var findLucky = function(array) {

    // const map = new Map();
    const obj = {}

    let maxLuckyNum = 0

    for (let num of array){

        const numExists = (obj[num] >= 1)

        if (numExists) {
            obj[num]  += 1
        }

        else if (!numExists) {
            obj[num] = 1
        }

        obj
    }
    
    obj    

    array = array.filter(num => {

        let frequency = obj[num]
        const isLuckyNumber =  num == frequency


        return isLuckyNumber == true
    })

    array = [...new Set(array)]

    if (array.length == 0){
        return -1
    }

    array
    
    maxLuckyNum = Math.max(...array)    
    return maxLuckyNum
}

// findLucky([1,1,2,2,2,3,3,3,3])
console.log(findLucky([0,1,2,2,3,3,3]), 3, "find the largest")