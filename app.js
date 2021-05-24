const express = require('express');
const path = require('path');
const morgan = require('morgan');
const nunjucks = require('nunjucks');

const AppError = require('./utils/appError')
const globalErrorHandler = require('./controllers/errorController');
const taskOneRouter = require('./routers/taskOne/taskOneRouter.js');
const taskTwoRouter = require('./routers/taskTwo/taskTwoRouter.js');

const app = express();

app.set('view engine', 'nunjucks');
nunjucks.configure('views', {
    autoescape: true,
    express: app
});

app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.use(morgan('dev'));

app.use('/v1/taskOne', taskOneRouter);
app.use('/v1/taskTwo', taskTwoRouter);


app.all('*', (req, res, next) => { // page not found handler
    err = new AppError(`can't find ${req.originalUrl} on this server`, 404);
    next(err);
});

app.use(globalErrorHandler);
module.exports = app;