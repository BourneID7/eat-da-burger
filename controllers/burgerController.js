var express = require("express");
var router = express.Router();
var burger = require("../models/burgerModel.js")

// Create all routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    burger.all(function(data) {
      var hbsObject = {
        burgers: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req, res) {
    burger.create([req.body.burger_type], function(result) {
        // Send back the burger info
        res.json({ id: result.id });
        console.log("Burger added: " + result.burger_type);
    });
});

router.put("/api/burgers/:id", function(req, res) {
    var val = req.params.id;
    console.log("value", val);
  
    burger.update(val, function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      };
    });
  });

module.exports = router;