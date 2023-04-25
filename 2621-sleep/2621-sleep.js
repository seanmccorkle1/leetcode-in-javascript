
async function sleep(millis) {
    
    const p = new Promise(resolve => setTimeout(resolve, millis))
    await p
    return
    
}

// 1. call the async function (sleep(100))
// 2. *100 milliseconds pass*
// 3. do then() statements

const previousNow = Date.now()
sleep(100).then((f,r) => console.log(Date.now() - previousNow))   // 100