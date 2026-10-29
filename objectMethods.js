// const automation = {
//     name: "playwright",
//     age: 6,
//     company: "Microsoft",
//     country: "USA"
// }

//Object.freeze(automation) // prevent any modifications to the object

// Object.seal(automation) // prevent adding or removing properties, but allow updating existing ones

// automation.programming = "JavaScript" // add new property to the object

// automation.name = "selenium" // update the name property of the object

// delete automation.age // remove the age property from the object

// console.log(automation)

// const automation = {
//     name: "playwright",
//     age: 6,
//     company: "Microsoft",
//     country: "USA"
// }

// console.log(automation.name) // dot notation

// console.log(automation['name']) // bracket notation

// for(const key in automation) {
//     console.log(automation[key]) // iterate over object properties using for...in loop
// }

// for(const key of Object.keys(automation)) { // iterate over object keys using Object.keys() method
//     console.log(key)
// }

// for(const key of Object.values(automation)) { // iterate over object values using Object.values() method
//     console.log(key)
// }

// for(const key of Object.entries(automation)) { // iterate over object entries using Object.entries() method
//     console.log(key)
// }

const automation = {
  name: "playwright",
  age: 6,
};

const tool = {
  company: "Microsoft",
  country: "USA",
};

const result = Object.assign(automation, tool) // merge tool object into automation object
console.log(result) 
