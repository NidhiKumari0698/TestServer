const router = require('express').Router();
const studentController = require('./student.controller');

router.get('/', studentController.getStudentData);
//router.get('/:branch',studentController.getStudentDataByBranch)
router.post('/', studentController.postStudentData);
router.delete('/:id', studentController.delteStudent);

module.exports = router;
