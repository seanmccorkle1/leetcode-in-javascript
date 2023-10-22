let call=s=>    s.replace(/(\.)/g, (match, p)=> `[${p}]`)

var defangIPaddr = function(string) {
    return call(string)
}
