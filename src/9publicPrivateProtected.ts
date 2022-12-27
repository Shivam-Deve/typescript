class User{
    // private methods can also be declared in class
    private print() {
        console.log(this.name)
    }
    protected printData() {
        console.log(this.name)
    }
    public name:string;  // public is default modifier
    #email:string; // this JavaScript way to make a property private
    private card:number;
    constructor(name:string, email:string) {
        this.name = name;
        this.#email = email;
    }
    set setCard(carNumber:number) { // return type 'void' can't be declared here
        this.card=carNumber
    }
    get getCard(): number{
        return this.card
    }
}

class SubUser extends User{
    isFamily: boolean;
    details() {
        // this.print(); this will throw error
        this.printData()
    }
}

class Users{ // compaction of code of class "User"
    constructor(public name:string, private email:string) {
    }
}

const rahul = new User("Rahul", "rahul@gmail.com")
const ram = new Users("Ram", "ram@gmail.com")

console.log(rahul," ",ram)
// rahul.card // inaccessable outside class

export {}