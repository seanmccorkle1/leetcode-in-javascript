var secondHighest = function(string) {   
    
    const r=/[\d]/g
    let a= string.match(r) ?? "no match"
    
    if (a=="no match"){
        return -1
    }

    a = a.sort((a,b)=> a- b)

    // outer being [] means its an array
    a = [...new Set(a)] 

    a   

    if (a.length <= 1){
        return -1
    }  
    
    let secondHighest=a.at(-2)
    return secondHighest
    // return Number(a.at(-2))
}

console.log(secondHighest("dfa12321afd"),  2)
secondHighest("dfa")