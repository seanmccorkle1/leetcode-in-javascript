var maxProductDifference =(array) => {
    
    array.sort((a,b)=>a-b)
    return (array.at(-1) * array.at(-2)) - array[0]*array[1]
}