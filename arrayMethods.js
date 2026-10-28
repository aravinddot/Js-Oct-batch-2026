


// const automationTools = ["Selenium", "Cypress", "Playwright", "TestCafe", "Nightwatch"];

// push

//automationTools.push('Puppeteer', 'Robot Framework') - it will add elements to the end of the array

//automationTools.unshift('Puppeteer', 'Robot Framework') - it will add elements to the beginning of the array

//automationTools.pop() - it will remove the last element from the array

// automationTools.shift() - it will remove the first element from the array


// console.log(automationTools.includes("playwright")) - it will check if the array contains the specified element and return true or false

//console.log(automationTools.indexOf("playwright")) //- it will return the index of the specified element in the array, or -1 if it is not found



//const automationTools = ["Selenium", "Cypress", "Playwright", "TestCafe", "Nightwatch"];

// const legacyTools = ["QTP", "LoadRunner", "UFT"];

// const result = automationTools.concat(legacyTools) // it will merge the two arrays and return a new array

// console.log(result); 

//console.log(automationTools.reverse()) // it will reverse the order of elements in the array


// const values = [1, 2, [3, 4, [5, 6, [7, 8, [9, [10]]]]]]

// const val = [1, 2, [3, 4], [5, 6], [7, 8], [9, 10]]

// console.log(values.flat(Infinity)) - it will flatten the nested array to a single level

// console.log(val.flat()) - it will flatten the nested array to a single level



// const automationTools = ["Selenium", "Cypress", "Playwright", "TestCafe", "Nightwatch"];

// // console.log(automationTools.slice(1, 1)) // it will return a shallow copy of a portion of the array from the start index to the end index (not inclusive)

// automationTools.splice(1, 0, "Puppeteer", "Robot Framework") // it will add elements at the specified index without removing any existing elements

// console.log(automationTools)


// const num = [10, 20, 30, 40, 50]

// const result = num.map(val => val * 10) // it will create a new array with each element multiplied by 10

// console.log(result)

// const automationTools = ["Selenium", "Cypress", "Playwright", "TestCafe", "Nightwatch"];

// const res = automationTools.map(tool => tool.toUpperCase()) // it will create a new array with each element converted to uppercase
// console.log(res)



// const num = [100, 20, 30, 40, 50]

// const result = num.filter(value => value > 20) // it will create a new array with elements greater than 20
// console.log(result)


// const result = num.find(value => value > 20) // it will return the first element that satisfies the condition
// console.log(result)


// const result = num.findIndex(value => value > 20) 
// console.log(result)

// const result = num.every(value => value > 21) // it will check if all elements are greater than 21
// console.log(result)


// const result = num.some(value => value > 101) // it will check if at least one element is greater than 101
// console.log(result)

// const str = "abc"

//console.log(Array.isArray(num)) // it will check if the variable is an array and return true or false

// if(Array.isArray(num))


// const num = [100, 20, 30, 40, 50]

// const result = num.sort((a, b) => a - b) // it will sort the array in ascending order
// console.log(result)


const automationTools = ["Selenium", "Cypress", "Playwright", "TestCafe", "Nightwatch"];


// for(const tool of automationTools.keys()) { // it will iterate over the keys (indices) of the array
//     console.log(tool)
// }

// for(const tool of automationTools.values()) { // it will iterate over the values of the array
//     console.log(tool)
// }

// for(const tool of automationTools.entries()) { // it will iterate over the key-value pairs of the array
//     console.log(tool)
// }