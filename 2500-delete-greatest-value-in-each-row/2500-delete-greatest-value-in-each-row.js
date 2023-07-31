var deleteGreatestValue = function (grid) {

    grid

    // push highest values to the back for pop()
    grid.forEach(row => row.sort((a, b) => a - b))

    let sum = 0
    grid[0]

    let firstRow = grid[0]
    
    // you can alter array variables with pop()

    while (firstRow.length != 0) {

        const currColumn = []

        for (const row of grid) {
            let greatestNum = row.pop()
            currColumn.push(greatestNum)
        }

        currColumn

        let greatestOfTwo = Math.max(...currColumn)
        sum += greatestOfTwo
    }

    return sum
}

console.log(deleteGreatestValue([
    [1, 2, 4],
    [3, 3, 1]
]), 8, "4 + 3 + 1 = 8")