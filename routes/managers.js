const express = require('express');
const router = express.Router();

// Require controller modules.
const manager_controller = require('../controllers/managers');

/// MANAGERS ROUTES ///

// POST request for creating Manager.
router.post('/', manager_controller.manager_create);

// GET request for list of all Manager items.
router.get('/', manager_controller.manager_list);

// GET request for one Manager.
router.get('/:id', manager_controller.manager_detail);

// PUT request to update Manager.
router.put('/:id', manager_controller.manager_update);

// DELETE request to delete Manager.
router.delete('/:id', manager_controller.manager_delete);

module.exports = router;
