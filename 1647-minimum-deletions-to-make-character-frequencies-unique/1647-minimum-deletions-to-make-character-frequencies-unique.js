var minDeletions = function(s) {
    const cnt = {};
    let deletions = 0;
    const used_frequencies = new Set();
    
    for (const c of s) {
        cnt[c] = (cnt[c] || 0) + 1;
    }
    
    for (const freq of Object.values(cnt)) {
        let f = freq;
        while (f > 0 && used_frequencies.has(f)) {
            f--;
            deletions++;
        }
        used_frequencies.add(f);
    }
    
    return deletions;
}
