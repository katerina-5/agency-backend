const express = require('express');
const router = express.Router();

// Require controller modules.
const apartment_controller = require('../controllers/apartments');

/// APARTMENTS ROUTES ///

// POST request for creating Apartment.
router.post('/', apartment_controller.apartment_create);

// GET request for list of all Apartment items.
router.get('/', apartment_controller.apartment_list);

// GET request for one Apartment.
router.get('/:id', apartment_controller.apartment_detail);

// PUT request to update Apartment.
router.put('/:id', apartment_controller.apartment_update);

// DELETE request to delete Apartment.
router.delete('/:id', apartment_controller.apartment_delete);

module.exports = router;
