

var numIdenticalPairs = function (array) {

    const obj = {}
    let count = 0

    for (let number of array){

        const valueExists = obj[number] ? true : false
        const frequency = obj[number]

        if (valueExists) {

            count += frequency

            // update the data structure after the counter
            obj[number] += 1 

            obj
        }

        else if (!valueExists) {
            obj[number] = 1
            obj
        }
    }

    obj
    return count
}

console.log(numIdenticalPairs([1,2,3,1,1,3]),   4, "(1, 1) (1, 1) (1, 1) and (3, 3)")