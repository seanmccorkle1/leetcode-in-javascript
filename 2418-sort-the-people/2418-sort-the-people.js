
var sortPeople = function(names, heights) {
  const people = [];
  
  // for(let [index, name] of names.entries()) {
  //   people.push([name, heights[index]]);
  // }
  return people.sort((a, b) => b[1] - a[1]).map(([name]) => name);
}


var sortPeople = function(nameArray, heightArray) {

    const array = []
    
    for (let index=0; index < nameArray.length; index++){
        
        const currName = nameArray[index]
        const currHeight = heightArray[index]

        let keyValueSubarray = [currName, currHeight]
        array.push(keyValueSubarray) 
        
        // obj[currName] = currHeight
    }
    
    return array.sort((a,b) => b[1] - a[1]).map(subarray => subarray[0])
    // return nameArray.sort((a,b) => obj[b] - obj[a])

    // return nameArray.sort((a,b) => obj[b] - obj[a])
    
}

console.log(sortPeople(["Mary","John","Emma"], [180,165,170]), ["Mary","Emma","John"])