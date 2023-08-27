var canCross = function(stones) {
    const pos = new Set(stones);
    return helper(pos, stones[stones.length - 1]);
};

function helper(pos, end, curr = 0, jump = 1, memo = new Map()) {
    if (!pos.has(curr)) return false;
    let key = curr + ',' + jump;
    if (memo.has(key)) return memo.get(key);
    if (curr === end) return true;
    let less = jump > 1 ? helper(pos, end, curr + jump, jump - 1, memo) : false;
    memo.set(key, less || helper(pos, end, curr + jump, jump, memo) || helper(pos, end, curr + jump, jump + 1, memo));
    return memo.get(key);
}