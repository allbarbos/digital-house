let CONTATOS = [
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

const buscaTodosContatos = () => {
  return CONTATOS
}

const buscaContatoPorNome = (nome) => {
  const contato = CONTATOS.filter(contato => contato.nome === nome)
  return contato
}

const buscaContatosPorUuid = (uuid) => {
  const contato = CONTATOS.filter(contato => contato.uuid === uuid)
  return contato
}

module.exports = {
  buscaTodosContatos,
  buscaContatoPorNome,
  buscaContatosPorUuid
}