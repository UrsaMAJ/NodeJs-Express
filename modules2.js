//Builtin Mods:
//OS, Path, FS, HTTP etc.
//Node Docs for full list
//Review later: HTTPS 

const os = require('os')

//return system uptime
console.log(`Current user: ${os.userInfo().username}`)

//return system uptime

let uptime = os.uptime()/60

console.log(`System uptime: ${uptime} minutes`)

//os info

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOS)


