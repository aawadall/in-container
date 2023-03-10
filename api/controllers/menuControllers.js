/**
 * Menu Controller
 */

const MenuService = require('../services/menuServices');
const menuService = new MenuService();

// List all menu items
exports.menu_list = function (req, res) {
    // Menu.find({}, function (err, menu) {
    //     if (err) return next(err);

    //     // peek into menu 
    //     console.log(menu);
    //     res.send(menu);
    // })
    res.send(menuService.getMenu());
}