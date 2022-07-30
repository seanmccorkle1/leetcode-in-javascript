function heightChecker(array){
let count = 0
    const ascArray = array.slice().sort((a,b)=>a - b)

for (let index=0;index<array.length;index++){
	const num = array[index]
	const sortedNum = ascArray[index]
	
	if ( num != sortedNum ){
		count++
	 }
	
	
}
    return count    
}