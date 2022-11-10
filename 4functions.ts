function addTwo(num:number):number {
    return num + 2;
}

function getUpper(val:string):string {
    return val.toUpperCase();
}

let signUp = (name:string, email:string, password:string,isPaid:boolean):boolean =>{
    return true;
}

function consoleError(errMsg:string):void {
    console.log(errMsg);
}

function handleError(errMsg: string): never{
    throw new Error(errMsg)
}

let result = getUpper("shivam");

// result=addTwo(5); this will result in error message

const heros = ['thor', 'tony', 'steve'];

const heroMessage=heros.map((hero:string):string =>`Hero is ${hero}`)

export {}