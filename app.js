//modules
const nameFile = require('./names')
const nameList = nameFile.names

const sayHi = require('./utils')





for(x=0; x < nameList.length; x++){
    sayHi(nameList[x])
}