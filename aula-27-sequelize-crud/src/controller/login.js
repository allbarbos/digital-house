const index = async (req, res) => {
  res.render('login/index')
}

const submit = (req, res) => {
  const dadosEnviado = req.body
  res.send(`Informações enviadas pelo form: ${JSON.stringify(dadosEnviado)}`)
}

const cadastro = (req, res) => {
  res.render('login/cadastro')
}

const novoCadastro = (req, res) => {
  const dadosEnviado = req.body
  res.send(`Dados do novo cadastro: ${JSON.stringify(dadosEnviado)}`)
}

module.exports = {
  index,
  submit,
  cadastro,
  novoCadastro
}
