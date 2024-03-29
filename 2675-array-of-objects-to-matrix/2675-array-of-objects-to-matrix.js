const flatten = (a, prefix = []) => {
    return Object.entries(a)
  .reduce((r, [k, v]) => (typeof v !== 'object' || v === null)
    ? { ...r, [[...prefix, k].join('.')]: v }
    : { ...r, ...flatten(v, [...prefix, k]) }, {})

}
var jsonToMatrix = function(a)  {    
    a = a.map(i => flatten(i))
    const keys = Object.keys(a.reduce((r, i) => ({ ...r, ...i }), {})).sort()
    return a.reduce((r, i) => [ ...r, keys.map(key => (key in i) ? i[key] : '')], [ keys ])
}
