const express = require('express');
const router = express.Router();

// Require controller modules.
const address_controller = require('../controllers/addresses');

/// ADDRESSES ROUTES ///

// POST request for creating address.
router.post('/', address_controller.address_create);

// GET request for one address.
router.get('/:id', address_controller.address_detail);

// GET request for list of all address items.
router.get('/', address_controller.address_list);

// PUT request to update address.
router.put('/:id', address_controller.address_update);

// DELETE request to delete address.
router.delete('/:id', address_controller.address_delete);

module.exports = router;
