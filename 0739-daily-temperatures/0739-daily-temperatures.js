var dailyTemperatures = function(T) {
   let stack = [];
   let result = new Array(T.length).fill(0);
    for(let i=T.length-1; i >= 0; i--){
        while(stack.length && T[i] >= T[stack[stack.length-1]]){
         stack.pop();
        }
        if(stack.length){
            result[i] = stack[stack.length-1] - i;   
        }
        stack.push(i)
    }
    return result;
};