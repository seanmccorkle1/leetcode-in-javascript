var defangIPaddr = function(string) {
    return call(string)
}

let call=s=>    s.replace(/\./g, "[.]")
