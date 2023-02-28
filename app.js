const {readFile, writeFile} = require('fs')

//callback hell engaged

readFile('./content/first.txt', 'utf8', (err, result) => {
    if(err) {
        console.log('Readfile experienced an error1')
        return;
    } 
    const first = result
    readFile('./content/subfolder/test.txt', 'utf8', (err,result) => {
        if(err) {
            console.log(err)
            return
        } 
        const second = result
        writeFile(
            './content/result-async.txt',
            `Here is the result: ${first}\n${second}`,
            (err,result)=>{
                if(err){
                    console.log(err)
                    return;
                }
                console.log(result)
            })

    })
} )
 