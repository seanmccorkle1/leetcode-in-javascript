const hashMap = new Map()

var encode = function(longUrl) {

    let code = Math.random().toString(32)

    // length should be 6-7, not 5-6

    code = code.slice(6)
    code.length

    if (code.length === 7){
        code = code.slice(1)
    }

    code
    code.length

    
    const tinyURL = `https://tinyurl.com/${code}`
    hashMap.set(tinyURL, longUrl)

    hashMap

    //decode(tinyURL) function will do hashMap.get(tinyURL)
    // tinyURL needs to be the key

    return tinyURL
}


/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(tinyURL) {
    return hashMap.get(tinyURL)
}

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */