async function waitDemo() {
    secondsToWait = 5;

    console.log("Waiting " + secondsToWait + " seconds");
    await wait(secondsToWait * 1000);
    console.log("Waited " + secondsToWait + " seconds");
}

function wait(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

waitDemo();