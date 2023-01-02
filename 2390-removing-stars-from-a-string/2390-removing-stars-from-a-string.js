
var removeStars = function (string) {

    const stack = []

    for (let letter of string) {

        // pop the most recent letter (closest to the star) AND dont push

        letter

        if (letter === '*') {
            stack.pop()
        }

        else if (letter != "*") {
            stack.push(letter)
        }
        
        stack
    }

    stack
    let removedString= stack.join("")
    return removedString
}

console.log(removeStars("leet*cod*e"), "leecoe")