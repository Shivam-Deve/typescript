let score: number | string

score = 45;
score = '45';
// score = true; // not allowed

const arr: (string | number)[] = [1, 2, 3, 4, "4"];

let pi: 3.14 = 3.14
// pi=3.15 // mot allowed

let seat: 'aisle' | 'middle' | 'window'
// seat='side upper' // not allowed
seat = 'window'

type User={
    readonly _uid: string | number,
    name:string
}

type Admin = {
    readonly _aid: string | number,
    name:string
}

function createUser(user:User| Admin): User | Admin{
    // user._aid.toLowerCase() // mpt allowed as user may result in any of Admin or User
    return user
}


export {}