

var plusOne = function(array) {



    // start from the ones place


    for (let backIndex = array.length - 1; backIndex >= 0; backIndex--) {


        let digit = array[backIndex]


        if (digit == 9){
            array[backIndex] = 0
        }


        else if (digit != 9){
            array[backIndex] += 1
            return array
        }
    }


    // if all the numbers were 9, return this
    return [1,...array]
}


console.log(plusOne([1,2]), [1,3], "12 + 1 = 13")


// console.log(plusOne([8,2,9]), [8,3,0], "829 +1 = 830")
// console.log(plusOne([9,9]), [1,0,0])