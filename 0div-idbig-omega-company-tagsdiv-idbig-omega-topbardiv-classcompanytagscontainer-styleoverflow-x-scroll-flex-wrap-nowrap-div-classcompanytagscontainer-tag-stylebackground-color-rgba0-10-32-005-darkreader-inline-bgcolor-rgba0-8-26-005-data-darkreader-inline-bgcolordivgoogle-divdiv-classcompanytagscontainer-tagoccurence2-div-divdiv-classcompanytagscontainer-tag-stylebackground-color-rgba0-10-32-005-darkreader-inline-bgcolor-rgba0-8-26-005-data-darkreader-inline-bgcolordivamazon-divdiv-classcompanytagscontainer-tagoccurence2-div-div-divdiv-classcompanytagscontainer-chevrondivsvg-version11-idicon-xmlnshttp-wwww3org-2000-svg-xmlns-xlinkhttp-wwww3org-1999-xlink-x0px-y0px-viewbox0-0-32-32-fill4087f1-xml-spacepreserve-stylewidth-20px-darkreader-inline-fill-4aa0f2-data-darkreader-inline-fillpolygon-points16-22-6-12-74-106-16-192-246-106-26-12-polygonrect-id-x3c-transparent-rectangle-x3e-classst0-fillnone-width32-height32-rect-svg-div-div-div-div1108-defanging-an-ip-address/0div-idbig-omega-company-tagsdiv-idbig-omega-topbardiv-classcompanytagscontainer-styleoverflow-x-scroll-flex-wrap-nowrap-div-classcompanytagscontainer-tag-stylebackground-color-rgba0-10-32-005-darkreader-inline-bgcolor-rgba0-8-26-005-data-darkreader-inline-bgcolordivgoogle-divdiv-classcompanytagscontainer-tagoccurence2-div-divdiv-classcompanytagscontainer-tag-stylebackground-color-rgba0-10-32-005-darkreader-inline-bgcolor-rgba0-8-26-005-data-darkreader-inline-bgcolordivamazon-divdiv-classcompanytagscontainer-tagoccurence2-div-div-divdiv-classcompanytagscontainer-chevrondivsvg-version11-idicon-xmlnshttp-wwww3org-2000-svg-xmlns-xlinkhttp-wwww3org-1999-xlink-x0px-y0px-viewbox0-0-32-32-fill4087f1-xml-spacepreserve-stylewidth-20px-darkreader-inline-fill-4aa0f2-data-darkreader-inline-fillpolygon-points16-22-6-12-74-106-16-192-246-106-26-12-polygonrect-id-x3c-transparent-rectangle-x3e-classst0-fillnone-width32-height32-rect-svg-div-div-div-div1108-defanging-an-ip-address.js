let call=s=>    s.replace(/(\.)/g, (match, group)=> `[${group}]`)

var defangIPaddr = function(string) {
    return call(string)
}