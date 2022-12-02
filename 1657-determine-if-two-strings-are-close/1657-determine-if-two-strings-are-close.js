var closeStrings = function(word1, word2) {
    if (word1.length !== word2.length)  return false;
    
    const chars = new Array(26).fill(0),
          used = new Array(26).fill(false),
          a = 'a'.charCodeAt(0);
    
    for (let i = 0; i < word1.length; i++) {
        chars[word1.charCodeAt(i)-a]++;
        used[word1.charCodeAt(i)-a] = true;
    }
    
    let countMap = {};
    
    for (let n of chars) {
        if (countMap[n] === undefined)
            countMap[n] = 0;
        countMap[n]++;
    }
    
    chars.fill(0);
    for (let i = 0; i < word2.length; i++) {
        if (!used[word2.charCodeAt(i)-a])  // if there is new char not used in word1, return false
            return false;
        chars[word2.charCodeAt(i)-a]++;
    }
    
    for (let n of chars) {
        if (countMap[n] === undefined)   // if one char has the frequency unused in word1, return false
            return false;
        countMap[n]--;
        if (countMap[n] < 0)
            return false;
    }
    
    return true;
};
