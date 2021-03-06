// import mySql connection
var connection = require("./connection.js");

var orm = {
    all: function(cb) {
        connection.query("SELECT * FROM burgers;", function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    create: function(val, cb) {
        connection.query("INSERT INTO burgers (burger_type) VALUES (?)", [val], function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    update: function(val, cb) {
        connection.query("UPDATE burgers SET eaten = true WHERE id = ?", [val], function(err, result){
            if (err) throw err;
            cb(result);
        });
    }
};

// export orm
module.exports = orm;