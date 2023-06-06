var sumOfUnique = function(array) {

  array = array.filter(num => array.indexOf(num) == array.lastIndexOf(num))
  
  return array.reduce((s,n)=>s+n,0)
}

console.log(sumOfUnique([1,2,3,2]), 4)