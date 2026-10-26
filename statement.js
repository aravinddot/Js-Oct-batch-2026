// Statements in JavaScript

// switch case
// if else

const env = "QA";

switch (env) {
  case "DEV":
    console.log("DEV Enviroment");
    break;
  case "QA":
    console.log("QA Enviroment");
    break;
  case "UAT":
    console.log("UAT Enviroment");
    break;
  case "PROD":
    console.log("PROD Enviroment");
    break;
  default:
    console.log("Unknown Enviroment");
}

// const a = 10
// const b = "10"

// // console.log(a === b)

// if(a === b) {
//     console.log("a and b are equal")
// } else {
//     console.log("a and b are not equal")
// }

const marks = 85;

if (marks >= 90) {
  console.log("Grade A");
} else if (marks >= 75) {
  console.log("Grade B");
} else if (marks >= 50) {
  console.log("Grade C");
} else {
  console.log("fail");
}
