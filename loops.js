
// Traditional Loops

// 1. While Loop
// 2. Do While Loop
// 3. For Loop



// Modern Loops

// 1. for in loop
// 2. for of loop
// 3. forEach loop



// const automationTools = ["Selenium", "Cypress", "Playwright", "TestCafe", "Nightwatch", "QTP", "TOSCA", "Puppeter"];


// for(const tool in automationTools) {

//     console.log(automationTools[tool])

//     // if(automationTools[tool] == "Playwright") {
//     //     console.log("inside Loop: " + automationTools[tool])
//     // }
// }


// for(const tool of automationTools) {

//     console.log(tool)
// }


// const automationTools = ["Selenium", "Cypress", "Playwright", "TestCafe", "Nightwatch", "QTP", "TOSCA", "Puppeter"];


// automationTools.forEach((tool, index, array) => {
//     console.log(tool)
//     console.log(index)
//     console.log(array)
// })


// traditional loops

const automationTools = ["Selenium", "Cypress", "Playwright", "TestCafe", "Nightwatch", "QTP", "TOSCA", "Puppeter", "RobotFramework"];


// for(let i = 0; i < automationTools.length; i++) { // 7 + 1
//     console.log(automationTools[i])
// }



// let i = 0

// while(i < automationTools.length) {
//     console.log(automationTools[i])
//     i++
// }


let i = 1000


do {
    console.log(i)
    i++
} while(i < 9)



// while(9 < 9) {
//     console.log(i)
//     i++
// }