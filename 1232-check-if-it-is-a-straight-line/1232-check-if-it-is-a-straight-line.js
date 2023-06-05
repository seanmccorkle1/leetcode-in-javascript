var checkStraightLine = function(coords) {
    const n = coords.length;
    
    for (let i = 0; i < n - 2; i++) {
        const area = Math.abs(1/2 * (
            (coords[i][0] * coords[i + 1][1] + coords[i + 1][0] * coords[i + 2][1] + coords[i + 2][0] * coords[i][1]) -
            (coords[i][1] * coords[i + 1][0] + coords[i + 1][1] * coords[i + 2][0] + coords[i + 2][1] * coords[i][0])
        ));
        
        if (area > 0) return false;
    }
    
    return true;
};
