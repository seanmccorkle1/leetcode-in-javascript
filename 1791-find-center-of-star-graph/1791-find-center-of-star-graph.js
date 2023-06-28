var findCenter = function(edges) {
    
    const [p1, p2] = edges[0]
    const [p3, p4] = edges[1]
    
    if (p1 == p3 || p1 == p4){
        return p1
    } else if (p2 == p3 || p2 == p4){
        return p2
    }
    // ? p1 : p2
}
