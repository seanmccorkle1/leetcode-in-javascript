/**
 * @return {Generator<number>}
 */

// initialise first 2 sequence numbers
// initialise a loop so that function can return values indefinitely when called

// yield pauses fx execution and returns value, before continuing subsequent steps
// fibonacci sequence is updated in steps after yield

// note: 
// third term is the sum of first and second term

// therefore: term n is (n-1 + n- 2)


// var fibGenerator = function*() {
function* fibGenerator(){
    let leftNum = 0
    let rightNum = 1

    while (true) {
        yield leftNum;

        // leftNum goes up to rightNum
        // rightNum goes up to the two-sum rightNum +leftNum

        [leftNum,rightNum] = [rightNum,  leftNum+rightNum]
    }  
}

const generatorObj = fibGenerator()

fibGenerator()
generatorObj
generatorObj.next()

generatorObj.next().value; // 0
generatorObj.next().value; // 1