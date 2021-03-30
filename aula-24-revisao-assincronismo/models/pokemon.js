const axios = require('axios').default;

const getTop10 = async (listaPokes) => {
    if (listaPokes.length != 10) {
        throw Error('Só é possível consultar 10 pokemons')
    }

    const resultado = []

    for (const nome of listaPokes) {
        const { data } = await axios(`https://pokeapi.co/api/v2/pokemon/${nome}`)

        resultado.push({
            name: data.name,
            abilities: data.abilities,
            image: data.sprites.front_default
        })
    }

    return resultado
}

const seuPokemon = async (pokemon, treinador) => {
    // await axios(`https://pokeapi.co/api/v2/pokemon/ditto`)
    //     .then(result => {
    //         console.log(result);

    //         return axios(`https://pokeapi123.co/api/v2/pokemon/bulbasaur`)
    //     })
    //     .then(result => {
    //         console.log(result);
    //     })
    //     .catch(error => {
    //         console.error(error);
    //     })
    //     .finally(() => {
    //         console.log('FINAL DE TODAS AS PROMISSES');
    //     })

    try {
        const promises = [
            axios(`https://pokeapi.co/api/v2/pokemon/${pokemon}`),
            axios(`https://api.github.com/users/${treinador}`)
        ]

        const result = await Promise
            .allSettled(promises)

        const poke = result[0].value.data
        const github = result[1].value.data

        console.log(result);

        return {
            fotoTreinador: github.avatar_url,
            pokeId: poke.id,
            pokeName: poke.name
        }
    } finally {
        console.log('FINAL DE TUDO');
    }


}

module.exports = {
    getTop10,
    seuPokemon
}
