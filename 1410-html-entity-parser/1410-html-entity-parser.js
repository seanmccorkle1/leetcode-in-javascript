var entityParser = function(text) {
  
        const map = {'&quot;': '"', '&apos;': "'", '&amp;' : '&', '&gt;'  : '>', '&lt;'  : '<', '&frasl;': '/' }
        
        return text.replace(/&amp;|&quot;|&apos;|&gt;|&lt;|&frasl;/g, match => map[match])
}

    //     return text.replace(/&amp;|&quot;|&apos;|&gt;|&lt;|&frasl;/g, function (m) {
    //         return map[m]
    // })
