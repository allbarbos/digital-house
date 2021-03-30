const model = require('../models/pokemon')

const nomesPokemons = [
    'ditto',
    'bulbasaur',
    'ivysaur',
    'venusaur',
    'charmander',
    'charmeleon',
    'charizard',
    'squirtle',
    'wartortle',
    'weedle'
]

const index = async (req, res, next) => {


    const resultado = await model.getTop10(nomesPokemons)

    res.render('pokemon/index', { resultado })
}

const detalhes = async (req, res, next) => {
    const { nome } = req.params
    // ESCREVERIA O CODIGO QUE MOSTRA OS DADOS DE DETALHES DO POKEMON
    res.render('pokemon/detalhes', { nome })
}

const seuPokemon = async (req, res, next) => {
    const { treinador } = req.query

    const num = Math.floor(Math.random() * 10)
    const pokemon = nomesPokemons[num - 1]

    const todos = await model.seuPokemon(pokemon, treinador)

    res.send(`${JSON.stringify(todos)}`)
}

module.exports = {
    index,
    detalhes,
    seuPokemon
}