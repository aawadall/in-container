/**
 * Menu Controller
 */

const MenuService = require('../services/menuServices');
const menuService = new MenuService();

// List all menu items
exports.menu_list = function (req, res) {
    res.send(menuService.getMenu());
}

// Get menu item by id
exports.menu_details = function (req, res) {
    let result = null;
    try {
        result = menuService.getMenuById(req.params.id);
    } catch (error) {
        res.status(500).send(error.message);
    }

    if (result) {
        res.status(200).send(result);
    } else {
        res.status(404).send('Menu item not found');
    }
}

// Create menu item
exports.menu_create = function (req, res) {
    let result = null;
    try {
        result = menuService.addMenuItem(req.body);
    } catch (error) {
        res.status(500).send(error.message);
    }

    if (result.status === 201) {
        res.status(201).send(result.payload);
    } else {
        res.status(result.status).send(result.errorMessage);
    }
}

