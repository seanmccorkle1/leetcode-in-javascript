

var areAlmostEqual = function(string1, string2) {

    let differenceCount = 0
    let twoLetterArray = []

    if (string1 === string2) {
        return true
    }

    // no way to make "asd" and "zxcv" equal to each other with a swap
    // you have to add a letter

    if (string1.length != string2.length) {
        return false
    }

    for (let index = 0; index < string1.length; index += 1) {

        index

        const currString1Letter = string1[index]
        const currString2Letter = string2[index]

        if (currString1Letter === currString2Letter) {
            continue // no need to swap the letters if theyre already equal
        } 

        // if it skips the `if` statement,
        // that means the letters are different

        differenceCount += 1

        
        // you can only swap exactly 2 letters
        if (differenceCount >= 3) {
            return false 
        } 
        twoLetterArray


        if (twoLetterArray.length === 0) {
            twoLetterArray = [currString1Letter, currString2Letter] 
            continue // go to the next letter
        }
        
        
        // when twoLetterArray gets ["a", "b"], the loop goes back to the top
        // now ["a", "b"] are the previous letters
        twoLetterArray

        const prevString1Letter = twoLetterArray[0]
        const prevString2Letter = twoLetterArray[1]

        prevString1Letter
        currString2Letter

        prevString2Letter
        currString1Letter
        
        // dont return false, but dont return true yet
        // the differenceCount has to be 2

        if (prevString1Letter === currString2Letter && prevString2Letter === currString1Letter) {
            continue 
        }

        else return false
        // return false
    }

    differenceCount

    if (differenceCount === 2) {
        return true
    }
    else return false    
    
}