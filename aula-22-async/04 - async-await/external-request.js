const axios = require('axios').default;

const consultaPokemon = async (nome) => {
    const resultado = await axios.get(`https://pokeapi.co/api/v2/pokemon/${nome}`)
    
    if(resultado.status == 200) {
        return resultado.data
    } else {
        console.error('deu ruim')
    }
}

const executar = async () => {
    try {
        const ditto = await consultaPokemon('ditto')
        console.log(ditto);

        const pikachu = await consultaPokemon('pikachu')
        console.log(pikachu);
    } catch (error) {
        console.error(error);
    }
}

executar()
