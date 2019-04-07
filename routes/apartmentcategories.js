const express = require('express');
const router = express.Router();

// Require controller modules.
const apartment_category_controller = require('../controllers/apartment_categories');

/// APARTMENT_CATEGORIES ROUTES ///

// POST request for creating Apartment Category.
router.post('/', apartment_category_controller.apartment_category_create);

// GET request for list of all Apartment Category items.
router.get('/', apartment_category_controller.apartment_category_list);

// GET request for one Apartment Category.
router.get('/:id', apartment_category_controller.apartment_category_detail);

// PUT request to update Apartment Category.
router.put('/:id', apartment_category_controller.apartment_category_update);

// DELETE request to delete Apartment Category.
router.delete('/:id', apartment_category_controller.apartment_category_delete);

module.exports = router;
