var checkStraightLine = function(coords) {
    
   for (let i=0; i < coords.length - 2; i++){
       
       let [x1,y1]=coords[i]
       let [x2,y2]=coords[i+1]
       let [x3,y3]=coords[i+2]
       
       if (!x3){
           break
       }
       
       let area=Math.abs(0.5 * ((x1*y2 + x2*y3 + x3*y1)-(y1*x2 + y2*x3 + y3*x1)))
       
       const lineNotStraight = (area != 0) ? true : false

       if (lineNotStraight) {
           return false
       }
   }
    return true
}

console.log(checkStraightLine([[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]), true)
// console.log(checkStraightLine([[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]), false)