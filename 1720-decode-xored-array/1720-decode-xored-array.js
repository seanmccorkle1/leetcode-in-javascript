var decode = function (encoded, first) {
    const out = [first]
    
    for (let index = 0; index < encoded.length; index++){
        
        let currNum = out[index]
        let encodedNum = encoded[index]
        
        let xorNum =  currNum ^ encodedNum
        out.push(xorNum)
    }
    
    // encoded.forEach((x, i) => out.push(out[i] ^ x))
    return out
}


