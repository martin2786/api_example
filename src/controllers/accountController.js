const express = require('express');
const router = express.Router();
const accountService = require('../services/accountService');

// POST to reset the account information
router.post('/', resetAccount);

module.exports = router;

function resetAccount(req, res) {
  try {
    accountService.initialize();
    res.status(200).send('OK');
  } catch (e) {
    res.status(500).send(e);
  }
}
