const express = require('express');
const router = express.Router();
const accountService = require('../services/accountService');

// POST - performs an action on the account, the action is triggered based on the received type.
router.post('/', processEvent);

module.exports = router;

function processEvent(req, res) {
  try {
    const event = req.body;
    let balance = 0;

    // The type defines what kind of action is performed
    switch (event.type) {
      case 'deposit':
        balance = accountService.deposit(event.destination, event.amount);
        res.status(201).send(JSON.stringify({ destination: { id: event.destination, balance: balance } }));
        break;
      case 'withdraw':
        balance = accountService.withdraw(event.origin, event.amount);
        res.status(201).send(JSON.stringify({ origin: { id: event.origin, balance: 15 } }));
        break;
      case 'transfer':
        balance = accountService.transfer(event.origin, event.amount);
        res.status(201).send(
          JSON.stringify({
            origin: { id: event.origin, balance: 0 },
            destination: { id: event.destination, balance: event.amount },
          })
        );
        break;
    }
  } catch (e) {
    // Return 404 if the given account is invalid
    if (e.message === 'INVALID_ACCOUNT') {
      res.status(404).send(JSON.stringify(0));
    } else {
      res.status(500).send(e);
    }
  }
}
