const express = require('express');
const router = express.Router();

// Require controller modules.
const house_controller = require('../controllers/houses');

/// HOUSES ROUTES ///

// POST request for creating House.
router.post('/', house_controller.house_create);

// GET request for list of all House items.
router.get('/', house_controller.house_list);

// GET request for one House.
router.get('/:id', house_controller.house_detail);

// PUT request to update House.
router.put('/:id', house_controller.house_update);

// DELETE request to delete House.
router.delete('/:id', house_controller.house_delete);

module.exports = router;
