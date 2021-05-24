const express = require('express');
const router = express.Router();

const taskTwoController = require('../../controllers/taskTwo/taskTwoController.js');

router.get('/', taskTwoController.taskTwo)


module.exports = router;