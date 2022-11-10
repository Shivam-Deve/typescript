type CardNUmber = {
    num1: string, // 4536
    num2: string, // 8647
    num3:string   // 3724
}
type ExpiryDate = {
    month: string,
    year:string
}

type Card = CardNUmber & ExpiryDate & { cvv: number } 

type User = {
    readonly _id:string
    name: string,
    isPaid:boolean
    email: string,
    isActive: boolean,
    card?:Card // this is optional
}

const user = {
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