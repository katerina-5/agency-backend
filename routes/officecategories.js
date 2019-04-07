const express = require('express');
const router = express.Router();

// Require controller modules.
const office_category_controller = require('../controllers/office_categories');

/// OFFICE_CATEGORIES ROUTES ///

// POST request for creating Office Category.
router.post('/', office_category_controller.office_category_create);

// GET request for list of all Office Category items.
router.get('/', office_category_controller.office_category_list);

// GET request for one Office Category.
router.get('/:id', office_category_controller.office_category_detail);

// PUT request to update Office Category.
router.put('/:id', office_category_controller.office_category_update);

// DELETE request to delete Office Category.
router.delete('/:id', office_category_controller.office_category_delete);

module.exports = router;
