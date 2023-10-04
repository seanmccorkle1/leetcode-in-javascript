var numIdenticalPairs = function (array) {

    let count = 0
    const obj = {}

    //    {}  | 0
    // { 1: 1 } | 0
    // { 1: 1, 2: 1} | 0
    // { 1: 1, 2: 1, 3: 1 }  | 0
    // { 1: 2, 2: 1, 3: 1 }  | 1
    // { 1: 3, 2: 1, 3: 1 } \| 3


    for (let number of array) {
        const valueExists = obj[number] ? true : false

        obj
        count

        if (valueExists) {

            let numOfPairs = obj[number]

            // early += on count
            count += numOfPairs

            ++obj[number]
        }

        else if (!valueExists) {
            obj[number] = 1
        }
    }

    obj
    return count
}

console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3]), 4, "(1, 1) (1, 1) (1, 1) and (3, 3)")