const {Router} = require('express');
const {getTwittByKey} = require('../controllers/twitt');
const router = Router();

router.get('/:key', getTwittByKey);

module.exports = router;