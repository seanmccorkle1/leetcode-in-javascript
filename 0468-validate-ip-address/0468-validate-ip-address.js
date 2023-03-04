// ^ and $ means it only counts as a match if this regex matches the WHOLE string

var validIPAddress = function (IPString) {
    
    // the regex will look for 4 periods, but theres only 3 in the original string
    let fixedIPV4String = 
    IPString +"."
    let fixedIPV6String = IPString +":"

    // 1st capturing group is for the {4} token

    // 2nd capturing group is to group all the | statements ON the "."
    // (10|243|145).(10|243|145).(10|243|145).(10|243|145).


    // ([0-9] | [10 - 99] | [100 - 199] | [200 - 249] | [250 - 255]) 


    const IPV4Regex= /^(([0-9]|[1-9][0-9]|1[0-9][0-9]|2([0-4][0-9]|5[0-5]))\.){4}$/
    const IPV6Regex = /^([a-fA-F0-9]{1,4}\:){8}$/


    // the last number doesnt have a ".", but the regex looks for it
    // and needs it, or it wont match anything because of the ^ and $


    if (IPV4Regex.test(fixedIPV4String) == true) {
        return "IPv4"
    }
    if (IPV6Regex.test(fixedIPV6String) == true) {
        return "IPv6"
    }
    
    return "Neither"
}


console.log(validIPAddress("96.2.167.255"), "IPv4")
// console.log(validIPAddress("216.226.236.246"), "IPv4", "check the regex")


// console.log(validIPAddress("2001:F:85a3:0000:0000:8a2e:0370:7334"), "IPv6", "hex (a-f), 8 blocks, leading zeroes allowed")
// console.log(validIPAddress("2002:G:85a3:0000:0000:8a2e:0370:7334"), "Neither", "G is not allowed in IPV6")


// console.log(validIPAddress("1e1.4.5.6"), "Neither", "match from the start, not inside the string")
// console.log(validIPAddress("1.1.1.1."), "Neither", "there should be no period at the end")



// console.log(validIPAddress("192.168.167.166.165"), "Neither", "5 integers, you need exactly 4")
// console.log(validIPAddress("192.168.167.256"), "Neither", "[0, 255] is the inclusive range, 256 is outside")


// console.log(validIPAddress("192.168.167.0"), "IPv4", "0 is valid, but 01 is not in ipv4")
// console.log(validIPAddress("192.168.167"), "Neither", "need 4 blocks for IPV4")