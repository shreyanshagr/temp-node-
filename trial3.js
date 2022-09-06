const validator = require("validator")

const fxn=require("./note.js")

const notereceived=fxn();

console.log(notereceived)
console.log(validator.isEmail("shree@ram.com"))
//true
console.log(validator.isEmail("hello.com"))
//false
console.log(validator.isURL("https://www.npmjs.com/package/validator"))
//true
console.log(validator.isURL("https://www.npmjs.com/validator"))
//ture irrespective of messed up URL as it checks only specific things like https.//__// etc

