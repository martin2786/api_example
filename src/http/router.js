const { Router } = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const compression = require('compression');
const errorHandler = require('./errors');
const account = require('../state/account');

const router = Router();

const apiRouter = Router();

apiRouter.use(cors()).use(bodyParser.json()).use(compression());

// routes
apiRouter.use('/balance', require('../controllers/balanceController'));
apiRouter.use('/event', require('../controllers/eventsController'));
apiRouter.use('/reset', require('../controllers/accountController'));

router.use('/api', apiRouter);

module.exports = router;
