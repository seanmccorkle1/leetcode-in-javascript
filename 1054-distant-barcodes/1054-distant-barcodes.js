/**
 Many question are incorrectly labeled, but i think less than 10 minutes for easy, 20 minutes for medium, and 40 minutes for hard problems is a good strategy. How many depends on your schedule, but i think the number isn"t really important. Learning from the question you"ve solved is more important.
 * 
 * @param
 * @return 
 * @explain 
 */

var rearrangeBarcodes = function(array) {

    array
    const map=new Map()
    
    // separate loop to set the map
    for (const letter of array) {

        let frequency = map.get(letter)

        if (map.get(letter) == undefined) {
            map.set(letter, 1)
        }
        
        else if (map.get(letter)) {
            map.set(letter, frequency + 1) // overwrite the value to 1 higher
        }
    }

    // 1 => frequency 4
    // 2 => frequency 2

    

    map
    let descArray = [...map.keys()].sort((a,b) => map.get(b) - map.get(a))
    
    let index = 0
    let resArray=[]
    
    for (const letter of descArray) {

        map
        let frequency = map.get(letter) // get value with get()

        frequency 

        // [4, 3, 2, 1] 
        // loop 4 times with frequency 4

        while (frequency >= 1){ 
            index

            resArray[index] = letter
            index += 2
            
            // -= 1 after the index is updated
            frequency -= 1  

            resArray


            // if index equals length, that means it returns undefined
            // go to odds [1, 3, 5, 7, 9]
            if (index >= array.length){
                index = 1 
            }
        }
    }
    array 
    resArray

    return resArray
}


console.log(rearrangeBarcodes([1, 1, 2]), [1, 2, 1], "most frequent fills the array first")

// console.log(rearrangeBarcodes(["a","a","a","b","b","b"]), ["a", "b", "a", "b", "a", "b" ])
// console.log(rearrangeBarcodes([1,1,1,1,2,2,3,3]), [ 2, 1, 2, 1, 3, 1, 3, 1 ])