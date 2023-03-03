var countOdds =(lowNum, highNum)=> {
    lowNum%2==0 ? lowNum+=1:"a"
    highNum % 2==0 ? highNum-=1 : "a"
    return (highNum-lowNum)/2+1
}

// const lowNumIsEven = (lowNum % 2 == 0) ?true:false
//     const highNumIsEven = highNum % 2 == 0

//     // lowNum going up keeps it in the range
//     if (lowNumIsEven) {
//         lowNum = lowNum + 1
//     }

//     // highNum going down keeps it in the range
//     if (highNumIsEven) {
//         highNum = highNum - 1
//     }
//     let range = highNum - lowNum

//     return range/2+1
// }

// console.log(countOdds(3, 7),  3, "there are 3 odd numbers in the range [3, 5, 7]")
// console.log(countOdds(3, 6),   2, [3, 5])

// // console.log(countOdds(8, 10), 1, "9 is the only odd in [8, 9, 10]")