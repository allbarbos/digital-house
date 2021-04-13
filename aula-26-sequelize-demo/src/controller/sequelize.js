const { Pessoas } = require('../models')

const index = async (req, res) => {
    const pessoas = await Pessoas.findOne({ where: { email: 'paula@paula.com' } });
    res.json(pessoas);
}

module.exports = {
    index,
}