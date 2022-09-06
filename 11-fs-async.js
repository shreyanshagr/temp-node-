const fs = require('fs')
console.log('1.starting this task');
fs.readFile('/Users/shreyansh/DEVs DEN/notes-app/content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
    }
    const first = result


    fs.readFile('/Users/shreyansh/DEVs DEN/notes-app/content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err)
        }
        const second = result

        fs.writeFile('/Users/shreyansh/DEVs DEN/notes-app/content/result-async.txt', `HERE IS THE RESULT : ${first} , ${second}`
            , (err, result) => {
                if (err) {
                    console.log(err);
                }
                console.log('2.done this task');
            })

    })
})
console.log('3.starting new one');

/*

shreyansh@SHREYANSHs-MacBook-Air DEVs DEN % node "/Users/shreyansh/DEVs DEN/notes-app/11-fs-async.js"
1.starting this task
3.starting new one
2.done this task
shreyansh@SHREYANSHs-MacBook-Air DEVs DEN % 
*/