var models  = require('../models');
var express = require('express');
var router  = express.Router();

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
  models.Burger.findAll({})
    .then(function (data) {
    res.render('index', {
      burgers: data
    });
  });
});

router.put("/:id", function(req, res) {
  models.Burger.update({
    devoured: req.body.devoured
  },
  {
    where: { id : req.params.id }
  }
).then(function() {
    res.redirect("/burgers");
  });
});

router.post("/create", function (req, res) {
  models.Burger.create({
    burger_name: req.body.burger
  }).then(function() {
    res.redirect('/burgers');
  });
});

// Export routes for server.js to use.
module.exports = router;