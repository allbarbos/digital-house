const { Pessoas } = require('../models')

const listaPessoas = async (req, res) => {
  const pessoas = await Pessoas.findAll()
  res.json(pessoas)
}

const buscaPessoaPorId = async (req, res) => {
  const { id } = req.params

  const pessoa = await Pessoas.findOne({
    where: {
      id: id
    }
  })

  res.json(pessoa)
}

module.exports = {
  listaPessoas,
  buscaPessoaPorId
}
