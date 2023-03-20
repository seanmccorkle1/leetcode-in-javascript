/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */

 var canPlaceFlowers = function (array, targetCount) {
    let count = 0

    for (let index = 0; index < array.length; index++) {

        if (array[index] === 0) {


            if (array[index - 1] === 0 && array[index + 1] === 0) {
                array[index] = 1
                    ++count
            }

            if (index === 0) {
                if (array[index + 1] === 0 || index === array.length - 1) {
                    array[index] = 1
                    ++count
                }
            }

            if (index === array.length - 1) {

                if (array[index - 1] === 0 ){//||index === 0){
                    array[index] = 1
                    ++count
                }
            }
        }

    }
    count

    return count >= targetCount ? true : false
}
