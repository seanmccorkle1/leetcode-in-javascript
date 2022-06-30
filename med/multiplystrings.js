var multiply = function (stringnum1, stringnum2) {

    if (stringnum1 === '0' || stringnum2 == "0") {
        return '0'
    }


// max 4 places with 99 * 99, min 3 places with 99 * 10 ([0990])

    const array = new Array(stringnum1.length + stringnum2.length).fill(0)



    // >= 0 for backwards index, , start at the last digit (ones) of both numbers
// use length - 1 for backwards indexes

    for (let index = stringnum1.length - 1; index >= 0; index--) { // 1 and 0, 2 loops

        index
        array

        // the for loop "refreshes" the nested for loops index back to 1


        for (let index2 = stringnum2.length - 1; index2 >= 0; index2--) {            

// both go down to 0 at the last sum

   let tensDigit = index+index2   
    let onesDigit=index+index2+1 // one place to the right


            array
            index
            index2
            stringNum1
            stringNum2

// 4 * 3 is guaranteed 1 in tens place, 4 * 2, is either 0 or 1 in tens place depending on carry.

// tens place of 1s * 1s is the same as ones place of 10s * 1s

// start from the back with onesDigit, starting from tensDigit only gets 0's

// pointer is at 2 spots, and each gets updated for every multiplication
// the multiplication has to work with the carry


           const sumWithCarry = 
            array[onesDigit]
            +
            ((stringNum1[index])
            *
            (stringNum2[index2]))


            // first digit of 15 (1), digit to the left or 0 if its eg 08
            // dont keep the carry by using 0 += 0).

// 10s place * 10s place is 1 index higher (left) than 10s place * 1s place


//[0,0,1,5]
//[0,1,3,5]
//[0,2,3,5]
// [1,0,3,5]


// 0 is in ones place for 10, it doesnt change the 3 already there 

// 9 -> [0,9], not in the tens place
// 10 -> [1,0]
// 11 -> [1,1] 


// for a sum of 09, floor the tens digit to 0, because there is no tens digit.
// get tens only, this says "the sum must be 10 or over"

            array[tensIndex] +=
            Math.floor(sumWithCarry / 10)


    // get ones only
   // get the ones place of 10 (0)  
// 168 % 10 is 8. 181 % 10 is 1.


            array[onesIndex]  = sumWithCarry % 10
            array
        }

// more to the left is GREATER, the actual result is 1035
// so start from the back

   }

    // numbers cant start with a 0, 0 is from the .fill(0), its not a string
// always fill with 0 for math problems, dont start from 1 or another

    if (array[0] === 0) array.shift()

    // return as a string
    return array.join('')
}

// Follow the control flow by looking at the 1st quokka value, 2nd quokka value etc
console.log(multiply('23', '45'), "1035")
// console.log(multiply('2','3'))
