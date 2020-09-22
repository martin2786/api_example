const express = require('express');
const router = express.Router();
const accountService = require('../services/accountService');

// routes
router.get('/', getBalance);

module.exports = router;

function getBalance(req, res) {
  try {
    const accountId = req.query.account_id;
    res.status(200).send(JSON.stringify(accountService.getBalance(accountId)));
  } catch (e) {
    if (e.message === 'INVALID_ACCOUNT') {
      res.status(404).send();
    } else {
      res.status(500).send(e);
    }
  }
}
