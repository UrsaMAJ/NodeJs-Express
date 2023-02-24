//Globals - No Window object
// __dirname - Path to currrent directory
// __filename - Filename
// require - function to use modules
// module - info about current file
// process - info about env where the program is being executed

var counter = 1

function consoleMessage(message){
    
    console.log(`${message}: ${counter}`)
    counter++

}

setInterval(consoleMessage, 1000, 'Hello World')