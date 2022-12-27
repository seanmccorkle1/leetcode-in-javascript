var maximumBags = function(capacity, rocks, additionalRocks) {
    const spaces = Array(capacity.length);
    for (let i = 0; i < capacity.length; i++) {
        spaces[i] = capacity[i] - rocks[i];
    }
    spaces.sort((a, b) => a - b);
    let i = 0;
    while (i < spaces.length) {
        additionalRocks -= spaces[i];
        if (additionalRocks < 0) {
            break;
        }
        i++;
    }
    return i;
};
