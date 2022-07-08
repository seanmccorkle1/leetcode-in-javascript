var dominantIndex = function (array) {

    const maxNum = Math.max(...array)
    const halfNum = maxNum / 2

    // if there is any number greater than 3, then 6 is not big enough 
    // 6 has to be double, being > 3 falsifies it.

    // if its not 6 (maxnum) but still greater than half (3), then 6 is not double
    const numFound = array.find(num => num !== maxNum && num > halfNum)

    if (numFound){
        return -1
    }
    else return array.indexOf(maxNum)
}