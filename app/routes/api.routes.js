
module.exports = app => {

  const users = require("../controllers/users.controller.js");
  const bookings = require("../controllers/bookings.controller");

  var router = require("express").Router();

  // Get booking detail
  router.post("/get/booking/detail/:id", bookings.getDetail);
  // Get booking list
  router.post("/get/all/booking", bookings.getAll);
  // Add new booking
  router.post("/add/booking", bookings.add);
  // Update booking
  router.put("/update/booking/:id", bookings.update);
  // Delete booking
  router.delete("/delete/booking/:id", bookings.delete);

  app.use("/api/", router);
};
