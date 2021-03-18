const fs = require('fs')

console.log('console 1')
console.log('console 2')

// código hadouken
fs.readFile('arquivos/um.txt', { encoding: 'utf-8' }, (error, content) => {
    console.log('=================== arquivo um');
    console.log('erro:', error);
    console.log('conteúdo:', content);

    // código hadouken
    fs.readFile('arquivos/dois.txt', { encoding: 'utf-8' }, (error, content) => {
        console.log('=================== arquivo dois');
        console.log('erro:', error);
        console.log('conteúdo:', content);
    })
})

console.log('console 3')