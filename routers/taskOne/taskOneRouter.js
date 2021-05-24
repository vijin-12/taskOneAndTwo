const express = require('express');
const router = express.Router();

const taskOneController = require('../../controllers/taskOne/taskOneController.js');

router.get('/', taskOneController.taskOne)


module.exports = router;