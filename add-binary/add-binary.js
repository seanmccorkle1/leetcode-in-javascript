/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = (string1,string2)=>(BigInt("0b"+string1) + BigInt("0b"+string2)).toString(2)