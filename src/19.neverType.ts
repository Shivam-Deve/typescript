function processEvents(): never{
    while (true) {
        // ...
    }
}

function reject(message: string): never{
    throw new Error(message);
}

processEvents();
console.log("hello") // since processEvents() never returns the control and in tsconfig 'allowunreachablecode' is set to 'false' 