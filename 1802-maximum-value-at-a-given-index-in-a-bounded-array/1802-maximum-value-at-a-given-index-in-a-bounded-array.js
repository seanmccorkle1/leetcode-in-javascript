let n;
let idx;
let limit;

const maxValue = (N, index, maxSum) => {
    n = N, idx = index, limit = maxSum;
    return BinarySearch(0, Number.MAX_SAFE_INTEGER);
}

const BinarySearch = (low, high) => {
    while (low <= high) {
        let mid = low + parseInt((high - low) / 2);
        if (possible(mid)) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return high;
};

const possible = (v) => { // check if can build an array sum <= limit, a[idx] = v
    
    let ln = idx, rn = n - idx - 1, x = v - 1;
    let lsum = cal(x, ln), rsum = cal(x, rn); // lsum = [L, x]   L = x - ln + 1, if L > 0. otherwise lsum = [1, x] + rest of 1's append to left

    let sum = lsum + v + rsum;
    return sum <= limit;
};

const sumOfRange = (l, r) => (l + r) * (r - l + 1) / 2;

const cal = (start, len) => {
    let has = start; // start to 1
    if (has <= len) {
        let rest = len - has;
        return sumOfRange(1, start) + rest * 1;
    } else { // start to min
        let min = has - len + 1;
        return sumOfRange(min, start);
    }
};