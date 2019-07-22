const router = require('express').Router();
const classController = require('./class.controller');

router.get('/getAllStudentsOfDept/:dept', classController.getClassData);
router.post('/', classController.postClassData);

module.exports = router;
