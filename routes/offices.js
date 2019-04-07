const express = require('express');
const router = express.Router();

// Require controller modules.
const office_controller = require('../controllers/offices');

/// OFFICES ROUTES ///

// POST request for creating Office.
router.post('/', office_controller.office_create);

// GET request for list of all Office items.
router.get('/', office_controller.office_list);

// GET request for one Office.
router.get('/:id', office_controller.office_detail);

// PUT request to update Office.
router.put('/:id', office_controller.office_update);

// DELETE request to delete Office.
router.delete('/:id', office_controller.office_delete);

module.exports = router;
