    /* 
     * building a single array for replacement information.
     * the goal is to replace the strings from the end(right) to the 
     * beginning(left) so the current replacement will not affect the next one.
     *
     * example: 
     *  S = "abcd"
     *  indexes = [0, 2]
     *  sources = ["a", "cd"]
     *  targets = ["eee", "ffff"]
     *  expected output = "eeebffff"

     *  replacements = [[2, 'cd', 'ffff'],[0, 'a', 'eee']]
     *  output: 
     *  iteration #1 -> 'ab' + 'fff' + '' = 'abffff'
     *  iteration #2 -> '' + 'eee' + 'bffff' = 'eeebffff'
     *  final output -> 'eeebffff'
*/


    var findReplaceString = function (inputString, indexes, sources, targets) {

        const replacements = indexes
            .map((index, index2) => [index, sources[index2], targets[index2]])
            .sort((a, b) => b[0] - a[0])

        const output = replacements.reduce((string, [index, source, target]) => {

            string
            inputString
            // if (string.substring(index, index + source.length) !== source) {

            let endIndex = index + source.length
            
            if (string.slice(index, endIndex) != source) {
                return string
            }

            // return `${string.substring(0, index)}${target}${string.substring(index + source.length)}`
            return `${string.slice(0, index)}${target}${string.slice(index + source.length)}`

        }, inputString)

        return output
    }

    console.log(findReplaceString("abcd", [0, 2], ["ab", "ec"], ["eee", "ffff"]), "eeecd")