const fs = require('fs')

const leitorDeArquivos = file => new Promise((resolve, reject) => {
    fs.readFile(file, { encoding: 'utf-8' }, (error, content) => {
        if(error) {
            reject(error)
        } else {
            resolve(content)
        }
    })
})

leitorDeArquivos('arquivos/um.txt')
    .then(conteudo => {
        console.log('=================== arquivo um');
        console.log(conteudo);

        return leitorDeArquivos('arquivos/dois.txt')
    })
    .then(conteudo => {
        console.log('=================== arquivo dois');
        console.log(conteudo);
    })
    .catch(error => {
        console.error(error);
    })






    // 
    // .then(conteudo => {
    
    // })