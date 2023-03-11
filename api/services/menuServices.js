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
        let result = null;
        try {
            result = this.menu.find(item => item.id === id);
        } catch (error) {
            // emit error
            throw error;
        } 
        return result;
    }

    addMenuItem(menuItem) {
        let result = null;
        try {
            let lastId = this.menu[this.menu.length - 1].id;
            menuItem.id = lastId + 1;
            this.menu.push(menuItem);
            result = {
                status: 201,
                payload: menuItem
            };
        } catch (error) {
            // emit error
            result = {
                status: 500,
                errorMessage: error.message
            };
        }
        return result;
    }
}

module.exports = MenuService;