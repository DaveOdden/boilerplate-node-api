'use strict';
module.exports = function(app) {
  var itemCommands = require('../controllers/apiController');

  app.route('/items')
    .get(itemCommands.list_all_items)
    .post(itemCommands.create_an_item);

  app.route('/items/:itemId')
    .get(itemCommands.read_an_item)
    .put(itemCommands.update_an_item)
    .delete(itemCommands.delete_an_item);
};
