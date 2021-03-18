const fs = require('fs')

console.log('console 1')
console.log('console 2')

const arquivoDoisCallback = (error, content) => {
    console.log('=================== arquivo dois');
    console.log('erro 2:', error);
    console.log('conteúdo 2:', content);
}

console.log('console 3')

const arquivoUmCallback = (error, content) => {
    console.log('=================== arquivo um');
    console.log('erro 1:', error);
    console.log('conteúdo 1:', content);

    fs.readFile('arquivos/dois.txt', { encoding: 'utf-8' }, arquivoDoisCallback)
}

fs.readFile('arquivos/um.txt', { encoding: 'utf-8' }, arquivoUmCallback)

console.log('console 4')