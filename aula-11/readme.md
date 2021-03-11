# Router

## Criar arquivo para as rotas de agenda

Crie uma pasta chamada `routes` e dentro dela um arquivo chamado `agenda-rotas.js`

## Criar arquivo para as rotas de agenda

Crie algumas rotas no `agenda-rotas.js` e teste no browser o funcionamento.

``` js
// routes/agenda-rotas.js

const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
  res.send("Estamos no path /agenda")
})

router.get('/:uuid', (req, res) => {
  res.send(`Estamos no path /agenda/:uuid, e o valor de uuid é ${req.params.uuid}`)
})

module.exports = router
```

```js
// app.js

const express = require('express')

const rotasAgenda = require('./routes/agenda-rotas')

const app = express()

app.get('/', (req, res) => {
  res.send("Estamos na index :)")
})

app.use('/agenda', rotasAgenda)

app.listen(3000, () => {
  console.log(`Servidor executando na uri http://localhost:3000`)
})
```

## Adicionar as lógicas que existiam nas rotas de agenda

```js
// routes/agenda-rotas.js
const express = require('express')

const router = express.Router()

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

router.get('/', (req, res) => {
  const { nome } = req.query

  if (nome) {
    const contato = contatos.filter(contato => contato.nome === nome)
    res.json(contato)
  } else {
    res.json(contatos)
  }
})

router.get('/:uuid', (req, res) => {
  const { uuid } = req.params

  const [contato] = contatos.filter(contato => contato.uuid === uuid)

  if (contato) {
    res.json(contato)
  } else {
    res.sendStatus(404)
  }
})

module.exports = router
```

## Criar arquivo para as rotas da index

Dentro da pasta `routes` crie um arquivo chamado `index-rotas.js` e mova a lógica de execução da rota para ele.

```js
// routes/index-rotas.js

const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
  res.send("Estamos na index :)")
})

module.exports = router
```

```js
// app.js

const express = require('express')

const rotasAgenda = require('./routes/agenda-rotas')
const rotasIndex = require('./routes/index-rotas')

const app = express()

app.use('/', rotasIndex)
app.use('/agenda', rotasAgenda)

app.listen(3000, () => {
  console.log(`Servidor executando na uri http://localhost:3000`)
})
```

# Controller

## Reorganização

Crie uma pasta chamada `controllers` e dentro dela um arquivo chamado `agenda-controller.js` e `index-controller.js`  

Agora precisamos mover a lógica de execução das rotas para os controladores:  

### index

```js
// controllers/index-controller.js

const getIndex = (req, res) => {
  res.send("Estamos na index :)")
}

module.exports = {
  getIndex
}
```

```js
// routes/index-rotas.js

const express = require('express')

const controller = require('../controllers/index-controller')

const router = express.Router()

router.get('/', controller.getIndex)

module.exports = router
```

### agenda

```js
// controllers/agenda-controller.js

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

const buscaContatos = (req, res) => {
  const { nome } = req.query

  if (nome) {
    const contato = contatos.filter(contato => contato.nome === nome)
    res.json(contato)
  } else {
    res.json(contatos)
  }
}

const buscaContatosPorUuid = (req, res) => {
  const { uuid } = req.params

  const [contato] = contatos.filter(contato => contato.uuid === uuid)

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
```

```js
// routes/agenda-rotas.js

const express = require('express')
const controller = require('../controllers/agenda-controller')

const router = express.Router()

router.get('/', controller.buscaContatos)
router.get('/:uuid', controller.buscaContatosPorUuid)

module.exports = router
```

# Model

## Reorganização

Crie uma pasta chamada `models` e dentro dela um arquivo chamado `agenda-model.js`

Agora precisamos mover o objeto `contatos` que está em nossa controller para esse novo arquivo e criar algumas funções que o controlador utilizará para obter as informações:

- buscaTodosContatos()
- buscaContatoPorNome(nome)
- buscaContatosPorUuid(uuid)

```js
// models/agenda-model.js

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
```

Agora iremos importar na controler o model que acabamos de criar  

```js
// controllers/agenda-controller.js

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
```
