var express = require("express");

var router = express.Router();

// Import the model (burgers.js) to use its database functions.
var burger = require('../models/burgers.js')

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
  burger.all(function (data) {
    res.render('index', {
      burgers: data
    });
  });
});

router.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.update({
    devoured: req.body.devoured
  }, condition, function() {
    res.redirect("/burgers");
  });
});

router.post("/create", function (req, res) {
  var cols = ['burger_name', 'devoured'];
  var vals = [req.body.burger, false];

  burger.create(cols, vals, function (response) {
    res.redirect('/burgers');
  });
})


// Export routes for server.js to use.
module.exports = router;