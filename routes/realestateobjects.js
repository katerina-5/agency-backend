const express = require('express');
const router = express.Router();

// Require controller modules.
const realestateobject_controller = require('../controllers/realestateobjects');

/// REAL_ESTATE_OBJECTS ROUTES ///

// POST request for creating Real Estate Object.
router.post('/', realestateobject_controller.realestateobject_create);

// GET request for list of all Real Estate Object items.
router.get('/', realestateobject_controller.realestateobject_list);

// GET request for one Real Estate Object.
router.get('/:id', realestateobject_controller.realestateobject_detail);

// PUT request to update Real Estate Object.
router.put('/:id', realestateobject_controller.realestateobject_update);

// DELETE request to delete Real Estate Object.
router.delete('/:id', realestateobject_controller.realestateobject_delete);

module.exports = router;
