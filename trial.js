const fs = require("fs")

fs.writeFileSync("notes.txt", "JAI SHREE RAM this notes.txt file is created using Node JS ")
console.log(fs.readFileSync('./notes.txt', 'utf8'));

/*
NOTE::
Unlike console.log("") this fs.writeFileSync(" "," ") does not work unless is loaded
like here is loaded and stored in const fs
Here name of constant can be anything like f or p etc...but writing  fs is good practice
bcz this writeFileSync is defined in file system module  i.e. ("fs")....so variable name when written fs
avoids confusion
Here require('') fxn LOADS the fs module
*/
//fs.appendFileSync("notes.txt", " THIS IS APPENDED SENTENCEEEEE")
