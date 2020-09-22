const express = require('express');
const router = express.Router();
const accountService = require('../services/accountService');

// routes
router.post('/', resetAccount);

module.exports = router;

function resetAccount(req, res) {
  try {
    console.log('initialize');
    accountService.initialize();
  } catch (e) {
    console.log(e);

    res.status(500).send(e);
  }
}
