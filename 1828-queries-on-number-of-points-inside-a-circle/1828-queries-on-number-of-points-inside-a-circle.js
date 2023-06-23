const countPoints = function(points, queries) {

    let successArray = new Array(queries.length).fill(0)
    
    for (let index = 0; index < queries.length; index++) {
        
        let circleXCoordinate  = queries[index][0]
        let circleYCoordinate = queries[index][1]
        let radius = queries[index][2]

        let count = 0
        
        for (let [pointXCoordinate, pointYCoordinate] of points) {

            let xProduct= (circleXCoordinate -  pointXCoordinate) * (circleXCoordinate - pointXCoordinate) 

            let yProduct = (circleYCoordinate- pointYCoordinate) * (circleYCoordinate - pointYCoordinate) 
            
            if ((xProduct + yProduct) <= Math.pow(radius, 2)){
                ++successArray[index]
            }            
        }
        
        // result.push(count)
    }
    return successArray
    return result;
}
