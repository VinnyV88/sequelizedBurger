var models  = require('../models');
var express = require('express');
var router  = express.Router();

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
  var data = {
    burgers: {},
    orders: {}
  };
  models.Burger.findAll({})
  .then(function (burgers_data) {
    data.burgers = burgers_data
    // models.Customer_Order.findAll({include:[models.Burger], order:[[models.Burger, 'burger_name', 'DESC']]})
    models.Customer_Order.findAll({include:[models.Burger], order:[['id', 'ASC']]})
    .then(function (orders_data) {
      data.orders = orders_data
      res.render('index', data)
    });
  });
});

router.post("/create", function (req, res) {
  models.Burger.create({
    burger_name: req.body.burger
  }).then(function() {
    res.redirect('/burgers');
  });
});

router.post("/order", function (req, res) {
  console.log(req.body);
  models.Customer_Order.create({
    cust_name: req.body.custName,
    burger_qty: req.body.burgerQty,
    devoured: req.body.devoured,
    BurgerId: req.body.burgerId
  }).then(function() {
    res.send("OK");
    // res.redirect('/burgers');
  });
});

// Export routes for server.js to use.
module.exports = router;