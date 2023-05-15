async function sleep(millis) {

    // await is return for async
    // same as "return new Promise"
    
    await new Promise(thenFn => setTimeout(thenFn, millis))
}

// 1. call the async function (sleep(100))
// 2. setTimeout all pause execution for 100 milliseconds
// 3. run promise.then() function

const previousNow = Date.now()
sleep(100).then(() => console.log(Date.now() - previousNow))   // 100