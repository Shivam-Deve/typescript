enum Size { Small = 3, Medium, Large }; // next are prev + 1
// if you give any string to any of the enum then you have to give then all the string value saparatly
const enum Sizes { Small = 's', Medium = 'm', Large = 'l' }; // transpiled code will be reduced
let mySize: Sizes = Sizes.Medium;
console.log(mySize);
