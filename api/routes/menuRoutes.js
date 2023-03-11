/**
 * Menu Routes
 */

const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const menu_controller = require('../controllers/menuControllers');

// endpoints 
router.get('/', menu_controller.menu_list);

router.get('/:id', menu_controller.menu_details);

router.post('/create', menu_controller.menu_create);

module.exports = router;