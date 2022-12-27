// literal=exact | specific
let c: 10e8;

// c=10e9 // not allowed

let quantity: 50 | 100;

quantity = 100;
// quantity = 51; // not allowed

// refactoring of the code
type Quantity = 50 | 100;

let quant: Quantity = 100;
// quant = 101; // not allowed

// Nullable types
function greet(name: string | null) {
    if (name) {
        console.log(name.toUpperCase);
    } else {
        console.log("Hola!");
    }
}

greet("Shivam");
greet(null)
// greet(undefined); // not allowed