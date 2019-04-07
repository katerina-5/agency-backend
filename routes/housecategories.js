const express = require('express');
const router = express.Router();

// Require controller modules.
const house_category_controller = require('../controllers/house_categories');

/// HOUSE_CATEGORIES ROUTES ///

// POST request for creating House Category.
router.post('/', house_category_controller.house_category_create);

// GET request for list of all House Category items.
router.get('/', house_category_controller.house_category_list);

// GET request for one House Category.
router.get('/:id', house_category_controller.house_category_detail);

// PUT request to update House Category.
router.put('/:id', house_category_controller.house_category_update);

// DELETE request to delete House Category.
router.delete('/:id', house_category_controller.house_category_delete);

module.exports = router;
