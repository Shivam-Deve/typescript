let user: [string, number, boolean];

user = ["Shivam", 24, true];
// user=[24,"Shivam", true] // not allowed as order here matters

type User = [number, string];

let u1: User = [123, "Rahul"]


export {}