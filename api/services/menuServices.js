/**
 * Menu Service
 */

class MenuService {
    constructor() {
        this.menu = require('../models/menuModel');
    }

    getMenu() {
        return this.menu;
    }

    getMenuById(id) {
        return this.menu.find(item => item.id === id);
    }
}

module.exports = MenuService;