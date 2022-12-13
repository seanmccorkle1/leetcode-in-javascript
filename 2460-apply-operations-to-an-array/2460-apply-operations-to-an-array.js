

var applyOperations = function(array){

    for (let index=0;index<array.length; index+=1){

        let leftNum=array[index]
        let rightNum =array[index + 1]
        // variables are fine on the RIGHT (values) side
        if (leftNum == rightNum){
            [array[index], array[index + 1]] = [leftNum * 2, 0]
        }
    }


    return array.sort((a,b)=> !a-!b)
}


console.log(applyOperations([2,2,2,2]),  [4, 4, 0, 0], "move all the zeroes to the back")
// console.log(applyOperations([10, 10]),   [20, 0],   "multiply left 10 by 2 and set right 10 to 0")