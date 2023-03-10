/**
 * Menu Controller
 */

const Menu = require('../models/menuModel');

// List all menu items
exports.menu_list = function (req, res) {
    Menu.find({}, function (err, menu) {
        if (err) return next(err);
        res.send(menu);
    })
}