var combine = function (n, k) {

    const array = []

    //-----------------------------------
    const findCombination = (startNum, currCombo) => {

        // Base case:

        // k = 2  is length 2
        // [[1,2],[1,3]]
        // push once it reaches the length

        currCombo

        if (currCombo.length == k) {
            array.push([...currCombo])
            return
        }

        array

        let index = startNum

        while (index <= n) {

            index

            currCombo.push(index)
            currCombo
            
            findCombination(index + 1, currCombo)


            currCombo

            currCombo.pop()
            currCombo

            index++
        }

        currCombo

        return "next starting digit"
    }

    //-----------------------------------

    findCombination(startNum = 1, currCombo = [])

    return array
}

combine(4, 2)
// [
//     [1, 2],
//     [1, 3],
//     [1, 4],
//     [2, 3],
//     [2, 4],
//     [3, 4]
// ])