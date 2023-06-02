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

function* fibGenerator(){
    
    let leftNum = 0
    let rightNum = 1
    
    // return 0 before it gets changed
    
    while (true) {
        
        // need a semiclon before statements that start with []
        // or it tries to do leftNum[0,1]
        
        yield leftNum;
        let higher = leftNum + rightNum;
        leftNum = rightNum
        rightNum = higher
        // [leftNum,rightNum] = [rightNum,  higher]
    }  
}

const generatorObj = fibGenerator()

fibGenerator()

generatorObj.next().value; // 0
generatorObj.next().value; // 1