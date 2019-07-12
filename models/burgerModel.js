// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.all(function(res) {
      cb(res);
      console.log(res);
    });
  },
  create: function(val) {
    orm.create(val, function(res) {
      console.log(res);
    });
  },

  update: function(val) {
    orm.update(val, function(res) {
      console.log(res);
    });
  }
};

// Export the database functions for the controller.
module.exports = burger;
