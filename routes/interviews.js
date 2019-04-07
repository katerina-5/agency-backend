const express = require('express');
const router = express.Router();

// Require controller modules.
const interview_controller = require('../controllers/interviews');

/// INTERVIEWS ROUTES ///

// POST request for creating Interview.
router.post('/', interview_controller.interview_create);

// GET request for list of all Interview items.
router.get('/', interview_controller.interview_list);

// GET request for one Interview.
router.get('/:id', interview_controller.interview_detail);

// PUT request to update Interview.
router.put('/:id', interview_controller.interview_update);

// DELETE request to delete Interview.
router.delete('/:id', interview_controller.interview_delete);

module.exports = router;
