var backspaceCompare = function(str1, str2){    
    
    let fixedString1 = recursive(str1)
    let fixedString2 = recursive(str2)
    
    if (fixedString1 ==fixedString2) {
        return true
    } 
    return false
}

const recursive = (str) => {
    let stack = [];

    for (let letter of str){

            if (letter === "#"){
                stack.pop(); 
            } 
            
            else if (letter != "#") {
                stack.push(letter);
            }
        }
        return stack.join(""); 
    }

console.log(backspaceCompare("ab#c", "ad#c"), "both become ac" , true,
backspaceCompare("ab##","c#d#"), true)