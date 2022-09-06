const namee = require("./utils.js")
const fxn = require("./utils.js")
/*
here we call require that loads utils.js which is situated inside notes-app folder
(./example.js) is used to refer the files of folder notes-app   
*/
console.log("JAI SHREE RAM")

const name = "BAJRANGBALI"
console.log(name)
/*To use variables defined in other files we need to export it using module.exports
and here in other file which is using other file's variable we may have to call it using 
require and store in varible like here namee.Here namee is storing what is exported here 
from utils.js
 */
const sum = namee(2, 5)
const sum2 = fxn(7, 5)
console.log(namee)
console.log(fxn)
console.log(sum)
console.log(sum2)
 //console.log(fxn)
/*NOTE: BOTH namee and  fxn receives last imported object i.e. add()
 */