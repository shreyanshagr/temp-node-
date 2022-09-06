const os = require('os')
// NOTE:: THESE ARE BUIT IN MODULES AND DO NOT REQUIRE  './example' SYNTAX AS IT CAN BE DIRECTLY WRITTEN AS 'exapmle'
const user = os.userInfo();
console.log(user);

//method that returns the System upTime
console.log(`The upTime of the system is ${os.uptime()} seconds.`)

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOs)