/**
 * Menu Controller
 */

const Menu = require('../models/menuModel');

// List all menu items
exports.menu_list = function (req, res) {
    Menu.find({}, function (err, menu) {
        if (err) return next(err);

        // peek into menu 
        console.log(menu);
        res.send(menu);
    })
}