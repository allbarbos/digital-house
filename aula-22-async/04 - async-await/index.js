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

// Açucar sintático em cima da Promise -> async/await
const executar = async () => {
    const conteudoUm = await leitorDeArquivos('arquivos/um.txt')
    console.log(conteudoUm);

    const conteudoDois = await leitorDeArquivos('arquivos/dois.txt')
    console.log(conteudoDois);
}

executar()
