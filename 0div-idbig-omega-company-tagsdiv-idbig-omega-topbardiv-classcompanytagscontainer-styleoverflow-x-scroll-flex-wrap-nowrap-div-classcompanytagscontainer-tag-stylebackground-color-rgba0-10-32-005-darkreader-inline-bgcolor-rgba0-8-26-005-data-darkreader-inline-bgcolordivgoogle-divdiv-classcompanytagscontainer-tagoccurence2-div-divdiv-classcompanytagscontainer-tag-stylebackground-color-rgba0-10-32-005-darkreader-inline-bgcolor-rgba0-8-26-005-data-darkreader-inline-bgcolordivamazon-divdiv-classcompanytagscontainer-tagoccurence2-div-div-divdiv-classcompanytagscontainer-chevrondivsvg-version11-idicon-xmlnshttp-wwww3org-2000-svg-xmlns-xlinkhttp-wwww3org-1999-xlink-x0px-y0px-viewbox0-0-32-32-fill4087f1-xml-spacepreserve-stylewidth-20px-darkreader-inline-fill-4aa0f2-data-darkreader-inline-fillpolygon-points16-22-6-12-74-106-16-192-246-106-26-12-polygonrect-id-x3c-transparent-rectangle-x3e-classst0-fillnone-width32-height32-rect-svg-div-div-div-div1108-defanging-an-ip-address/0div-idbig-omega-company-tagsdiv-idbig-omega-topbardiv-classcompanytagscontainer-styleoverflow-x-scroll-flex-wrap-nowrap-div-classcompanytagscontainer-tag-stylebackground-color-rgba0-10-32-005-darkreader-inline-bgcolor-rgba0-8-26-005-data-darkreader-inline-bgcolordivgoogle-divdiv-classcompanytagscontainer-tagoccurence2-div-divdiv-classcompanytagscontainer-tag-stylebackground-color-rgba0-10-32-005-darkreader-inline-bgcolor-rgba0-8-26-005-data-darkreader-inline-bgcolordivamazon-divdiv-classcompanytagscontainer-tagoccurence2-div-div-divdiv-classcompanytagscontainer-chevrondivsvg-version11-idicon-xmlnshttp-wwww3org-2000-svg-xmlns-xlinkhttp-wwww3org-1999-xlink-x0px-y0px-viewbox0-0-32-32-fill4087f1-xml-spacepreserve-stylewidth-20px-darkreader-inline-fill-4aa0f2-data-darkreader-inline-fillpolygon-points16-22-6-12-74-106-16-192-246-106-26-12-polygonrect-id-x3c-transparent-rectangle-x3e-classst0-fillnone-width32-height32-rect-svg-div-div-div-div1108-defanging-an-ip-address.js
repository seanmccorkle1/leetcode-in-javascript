let call=s=>    s.replace(/\./g, "[.]")

var defangIPaddr = function(string) {
    return call(string)
}