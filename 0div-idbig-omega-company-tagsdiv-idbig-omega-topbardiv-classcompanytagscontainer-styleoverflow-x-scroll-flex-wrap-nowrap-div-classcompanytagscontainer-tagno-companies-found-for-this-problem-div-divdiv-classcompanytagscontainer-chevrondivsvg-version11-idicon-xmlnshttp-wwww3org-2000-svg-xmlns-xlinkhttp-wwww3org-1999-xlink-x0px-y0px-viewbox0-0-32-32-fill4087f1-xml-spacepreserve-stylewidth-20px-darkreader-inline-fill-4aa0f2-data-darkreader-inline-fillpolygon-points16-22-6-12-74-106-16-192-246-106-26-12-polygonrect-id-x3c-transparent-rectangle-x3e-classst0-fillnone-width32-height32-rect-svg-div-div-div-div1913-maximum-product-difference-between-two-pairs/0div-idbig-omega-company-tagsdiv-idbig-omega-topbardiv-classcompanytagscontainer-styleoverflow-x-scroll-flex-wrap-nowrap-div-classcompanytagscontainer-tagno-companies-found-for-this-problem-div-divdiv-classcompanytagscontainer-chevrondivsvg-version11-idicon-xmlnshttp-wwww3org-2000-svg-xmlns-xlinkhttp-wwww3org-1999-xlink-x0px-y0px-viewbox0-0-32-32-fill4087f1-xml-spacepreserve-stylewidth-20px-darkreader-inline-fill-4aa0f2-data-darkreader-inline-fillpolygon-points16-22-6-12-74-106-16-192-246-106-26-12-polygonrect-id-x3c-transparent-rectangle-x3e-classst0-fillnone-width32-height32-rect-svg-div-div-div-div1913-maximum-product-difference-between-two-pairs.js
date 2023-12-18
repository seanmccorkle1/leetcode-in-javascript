var maxProductDifference =(array) => {
    
    array.sort((a,b)=>a-b)
    let high = array.at(-1)*array.at(-2)
    let low = array[0]*array[1]
    return high - low
    return (array.at(-1) * array.at(-2)) - array[0]*array[1]
}