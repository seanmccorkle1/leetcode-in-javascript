/**
 * @param {string[]} strs
 * @return {number}
 */


var minDeletionSize = function (array) {

    var columnDeletions = 0;

    // delete if the letter in the left word is greater than the one in the right


    const firstWord = array.at(0)


    for (let index = 0; index < firstWord.length; index++) {


        // index < array.length - 1;
        // means stop before the last element)

        for (let wordIndex = 0; wordIndex < array.length - 1; wordIndex++) {
            index
            wordIndex

            let wordAbove = array[wordIndex]
            let wordBelow = array[wordIndex + 1]

            const letterAbove = wordAbove.at(index)
            const letterBelow = wordBelow.at(index)

            index
            wordIndex
            
            const columnIsNotSorted = !(letterAbove <= letterBelow)

            // since the nested loop goes top-to-bottom, 
            // you can only have 1 delete per column

            // break to avoid counting multiple column deletions for one column

            if (columnIsNotSorted){
                columnDeletions += 1
                break
            }

        }
    }

    return columnDeletions
}


console.log(
    minDeletionSize(
       ["abc", 
        "bce", 
        "cae"]),  1)