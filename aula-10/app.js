const express = require('express')

const app = express()

app.get('/', (request, response) => {
  response.send("Você acessou a rota index :)")
})

let contatos = [
  {
    uuid: 'aec8b2d0-64f9-11eb-ae93-0242ac130002',
    nome: "Paulo Coelho",
    telefone: "(36) 92963-5698"
  },
  {
    uuid: 'b5233826-64f9-11eb-ae93-0242ac130002',
    nome: "Ivete Sangalo",
    telefone: "(27) 94324-1146"
  },
  {
    uuid: 'b9c25088-64f9-11eb-ae93-0242ac130002',
    nome: "Gisele Bundchen",
    telefone: "(67) 99125-4586"
  },
  {
    uuid: 'be311d52-64f9-11eb-ae93-0242ac130002',
    nome: "Pelé",
    telefone: "(51) 95036-4902"
  },
  {
    uuid: 'c186b8ea-64f9-11eb-ae93-0242ac130002',
    nome: "Roberto Carlos",
    telefone: "(22) 92701-8569"
  },
  {
    uuid: 'c81e8318-64f9-11eb-ae93-0242ac130002',
    nome: "Xuxa Meneghel",
    telefone: "(12) 99059-8621"
  }
]

app.get('/agenda', (requisicao, resposta) => {
  const { nome } = requisicao.query

  if (nome) {
    const contato = contatos.filter(contato => contato.nome === nome)
    resposta.json(contato)
  } else {
    resposta.json(contatos)
  }
})

app.get('/agenda/:uuid', (requisicao, resposta) => {
  const { uuid } = requisicao.params

  const [contato] = contatos.filter(contato => contato.uuid === uuid)

  if (contato) {
    resposta.json(contato)
  } else {
    resposta.sendStatus(404)
  }
})

app.delete('/agenda/:uuid', (requisicao, resposta) => {
  const { uuid } = requisicao.params

  contatos = contatos.filter(contato => contato.uuid !== uuid)

  resposta.sendStatus(204)
})

app.listen(3000, () => {
  console.log(`Servidor executando na uri http://localhost:3000`)
})