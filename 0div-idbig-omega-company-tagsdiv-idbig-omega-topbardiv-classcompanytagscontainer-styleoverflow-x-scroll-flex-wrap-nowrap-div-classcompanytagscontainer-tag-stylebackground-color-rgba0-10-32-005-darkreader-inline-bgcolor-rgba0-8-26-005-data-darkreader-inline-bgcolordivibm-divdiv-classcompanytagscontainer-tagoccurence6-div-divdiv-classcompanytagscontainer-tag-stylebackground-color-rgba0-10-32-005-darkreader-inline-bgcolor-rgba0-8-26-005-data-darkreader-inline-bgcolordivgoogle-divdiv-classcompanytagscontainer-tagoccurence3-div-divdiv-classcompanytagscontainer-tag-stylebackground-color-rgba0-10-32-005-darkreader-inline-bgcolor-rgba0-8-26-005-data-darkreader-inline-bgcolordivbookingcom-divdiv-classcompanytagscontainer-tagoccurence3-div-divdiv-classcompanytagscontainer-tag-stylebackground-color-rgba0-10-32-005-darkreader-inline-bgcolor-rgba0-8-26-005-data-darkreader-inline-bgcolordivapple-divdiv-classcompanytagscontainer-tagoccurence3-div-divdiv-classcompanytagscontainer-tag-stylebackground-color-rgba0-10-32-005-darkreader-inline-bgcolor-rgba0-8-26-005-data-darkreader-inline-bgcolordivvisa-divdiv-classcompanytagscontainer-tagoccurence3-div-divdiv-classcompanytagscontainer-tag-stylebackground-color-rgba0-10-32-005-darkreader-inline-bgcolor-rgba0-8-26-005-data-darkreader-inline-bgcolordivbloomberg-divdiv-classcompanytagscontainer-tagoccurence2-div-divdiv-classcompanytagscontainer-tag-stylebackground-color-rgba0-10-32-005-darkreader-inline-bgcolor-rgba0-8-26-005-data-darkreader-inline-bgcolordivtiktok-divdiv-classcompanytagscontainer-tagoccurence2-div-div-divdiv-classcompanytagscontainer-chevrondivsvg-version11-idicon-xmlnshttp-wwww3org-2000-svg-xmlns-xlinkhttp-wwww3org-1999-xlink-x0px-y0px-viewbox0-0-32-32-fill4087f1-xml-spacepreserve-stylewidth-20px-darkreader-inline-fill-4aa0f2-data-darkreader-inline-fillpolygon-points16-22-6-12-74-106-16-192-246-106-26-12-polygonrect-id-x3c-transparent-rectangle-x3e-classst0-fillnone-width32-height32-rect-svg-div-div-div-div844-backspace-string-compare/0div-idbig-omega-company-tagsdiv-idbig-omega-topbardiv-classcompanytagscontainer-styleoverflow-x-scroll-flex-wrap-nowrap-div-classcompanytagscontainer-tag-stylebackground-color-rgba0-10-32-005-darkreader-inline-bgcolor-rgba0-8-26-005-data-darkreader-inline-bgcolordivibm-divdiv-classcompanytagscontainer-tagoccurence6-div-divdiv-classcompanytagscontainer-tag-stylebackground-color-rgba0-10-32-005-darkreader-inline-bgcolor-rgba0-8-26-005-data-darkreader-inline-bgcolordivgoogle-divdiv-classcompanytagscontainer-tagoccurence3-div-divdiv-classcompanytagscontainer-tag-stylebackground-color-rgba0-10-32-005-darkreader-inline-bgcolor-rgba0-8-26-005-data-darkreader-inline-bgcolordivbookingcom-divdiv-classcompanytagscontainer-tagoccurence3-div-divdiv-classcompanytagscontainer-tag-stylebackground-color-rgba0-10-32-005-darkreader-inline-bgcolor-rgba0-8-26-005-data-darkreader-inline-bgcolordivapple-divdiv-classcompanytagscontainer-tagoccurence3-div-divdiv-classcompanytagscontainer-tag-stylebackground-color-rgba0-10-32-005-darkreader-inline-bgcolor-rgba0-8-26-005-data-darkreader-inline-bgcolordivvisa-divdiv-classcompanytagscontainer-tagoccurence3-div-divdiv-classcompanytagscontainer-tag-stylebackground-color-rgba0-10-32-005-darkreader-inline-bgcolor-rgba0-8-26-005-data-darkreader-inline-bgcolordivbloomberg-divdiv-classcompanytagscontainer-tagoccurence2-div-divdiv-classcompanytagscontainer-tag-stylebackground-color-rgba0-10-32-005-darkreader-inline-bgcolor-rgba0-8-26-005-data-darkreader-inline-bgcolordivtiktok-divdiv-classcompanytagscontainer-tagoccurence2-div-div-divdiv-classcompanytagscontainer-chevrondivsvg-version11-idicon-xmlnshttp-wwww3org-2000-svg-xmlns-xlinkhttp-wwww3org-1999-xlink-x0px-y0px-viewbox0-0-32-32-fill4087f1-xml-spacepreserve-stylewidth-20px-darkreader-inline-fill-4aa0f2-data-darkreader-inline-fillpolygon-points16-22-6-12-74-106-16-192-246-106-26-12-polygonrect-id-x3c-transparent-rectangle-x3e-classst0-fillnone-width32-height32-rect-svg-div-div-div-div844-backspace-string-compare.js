var backspaceCompare = function(str1, str2){

    // apply this function on str1 and str2
    const recursive = (str) => {
        let stack = [];

        for (let letter of str){

            if (letter === "#"){
                stack.pop(); 
            } 
            
            else {
                stack.push(letter);
            }
        }
        return stack.join(""); 
    }
    if (recursive(str1) == recursive(str2) ) {
        return true
    } 
    return false
}

console.log(backspaceCompare("ab#c", "ad#c"), "both become ac" , true,
backspaceCompare("ab##","c#d#"), true)

/*
We choose the *heaviest two stones*
We combine 7 and 8 to get 1 so the array converts to [2,4,1,1,1] then,
we combine 2 and 4 to get 2 so the array converts to [2,1,1,1] then,
we combine 2 and 1 to get 1 so the array converts to [1,1,1] then,
we combine 1 and 1 to get 0 so the array converts to [1] then that's the value of the last stone.
*/