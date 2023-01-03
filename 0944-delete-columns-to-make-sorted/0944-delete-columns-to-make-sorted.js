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

            const notSorted = letterAbove > letterBelow

            // delete this column
            // we would need to delete this letter to make it sorted

            if (notSorted == true){
                columnDeletions += 1
                break
            }

        }
    }
    return columnDeletions
}

minDeletionSize([ "abc", "bce", "cae"], 1)

