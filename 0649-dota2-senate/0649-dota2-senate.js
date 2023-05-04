var predictPartyVictory = function(senate) {
    var map={}, m=senate.length, q1=[], q2=[];

    for(var i=0; i<m; i++){
        if(senate.charAt(i) == 'R') q1.push(i)
        else{
            q2.push(i);
        }
    }


    while(q1.length != 0 &&q2.length !=0){
        let v1=q1[0]
        q1.shift()
        let v2=q2.shift();
    
        if(v1<v2) q1.push(v1+m)
        else{
            q2.push(v2+m);
        }
    }
    return q1.length> q2.length? "Radiant": "Dire"
};
