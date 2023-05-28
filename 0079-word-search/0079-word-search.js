/**

This problem involves a lot of repetitive work like checking up, down, left, and right for lots of characters, so use a recursive inner function to simplify the code.
*/


var exist = function(board, word) {
    
    let flag = false
    
    const check = (r, c, index) => {

        if (!flag) {

            // if its out of bounds, go back

            if (r < 0 || c < 0 || r >= board.length || c >= board[0].length) {
                return
            } 

            // if its the wrong character:
            if (board[r][c] != word[index]) {
                return
            }

            if (index == word.length - 1) { // got to the end means we found a correct path
                flag = true
                return
            }

            // mark our path so we dont go back and forth
            board[r][c] = null

			// try all directions

            check(r + 1, c, index + 1)
            check(r - 1, c, index + 1)

            check(r, c + 1, index + 1)
            check(r, c - 1, index + 1)

            // reset our board, very important
            board[r][c] = word[index] 
        }
    }

    for (let index = 0; index < board.length; index++) {

        for (let nestedIndex = 0; nestedIndex < board[0].length; nestedIndex++) {

            if (board[index][nestedIndex] == word[0]) {

                check(index, nestedIndex, 0)

                if (flag) {
                    return flag
                }
            }
        }
    }

    return flag
}

console.log(
    exist(
        [["A","B","C","E"],
        ["S","F","C","S"],
        ["A","D","E","E"]], "ABCCED"), 
        true)