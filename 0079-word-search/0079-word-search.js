var exist = function(board, word) {

    let result = false
    
    
    const check = (r, c, index) => {
        
        const fullStringNotFoundYet = result == false
        
        if (fullStringNotFoundYet) {
            
            // out of boundary
            if (r <= -1 || c <=-1 || r >= board.length || c >= board[0].length) {
                return
            }
            
            // if its the wrong character:
            if (board[r][c] != word[index]) {
                return
            }

            if (index == word.length - 1) { // got to the end means we found a correct path
                result = true
                // return
            }

            // mark our path so we dont go back and forth
            board[r][c] = null

			// try all directions

            check(r + 1, c, index + 1)
            check(r -1, c, index + 1)
            check(r, c + 1, index + 1)
            check(r, c - 1, index + 1)

            board[r][c] = word[index] // reset our board , very important
        }
    }

    for (let index=0; index < board.length; index++) {

        for (let nestedIndex=0; nestedIndex < board[0].length; nestedIndex++) {

            if (board[index][nestedIndex] == word[0]) {

                check(index, nestedIndex, 0)

                if (result) {
                    return result
                }
            }
        }
    }

    return result
}

console.log(
    exist(
        [["A","B","C","E"],
        ["S","F","C","S"],
        ["A","D","E","E"]], "ABCCED"),  true)