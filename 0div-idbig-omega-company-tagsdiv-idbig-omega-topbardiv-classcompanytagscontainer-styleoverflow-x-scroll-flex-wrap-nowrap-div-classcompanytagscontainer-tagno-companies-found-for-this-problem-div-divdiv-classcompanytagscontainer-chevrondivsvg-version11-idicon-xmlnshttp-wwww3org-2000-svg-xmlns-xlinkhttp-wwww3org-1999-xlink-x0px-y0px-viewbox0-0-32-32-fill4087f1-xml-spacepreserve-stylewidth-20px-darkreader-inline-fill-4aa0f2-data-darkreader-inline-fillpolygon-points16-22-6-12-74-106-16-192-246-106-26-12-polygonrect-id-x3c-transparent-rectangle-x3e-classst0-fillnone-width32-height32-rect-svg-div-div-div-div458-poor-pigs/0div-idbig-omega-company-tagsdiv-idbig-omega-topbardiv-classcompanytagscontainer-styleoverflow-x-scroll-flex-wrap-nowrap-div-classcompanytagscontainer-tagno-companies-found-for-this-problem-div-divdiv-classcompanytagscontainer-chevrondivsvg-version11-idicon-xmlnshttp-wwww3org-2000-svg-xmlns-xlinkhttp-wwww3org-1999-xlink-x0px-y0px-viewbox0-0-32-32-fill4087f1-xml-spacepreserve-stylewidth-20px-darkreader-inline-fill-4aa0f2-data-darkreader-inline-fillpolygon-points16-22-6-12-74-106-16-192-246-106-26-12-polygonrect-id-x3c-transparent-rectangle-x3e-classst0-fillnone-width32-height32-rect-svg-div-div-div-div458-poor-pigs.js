var poorPigs = function(buckets, minutesToDie, minutesToTest) {
    // Calculate the max time for a pig to test buckets...
    // Note that, max time will not be (minutesToTest / minutesToDie)...
    // Thinking about all pigs drinking all buckets at last, but no one died immediately, so the poison bucket is the last bucket...
    let max_time = minutesToTest / minutesToDie + 1;
    // Initialize the required minimum number of pigs...
    let req_pigs = 0;
    // To find the minimum number of pigs, find the minimum req_pigs such that Math.pow(max_time, req_pigs) >= buckets...
    while (Math.pow(max_time, req_pigs) < buckets)
        // Increment until it will be greater or equals to bucket...
        ++req_pigs;
    // Return the required minimum number of pigs...
    return req_pigs;
};