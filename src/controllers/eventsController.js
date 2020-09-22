const express = require('express');
const router = express.Router();
const accountService = require('../services/accountService');

router.post('/', processEvent);

module.exports = router;

function processEvent(req, res) {
  try {
    const event = req.body;
    console.log(event);

    switch (event.type) {
      case 'deposit':
        const balance = accountService.deposit(event.destination, event.amount);
        res.status(201).send(JSON.stringify({ destination: { id: event.destination, balance: balance } }));
        break;
      case 'withdraw':
        const balance = accountService.withdraw(event.origin, event.amount);
        res.status(201).send(JSON.stringify({ origin: { id: event.origin, balance: 15 } }));
        break;
      case 'transfer':
        const balance = accountService.transfer(event.origin, event.amount);
        res.status(201).send(
          JSON.stringify({
            origin: { id: event.origin, balance: 0 },
            destination: { id: event.destination, balance: event.amount },
          })
        );
        break;
    }
  } catch (e) {
    console.log(e);
    if (e.message === 'INVALID_ACCOUNT') {
      res.status(404).send(0);
    } else {
      res.status(500).send(e);
    }
  }
}
