interface User{
    readonly _id:number
    email: string,
    userId: number,
    awt?: string
    // startTrial?:()=>string
    startTrial(): string
    getCoupon?(couponCode:string):number // "?" here will produce error when it is invoked
}

interface User{ // reopening of a interface
    gitHub?:string
}

interface Admin extends User{
    _aid: string
    role: 'class teacher' | 'principal' | 'director'
}

const user1: User = {
    _id: 1,
    email: "rahul@gamil.com",
    userId: 1,
    startTrial: () => "Trial started!",
    getCoupon: (code) => {
        return parseInt(code)
    }
};

let result = user1.startTrial(); // doesn't work when declared with "?"
// let code: number = user1.getCoupon("123"); // this will result in error as decared with '?'
console.log(result)

export { }