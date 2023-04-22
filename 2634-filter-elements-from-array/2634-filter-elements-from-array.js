

var filter = function(arr, fn) {
   return arr.filter((x, i) => fn(x,i));
}

filter([0,10,20,30], greaterThan10 = num => num > 10)