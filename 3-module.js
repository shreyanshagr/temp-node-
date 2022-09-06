//Common JS,every file is module(by defalut)
//Modules-Encapsulated Code(only share minimum)

const name = require("/Users/shreyansh/DEVs DEN/notes-app/4-names.js")
// console.log(name);
const sayHifxn = require("/Users/shreyansh/DEVs DEN/notes-app/5-utils.js")

sayHifxn("newname");
sayHifxn(name.hari);
sayHifxn(name.shyam);

const data = require("/Users/shreyansh/DEVs DEN/notes-app/6-alternativeflavours.js")
console.log(data)

//NOTE:: HERE WE HAVE NOT STORED THE MIND GRANADE BY IMPORTNG INTO ANY VARIABLE NEITHER PRINTED IT.....BUT ON WRITING  require("/Users/shreyansh/DEVs DEN/notes-app/7-mind-granade.js") 7-mind-granade is iMPORTED and in that file we have IMPORTED called the function by writing addValues() at the end of file 7 and hence it gets called and sum value gets printed on terminal   refer video 52:00 min 
require("/Users/shreyansh/DEVs DEN/notes-app/7-mind-granade.js")