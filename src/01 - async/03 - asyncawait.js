function printString(string) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(string);
            resolve();
        }, Math.floor(Math.random() * 100) + 1);
    });
}

async function printAll() {
    await printString("A");
    await printString("B");
    await printString("C");
    await printString("D");
    await printString("E");
}

printAll();
