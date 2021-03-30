const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const loginRouter = require('./routes/login');

const transacoesMiddleware = require('./middleware/transacoes');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/favicon.ico', (req, res) => res.status(204).end());

app.use(transacoesMiddleware.logarPath)

app.use('/', indexRouter);
app.use('/login', loginRouter);

app.use(function (req, res, next) {
  res.render('404')
});

app.use(function (err, req, res, next) {
  console.error(`Error da minha aplicação ${err.Message}`);
  res.render('error');
});

module.exports = app;
