const express = require("express");
const app = express();
const tourRoute = require("./routes/tourRoutes");

////1) MIDDLEWARE
app.use(express.json());

app.use((req, res, next) => {
  console.log("hello from the middleware");
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

////3) ROUTES

app.use("/api/v1/tours", tourRoute);

module.exports = app;
