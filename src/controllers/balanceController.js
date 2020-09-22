const express = require('express');
const router = express.Router();
const accountService = require('../services/accountService');

// GET - returns the balance for a given account
router.get('/', getBalance);

module.exports = router;

function getBalance(req, res) {
  try {
    const accountId = req.query.account_id;
    res.status(200).send(JSON.stringify(accountService.getBalance(accountId)));
  } catch (e) {
    // Return 404 if the given account is invalid
    if (e.message === 'INVALID_ACCOUNT') {
      res.status(404).send(JSON.stringify(0));
    } else {
      res.status(500).send(e);
    }
  }
}
