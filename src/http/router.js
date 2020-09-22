const { Router } = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const compression = require('compression');

const router = Router();

router.use(cors()).use(bodyParser.json()).use(compression());

// routes
router.use('/balance', require('../controllers/balanceController'));
router.use('/event', require('../controllers/eventsController'));
router.use('/reset', require('../controllers/accountController'));

module.exports = router;
