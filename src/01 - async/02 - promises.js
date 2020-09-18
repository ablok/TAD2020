function printString(string) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(string);
            resolve();
        }, Math.floor(Math.random() * 100) + 1);
    });
}

function printAll() {
    printString("A")
        .then(() => printString("B"))
        .then(() => printString("C"))
        .then(() => printString("D"))
        .then(() => printString("E"));
}

printAll();
