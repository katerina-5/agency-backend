const express = require('express');
const router = express.Router();

// Require controller modules.
const contract_controller = require('../controllers/contracts');

/// CONTRACTS ROUTES ///

// POST request for creating Contract.
router.post('/', contract_controller.contract_create);

// GET request for list of all Contract items.
router.get('/', contract_controller.contract_list);

// GET request for one Contract.
router.get('/:id', contract_controller.contract_detail);

// PUT request to update Contract.
router.put('/:id', contract_controller.contract_update);

// DELETE request to delete Contract.
router.delete('/:id', contract_controller.contract_delete);

module.exports = router;
