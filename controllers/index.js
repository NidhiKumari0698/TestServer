const router = require('express').Router();
const studentRouter = require('./student/index');
const classRouter = require('./class/index');
const hodRouter = require('./hod/index');

router.use('/student', studentRouter);

router.use('/class', classRouter);
router.use('/hod', hodRouter);

module.exports = router;
