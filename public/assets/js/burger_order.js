$(document).ready(function () {

  $(document).on("click", ".eat-burger", function (e) {
    e.preventDefault();
    var parms = {
      custName: "",
      burgerId: 0,
      burgerQty: 0,
      devoured: false
    }

    if ($("#cust-name").val().trim() == "") {
      $("#devour-error").text("Your Name is Required.");
    } else {
      $("#devour-error").empty();

      parms.burgerId = $(this).data("burger-id");
      parms.burgerQty = 1;
      parms.custName = $("#cust-name").val().trim();
      parms.devoured = true;

      console.log("eat-burger" + parms);

      $.ajax({
        url: "/burgers/order",
        data: parms,
        method: "POST"
      }).done(function (data) {
        //check for success
        console.log(data);
        var currentURL = window.location.origin;
        window.location = currentURL + "/burgers"

      });
    }
  });

  $("#order").on("click", function (e) {
    e.preventDefault();
    var burgersOrdered = 0;
    var burgers = $(".burger-order");
    var parms = {
      custName: "",
      burgerId: 0,
      burgerQty: 0,
      devoured: false
    }

    for (var i = 0; i < burgers.length; i++) {
      if (burgers[i].children[1].value > 0) {
        parms.burgerId = burgers[i].children[0].value;
        parms.burgerQty = burgers[i].children[1].value;
        parms.custName = $("#cust-name").val();
        parms.devoured = false;

        $.ajax({
          url: "/burgers/order",
          data: parms,
          method: "POST"
        }).done(function (data) {
          //check for success
          console.log(data);
          var currentURL = window.location.origin;
          window.location = currentURL + "/burgers"
        });

        burgersOrdered++;

      }

    }
    if (burgersOrdered == 0) {
      $("#devour-error").text("Enter a Quantity for at least 1 Burger.");
    } else {
      $("#devour-error").empty();
    }

  });

});