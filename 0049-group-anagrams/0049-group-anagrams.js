var groupAnagrams = function(array){

    // take a normal array and return a double array = use an object
    const object = {}

    array.length

    for (let string of array){

        let anagram = string.split("").sort().join("")
        const anagramArray = object[anagram]

        // group it ON the anagram
        // means make the anagram the key

        anagramArray
            ? anagramArray.push(string)
            : object[anagram]   = [string];

        object
    }

    object
    
    return Object.values(object).sort((a,b) => a.length - b.length)
}

groupAnagrams(["eat","tea","tan","ate","nat","bat"]) // [["bat"],["nat","tan"],["ate","eat","tea"]]
// groupAnagrams([""])