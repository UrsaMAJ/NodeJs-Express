const {readFileSync, writeFileSync} = require('fs')

const first = readFileSync('./content/first.txt', 'utf-8')
const second = readFileSync('./content/subfolder/test.txt', 'utf-8')
console.log(first + '\n' + second)

writeFileSync('./content/result-syn.txt', `Hello World! \n${first + '\n' + second}`)