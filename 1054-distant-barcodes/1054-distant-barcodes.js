/**
 * @param {number[]} barcodes
 * @return {number[]}
 */

var rearrangeBarcodes = function(inputArray) {
    
    const map=new Map()
    
    //separate loop to set the map
    for (const letter of inputArray){

        let frequency = map.get(letter)

        if (map.get(letter) == undefined){
            map.set(letter, 1)
        }
        
        else if (map.get(letter)) {
            map.set(letter, frequency + 1)
        }
    }
    
    let ascArray = Array.from(map.keys()).sort((a,b)=> map.get(b) - map.get(a)) 
    
    let index=0
    let resultArray=[]
    
    for (const letter of ascArray){

        let frequency = map.get(letter)
        

        while (frequency > 0){
            
            resultArray[index] = letter
            index += 2
            
            // check after the index is updated

            if (index >= inputArray.length){
                index= 1 // odds [1, 3, 5]
            }
            
            frequency -= 1
        }
    }
    return resultArray
}

console.log(rearrangeBarcodes(["a", "a", "a", "a", "b", "b", "b"]), [ 'a', 'b', 'a', 'b', 'a', 'b', 'a' ])