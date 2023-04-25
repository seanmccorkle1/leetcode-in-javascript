var secondHighest = function(string) {   

    const r=/[\d]/g

    let a= string.match(r)

    if (a==null){
        return -1
    }

    a = a.sort((a,b)=> a- b)

    // outer being [] means its an array
    a = [...new Set(a)] 

    a   

    a
    let secondHighest=a.at(-2)

    if (!secondHighest){
        return -1
    }

    return Number(secondHighest)
}
console.log(secondHighest("dfa12321afd"),  2)
secondHighest("dfa1")