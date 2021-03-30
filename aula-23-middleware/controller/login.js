const { validationResult } = require('express-validator');

const index = (req, res, next) => {
  res.render('login/index');
}

const submit = (req, res) => {
  const dadosEnviado = req.body
  res.send(`Informações enviadas pelo form: ${JSON.stringify(dadosEnviado)}`);
}

const cadastro = (req, res) => {
  const errors = { errors: {} }
  res.render('login/cadastro', errors);
}

const novoCadastro = (req, res) => {
  const errors = validationResult(req);

  console.log(req.autenticacao)

  if (!errors.isEmpty()) {
    return res.render('login/cadastro', errors);
  }

  const dadosEnviado = req.body
  res.send(`SUCESSO!!!!!<br>Dados do novo cadastro: ${JSON.stringify(dadosEnviado)}`);
}

module.exports = {
  index,
  submit,
  cadastro,
  novoCadastro
}