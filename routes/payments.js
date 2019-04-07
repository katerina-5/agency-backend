const express = require('express');
const router = express.Router();

// Require controller modules.
const payment_controller = require('../controllers/payments');

/// PAYMENTS ROUTES ///

// POST request for creating Payment.
router.post('/', payment_controller.payment_create);

// GET request for list of all Payment items.
router.get('/', payment_controller.payment_list);

// GET request for one Payment.
router.get('/:id', payment_controller.payment_detail);

// PUT request to update Payment.
router.put('/:id', payment_controller.payment_update);

// DELETE request to delete Payment.
router.delete('/:id', payment_controller.payment_delete);

module.exports = router;
