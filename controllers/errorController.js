const sendErrorDev = (err, req, res) => {
    return res.status(err.statusCode).render('error.html', {
        title: 'something went wrong',
        msg: err.message
    })
}


module.exports = (err, req, res, next) => {
    err.status = err.status || 'error';
    err.statusCode = err.statusCode || 500;
    let error = new Object(err);
    error.message = err.message;

    sendErrorDev(error, req, res)
}