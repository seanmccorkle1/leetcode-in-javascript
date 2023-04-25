

async function sleep(millis) {
    const p = new Promise(resolve => setTimeout(resolve, millis))
    await p
}

let t = Date.now()
sleep(100).then((v) => console.log(Date.now() - t))   // 100