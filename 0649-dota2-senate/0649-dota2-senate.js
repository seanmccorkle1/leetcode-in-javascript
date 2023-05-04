var predictPartyVictory = function(senate) {

    
    senate = Array.from({length: senate.length}, (u, index) => senate[index] == "R" ? "Radiant" : "Dire")
    const obj={}

    const queue = []
    const queue2=[]

    for(let index=0; index < senate.length; index++){

        const currString = senate[index]

        if (currString == "Radiant") {
            queue.push(index)
        }
        
        else if (currString == "Dire"){
            queue2.push(index)
        }
    }


    while(queue.length != 0 &&queue2.length !=0) {

        let v1=queue[0]
        queue.shift()
        
        let v2=queue2.shift()

        if(v1<v2) {
            queue.push(v1+senate.length)
        }
        else if (v1 >= v2) {
            queue2.push(v2 + senate.length)
        }
    }
    
    if (queue.length> queue2.length){
        return "Radiant"
    }
    
    else if (queue.length<=queue2.length){
        return "Dire"
    }
    
}
