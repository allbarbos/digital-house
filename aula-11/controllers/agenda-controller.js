const model = require('../models/agenda-model')

const buscaContatos = (req, res) => {
  const { nome } = req.query

  let resultado

  if (nome) {
    resultado = model.buscaContatoPorNome(nome)
  } else {
    resultado = model.buscaTodosContatos()
  }

  res.json(resultado)
}

const buscaContatosPorUuid = (req, res) => {
  const { uuid } = req.params

  const [contato] = model.buscaContatosPorUuid(uuid)

  if (contato) {
    res.json(contato)
  } else {
    res.sendStatus(404)
  }
}


module.exports = {
  buscaContatos,
  buscaContatosPorUuid
}