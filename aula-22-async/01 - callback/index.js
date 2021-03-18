const fs = require('fs')

console.log('console 1')

const meuCallback = (error, content) => {
    console.log('erro:', error);
    console.log('conteúdo:', content);
}

fs.readFile('arquivos/um.txt', { encoding: 'utf-8' }, meuCallback)

console.log('console 2')
console.log('console 3')