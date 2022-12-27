function render(document: any) {
    document.move();
    document.fly();
    document.whateverWeWant();
}

// the better implementation of the above code can be done using type 'unknown' and 'Narrowing'
function renderBetter(document: unknown) {
    // Narrowing
    if (document instanceof String) {
        document.toLowerCase();
    }
}