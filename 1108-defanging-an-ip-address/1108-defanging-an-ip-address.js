/**
 * @param {string} address
 * @return {string}
 */
const defangIPaddr = string=> string.replace(/\./g, "[.]")