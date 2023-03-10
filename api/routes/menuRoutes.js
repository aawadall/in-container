/**
 * Menu Routes
 */

const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const menu_controller = require('../controllers/menuControllers');

// endpoints 
router.get('/', menu_controller.menu_list);

module.exports = router;