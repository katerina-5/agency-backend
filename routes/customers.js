const express = require('express');
const router = express.Router();

// Require controller modules.
const customer_controller = require('../controllers/customers');

/// CUSTOMERS ROUTES ///

// POST request for creating Customer.
router.post('/', customer_controller.customer_create);

// GET request for list of all Customer items.
router.get('/', customer_controller.customer_list);

// GET request for one Customer.
router.get('/:id', customer_controller.customer_detail);

// PUT request to update Customer.
router.put('/:id', customer_controller.customer_update);

// DELETE request to delete Customer.
router.delete('/:id', customer_controller.customer_delete);

module.exports = router;
