type Customer = {
    birthday:Date
}

function getCustomer(id: number): Customer | null | undefined{
    return id == 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(0);

// customer.birthday // not allowed as customer can be null or undefined

customer?.birthday;

// optional element access
// let customers be an array which is null for the time being
let customers = null
customers?.[0] // to optionaly access 0th element

// optional function call
let log: any = null;
log?.("a");

