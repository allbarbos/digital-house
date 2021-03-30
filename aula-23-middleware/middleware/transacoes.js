const logarPath = (req, res, next) => {
    console.log(`passando em: ${req.path}`);
    next()
}

module.exports = {
    logarPath
}