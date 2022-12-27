// anotation of object
let employee: { // this is annotation of objects
    readonly id: number,
    name: string,
    dob?: string, // optional properties
    retire: (date: Date) => void;
} = {
    id: 1,
    name: "shivam",
    retire: (date: Date) => {
        console.log(date);
    }
}
// the above code can also be written in following way
type Employee = {
    readonly id: number,
    name: string,
    retire:(date:Date)=>void
}
let emp2: Employee = {
    id: 1,
    name: "shivam",
    retire: (date: Date) => {
        console.log(date);
    }
}

//###################################################################################//

// few other types

type CardNUmber = {
    num1: string, // 4536
    num2: string, // 8647
    num3:string   // 3724
}
type ExpiryDate = {
    month: string,
    year:string
}

// intersection of three types (Cardnumber, Expirydate, cvv) => a new type having all three types
type Card = CardNUmber & ExpiryDate & { cvv: number } 

type User = { // this is type of the following object
    readonly _id:string
    name: string,
    isPaid:boolean
    email: string,
    isActive: boolean,
    card?:Card // this is optional
}

const user = { // it has User type
    _id:"a3ed9w",
    name: "Shivam",
    isPaid:true,
    email: "shivam@gmail.com",
    isActive: true,
    course:3
}

function createUser(user: User): User {
    // user._id = "2fd6n9"; // not allowed as "_id" is readonly
    if (user.isActive) {
        user.name=user.name +" is active"
    }
    return user
}

function createCourse(): {name:string,price:number } {
    return {name:"React",price:399}
}

createUser({_id:"1aef96", name: "Shivam", isPaid: true ,email:"shivam@gmail.com",isActive:true})
createUser(user) // error should have shown up here

export {}