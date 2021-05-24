const catchAsync = require('../../utils/catchAsync');


exports.taskTwo = catchAsync(async (req, res, next) => {
    return res.status(200).render('taskTwo/index.html')
})