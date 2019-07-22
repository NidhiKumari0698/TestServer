const router = require('express').Router();
const hodController = require('./hod.controller');

//router.get('/:dept', hodController.getHodData);
router.get('/', hodController.getHodData);

router.post('/', hodController.postHodData);

module.exports = router;
