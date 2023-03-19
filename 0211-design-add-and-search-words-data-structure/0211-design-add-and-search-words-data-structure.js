// This class shows each and every node of the trie

class Node {
    constructor(){
        this.keys = new Map();
        this.end = false;
    }
    
    setEnd() {
        this.end = true
    }
    
    isEnd() {
        return this.end
    }
}

var WordDictionary = function() {
    this.root = new Node()
}

/** 
 * @param {string} word
 * @return {void}
 */

// This just adds the word to the dictionary

WordDictionary.prototype.addWord = function(word) {
    let node = this.root;
    function rec(node, word){
        if(word){
            if(!node.keys.has(word[0]))
                node.keys.set(word[0], new Node());
            return rec(node.keys.get(word[0]), word.substr(1));
        }
        else node.setEnd();
    }
    rec(node, word)
    return true;
}

/** 
 * @param {string} word
 * @return {boolean}
 */

// This is the main recursive function where all of the magic is happening

WordDictionary.prototype.search = function(word) {
    
    let node = this.root;
    function rec(node, word){
        
		// returns false if the node doesn't exist
        if(node ==undefined) return false;
		
		// if the word exist
        if(word){
		
			// skipping any calculation if the word[0] is "."
            
            // Since we don't know what should be the next node, 
            // we need to go through all of them one by one
            
			if (word[0]== ".") {
                
                let out = false
                
                // Any one of the nodes will return true for the upcoming character in word after .
                // So, taking an OR operation
                
                for (let val of node.keys.keys()){
                    
                    if (!out){
                        out = rec(node.keys.get(val), word.substr(1))
                    }
                    
                    // else {
                    //     out = out
                    // }

                }
                
                return out
            }
            
            // If the node has encountered a word then the simple stuff

            else if (node.keys.has(word[0])){
                return rec(node.keys.get(word[0]), word.substr(1));
            }

            // otherwise return false when the above two are false
            
            else{
                return false
            }
        }
		// If the word doesn't exist, but it could have existed, 
        // just check if the node is the end node and return the result
        else return node.isEnd();
    }
    
    return rec(node, word);
}


/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */