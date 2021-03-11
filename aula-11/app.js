const express = require('express')

const rotasAgenda = require('./routes/agenda-rotas')
const rotasIndex = require('./routes/index-rotas')

const app = express()

app.use('/', rotasIndex)
app.use('/agenda', rotasAgenda)

app.listen(3000, () => {
  console.log(`Servidor executando na uri http://localhost:3000`)
})