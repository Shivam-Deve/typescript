const scores: Array<number> = []
const names: Array<string> = []

function identityOne(val: boolean | number):boolean | number {  // it may take any of number or boolean and return any of number or boolean
    return val;
}

function identityTwo(val: any): any{ // this may take a number and return a string
    return val;
}

function identityThree<Type>(val: Type): Type{ // if it takes a number it will return a number only
    return val;
}

function identityFour<H>(val: H): H{ // you may write anything in place of "H"
    return val;
}

interface Person{
    name: string;
    age:number
}

interface Database{
    connection: string;
    username: string;
    password:string
}

function getProduct<T>(products: T[]): T{ // array of type "T" is taken and single value of type "T" is returned
    return products[1]
}

let getProductTwo=<T,>(products: T[]): T=>{ // "<T,>" is used in jsx so that "<T>" is not mistaken for any html tag
    return products[1]
}

function anotherFunction<T,U extends Database>(valOne:T, valTwo:U): object{
    return {
        valOne,
        valTwo
    }
}

anotherFunction(3, {connection:"http",username:"Rahul",password:"Rahul@123"});

let p1 = identityFour<Person>({ name: "Rahul", age: 24 })
console.log(p1)

export {}