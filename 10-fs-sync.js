const fs = require('fs')
console.log("1.starting this task");
const first = fs.readFileSync('/Users/shreyansh/DEVs DEN/notes-app/content/first.txt', 'utf8')
const second = fs.readFileSync('/Users/shreyansh/DEVs DEN/notes-app/content/second.txt', 'utf8')


console.log(first);
console.log(second);
console.log("hello");


//NOTE:: HERE IN SYNC FS SB KUCH SYNC ME HOTA HAI .....MEANS YAHA FIRST AND SECOND KO FETCH KR KE PRINT KRNE ME JADA TIME LGTA HAI THAN HELLO PRINT KRNE ME....FIR BHI AGR FIRST SECOND PHLE LIKHA HAI TOH VHI PHLE PRINT HOGA NAAA KI hello .....BUT ASYNC ME AISA NHI HOTA....JO PHLE LOAD HOTA HAI...i.e. JO PROCESS FAST HOTI HAI VOH PHLE HO JATI HAI IRRESPECTIVE OF HIERARCHY i.e. CONTROL KA FLOW FIRST SECOND SE GUJAR KR hello PR  BADH JAEGA...AND AGR FILE SE TXT LOAD KRNA HELLLO PRIINT KRNE SE FAST RHA TOH VOH PRINT HO JAEGA VRNA PHLE FAST VALA hello PRINT HO JAEGA...FIR FIRST AND SECOND .......THATs WHY ASYNC>>>>SYNC
fs.writeFileSync('/Users/shreyansh/DEVs DEN/notes-app/content/result-sync.txt', `HERE IS THE RESULT : 
${first} , ${second}`)
const result = fs.readFileSync('/Users/shreyansh/DEVs DEN/notes-app/content/result-sync.txt', 'utf8')

console.log(result);
console.log("2.done this task");

console.log("3.starting new task");

// fs.writeFileSync('/Users/shreyansh/DEVs DEN/notes-app/content/result-sync.txt', `HERE IS THE RESULT : ${first} , ${second}`, { flag: 'a' })


/*
shreyansh@SHREYANSHs-MacBook-Air DEVs DEN % node "/Users/shreyansh/DEVs DEN/notes-app/10-fs-sync.js"
1.starting this task
2.done this task
3.starting new task
shreyansh@SHREYANSHs-MacBook-Air DEVs DEN % 
*/