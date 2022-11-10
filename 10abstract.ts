abstract class Person{
    constructor(
        public name: string,
        public age:number
    ) { }
    abstract getName():string
}

class Student extends Person{
    constructor(
        public sid: number,
        name:string,
        age:number
    ) {
        super(name,age)
    }
    getName(): string {
        return this.name
    }
}

let s1=new Student(1,"Rahul",24)
console.log(s1.age)
console.log(s1.getName())
export {}