/**
 Many question are incorrectly labeled, but i think less than 10 minutes for easy, 20 minutes for medium, and 40 minutes for hard problems is a good strategy. How many depends on your schedule, but i think the number isn't really important. Learning from the question you've solved is more important.
 * 
 * @param summaryRanges([0, 1, 2, 4, 5, 7])
 * @return  ["0->2", "4->5", "7"]
 * @explain
*/


var summaryRanges = function (array) {

    const rangeArray = []
    let staticIndex = 0



    // index <= array.length
    // start at index=1 for the difference 



    // 7+1 != undefined  = true
    // the if statement will always execute on the last element (undefined)
    
    
    for (let index = 1; index <= array.length; index++) {


        index


        let leftNum = array[index - 1]
        let rightNum = array[index]


        array[staticIndex]
        index == array.length


        // "true" on 4, 4 - 2
        // "true" on 7, 7 - 5



        leftNum
        rightNum
        // the last loop is [7, undefined]


        let plusOne = leftNum + 1
 
        if (leftNum + 1 !== rightNum) {      //   || index == array.length) {



            // rightNum and leftNum converge on the last loop
            
            array[staticIndex]
            leftNum
            rightNum

            // multiple numbers:
            if (array[staticIndex] != leftNum) {

                let leftmostNum = array[staticIndex]

                // string
                let range = `${leftmostNum}->${leftNum}`


                rangeArray
            
                rangeArray.push(range)
            
                rangeArray
            }


            // just use the else statement, not else if


            else {
                rangeArray.push(leftNum.toString())
                rangeArray
            }



            // store the index of `rightNum` in staticIndex
            // only do this when the non-nested if statement executes


            leftNum
            rightNum


            // ignore "6" and undefined


            staticIndex
            index


            staticIndex = index
            array[staticIndex]
        }
    }


return rangeArray
}


console.log(summaryRanges([0, 1, 2, 4, 5, 7]), ["0->2", "4->5", "7"], "break at 3 and at 6, total of 3 ranges. 7 is left alone at the end")

// console.log(summaryRanges([0,2,3,4,6,8,9]), ["0","2->4","6","8->9"])