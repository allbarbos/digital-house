const index = (req, res) => {
  res.render('users', { title: 'Aula EJS' });
}

module.exports = {
  index
}