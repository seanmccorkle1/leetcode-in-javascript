
const sortArrayByParity = array=>[...array.filter(num=>num%2==0), ...array.filter(num=>num%2==1)] 
// var sortArrayByParity = function(array) {

//     let evenArray = array.filter(num => num % 2 === 0)
//     let oddArray = array.filter(num => num % 2  === 1)
    
//     return [...evenArray, ...oddArray]
// }
