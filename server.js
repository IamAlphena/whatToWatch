const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");
const routes = require("./routes");
const path = require("path");

require("dotenv").config;

const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  session({
    secret: "7jhdsfy88ry3hf8bcu89xby34",
    resave: false,
    saveUninitialized: true,
  })
);
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/movieDB");

app.post("/searchpage", function (req, res) {
  if (!req.session.user) {
    return res.status(401).send();
  }
  return res.status(200).send("/searchpage");
});

// If no API routes are hit, send the React app
app.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../client/public/index.html"));
});

// Start the API server
app.listen(PORT, function () {
  console.log(`==> API Server now listening on PORT ${PORT}!`);
});
