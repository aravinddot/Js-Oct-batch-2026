
const person  = ["fname", "lname", 30, "address"] // global scope

if(true) {
    var a = 10 // global scope
    const person  = ["fname", "lname", 30, "address"]
}

console.log(a)


if(true) {
    const a = 20 // block scope
    const person = 11
}


