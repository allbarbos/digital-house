const index = (req, res) => {
  res.render('login/index');
}

const submit = (req, res) => {
  const dadosEnviado = req.body
  res.send(`Informações enviadas pelo form: ${JSON.stringify(dadosEnviado)}`);
}

module.exports = {
  index,
  submit
}