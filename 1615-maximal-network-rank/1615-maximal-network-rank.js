var maximalNetworkRank = function(n, roads) {

    //Create adjacency list.  Since roads go both ways, we add
  //connections to both cities.
    
    roads = roads.reduce((connections, [city1, city2]) => {
    if (!connections[city1]) connections[city1] = new Set()
    if (!connections[city2]) connections[city2]  = new Set();
    connections[city1].add(city2)
    connections[city2].add(city1)
    return connections
  }, {})
    
  let maxVal = 0
  //Convert adjacency list back to array to iterate over.

  roads = Object.entries(roads)
    
  //Loop through combinations and calculate max value.

    for (let i = 0; i < roads.length - 1; i++) {
    
        const [city, connections] = roads[i]
        for (let j = i + 1; j < roads.length; j++) {
            const [city2, connections2] = roads[j]
            let val = connections.size + connections2.size
            if (connections.has(city2 - 0)) val--;
            maxVal = Math.max(val, maxVal)
        }
    }
    return maxVal
}

