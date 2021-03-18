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

const executar = async () => {
    try {
        const conteudoUm = await leitorDeArquivos('arquivos/123.txt')
        console.log(conteudoUm);
    } catch (error) {
        console.error(error);
    }
}

executar()
