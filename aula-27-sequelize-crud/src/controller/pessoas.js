const pessoasModel = require('../models/pessoas')

const listaPessoas = async (req, res) => {
  const pessoas = await pessoasModel.consultaTodasPessoas()
  res.json(pessoas)
}

const buscaPessoaPorId = async (req, res) => {
  try {
    const { id } = req.params

    const pessoa = await pessoasModel.consultaPorId(id)
    res.json(pessoa)
  } catch (err) {
    res.json({ error: err.message })
  }
}

const buscaPessoaAtiva = async (req, res) => {
  try {
    const pessoas = await pessoasModel.buscaPessoasAtiva()
    res.json(pessoas)
  } catch (err) {
    res.json({ error: err.message })
  }
}

module.exports = {
  listaPessoas,
  buscaPessoaPorId,
  buscaPessoaAtiva
}
