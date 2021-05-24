const catchAsync = require('../../utils/catchAsync');


exports.taskOne = catchAsync(async (req, res, next) => {
    return res.status(200).render('taskOne/index.html')
})