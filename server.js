const express = require("express");
const bodyParser = require("body-parser");

var dbconnection = require("./db");
const app = express();
var restaurantRoute = require("./routes/restaurantsRoute");
var userRoute = require("./routes/userRoute");
var tableRoute = require("./routes/tableRoute");
var orderRoute = require("./routes/orderRoute");
var foodRoute = require("./routes/foodRoute");
var complaintRoute = require("./routes/complaintRoute");
var feedbackRoute = require("./routes/feedbackRoute");

app.use(bodyParser.json());
app.use("/api/restaurants/", restaurantRoute);
app.use("/api/users/", userRoute);
app.use("/api/complaints/", complaintRoute);
app.use("/api/tables/", tableRoute);
app.use("/api/orders/", orderRoute);
app.use("/api/foods", foodRoute);
app.use("/api/feedbacks/", feedbackRoute);

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");

  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  res.setHeader("Access-Control-Allow-Credentials", true);

  next();
});

const fs = require("fs");
const cors = require("cors"); // Import cors middleware

app.use(express.json());
app.use(cors()); // Enable cors middleware

// Route to handle appending form data to CSV file
app.post("/api/append-data", (req, res) => {
  const {
    restaurant,
    id,
    title,
    canteen_id,
    price,
    num_orders,
    category,
    avg_rating,
    num_rating,
    tags,
  } = req.body;
  console.log(req.body);

  // Append form data to CSV file
  const data = `${restaurant},${id},${title},${canteen_id},${price},${num_orders},${category},${avg_rating},${num_rating},${tags}\n`;
  fs.appendFile("data.csv", data, (err) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error appending data to file");
    } else {
      console.log("Data appended to file");
      res.status(200).send("Data appended to file");
    }
  });
});

const port = process.env.PORT || 8000;
app.listen(port, () => console.log("Node started"));
