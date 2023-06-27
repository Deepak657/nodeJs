const express = require("express");

const {
  createTour,
  deleteTour,
  getAllTours,
  updateTour,
  getTour,
  aliasTopTours,
} = require("./../controllers/tourController");

const router = express.Router();

// router.param("id", checkID);

router.route("/top-3-cheap").get(aliasTopTours, getAllTours);

router.route("/").get(getAllTours).post(createTour);
router.route("/:id").get(getTour).patch(updateTour).delete(deleteTour);

module.exports = router;
