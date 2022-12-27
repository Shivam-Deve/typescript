function logValue(x: Date | string) {
    if (x instanceof Date) { // Date can be intialized using new
        console.log(x.toUTCString());
    } else {
        console.log(x.toUpperCase())
    }
}

type Fish={
    swim(): void;
}
type Bird = {
    fly:()=>void
}

function isFish(pet: Fish | Bird) {
    
}
function getFood() {
    
}