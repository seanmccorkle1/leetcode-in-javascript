


Array.prototype.snail = function(rowsCount, colsCount) {

    const arrayLength = this.length

    rowsCount * colsCount
    if (arrayLength !=  rowsCount * colsCount) {
        return []
    }

    // each subarray is a row.
    // fill => map, map wont work on ","

    const snailArray = new Array(rowsCount).fill("filler").map(s => [])
    snailArray

    // the two directions of the snail, up and down
    // are represented with binary even/odd

    for (let index = 0; index  < this.length; index ++){

        const currNum = this[index]

        const binaryMod = Math.floor(index / rowsCount)
        index

        rowsCount
        index % rowsCount

        // % operator works well with indexes, it cant get to the mod number itself, 
        // but it can get the range [0, 1, 2,oneBelowMod]

        rowsCount - index % rowsCount - 1
        rowsCount - (index % rowsCount) - 1

        if (binaryMod % 2 == 0) {

            // right number of a mod is the unchanging bound            
            let lowRowIndex = index % rowsCount

            const snailSubarray = snailArray[lowRowIndex]
            snailSubarray.push(currNum)

            snailArray

            // snailArray[currRowIndex].push(currNum)
            // snailArray[currRowIndex][i] = this[index]
        }

        // reverse of [0,1,2,3,4]

        else if (binaryMod%2 ==1) {

            index % rowsCount
            let highRowIndex = (rowsCount - 1) - (index % rowsCount)
            const backSubarray = snailArray[highRowIndex]
                        
            backSubarray.push(currNum)
            // snailArray[highRowIndex].push(currNum)
            snailArray
        }
       
        snailArray
    }

    return snailArray
}

const array =[19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15]

let res=array.snail(5,4)

const test=[
    [19,17,16,15],
    [10,1,14,4],
    [3,2,12,20],
    [7,5,18,11],
    [9,8,6,13]
   ]

res.join()==test.join()