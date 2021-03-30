const logTime = (req, res, next) => {
    // chamou model, foi no banco de dados, validou tudo e tá bala
    req.autenticacao = {
        user: "allan@barbosa.com",
        pass: "iajsiuoS891823$3asdas"
    }
    next();
}

module.exports = {
    logTime
}