const { Pessoas } = require('../db/models')

const consultaTodasPessoas = async () => {
  const pessoas = await Pessoas.findAll({ raw: true })
  return pessoas
}

const consultaPorId = async (id) => {
  const pessoa = await Pessoas.findOne({
    where: {
      id: id
    },
    raw: true
  })

  if (!pessoa) {
    throw new Error(`A pessoa com o ID ${id} não existe no banco de dados`)
  }

  return pessoa
}

const buscaPessoasAtiva = async () => {
  const pessoas = await consultaTodasPessoas()

  const pessoasAtivas = []

  for (const pessoa of pessoas) {
    if (pessoa.ativo) {
      pessoasAtivas.push(pessoa)
    }
  }

  return pessoasAtivas
}

module.exports = {
  consultaTodasPessoas,
  consultaPorId,
  buscaPessoasAtiva
}
